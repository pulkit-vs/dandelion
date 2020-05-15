/**
 * @class ProjectController
 * @extends {BaseController}
 * 
 * @description
 *    API Controller for Projects
 * 
 * @author
 *  Nikhil Aggarwal, VectoScalar
 * 
 */

const
  BaseController = require('../common/base-controller'),
  DbQueries = require('../common/db-queries'),
  ServerConstants = require('../common/db-constants'),
  Logger = require('../common/logger'),
  Constants = require('../common/constants'),
  Utility = require('../common/utils');


const
  PROJECT_DB_TABLE = 'PROJECT',
  PROJECT_TRACKER_DB_TABLE = 'PROJECT_TRACKER';

class ProjectController extends BaseController {
  constructor() {
    super();
  }

  /**
   * @class ProjectController
   * 
   * @method setModelData
   * 
   * @description
   *      this method is to create the model to insert row in the project table. 
   * 
   * @param {*} data
   * 
   * */
  static setModelData(data) {
    return {
      NAME: data.projectName,
      PROJECT_KEY: data.projectKey,
      TEMPLATE_ID: data.projectTemplateId,
      ICON: data.projectIcon,
      DESCRIPTION: data.projectDescription,
      PROJECT_CATEGORY: data.projectCategory,
      PROJECT_LEAD: data.projectLead,
      OWNER: data.projectOwner,
      PROJECT_TYPE: data.projectType,
      PROJECT_MEMBERS: data.projectMembers ? JSON.stringify(data.projectMembers) : JSON.stringify([data.projectOwner])
    }
  }

  /**
   * @class ProjectController
   * 
   * @method setProjectLoggerModelData 
   * 
   * @description
   *      this method is to create the model to insert row in the project_tracker table. 
   * 
   * @param {*} data
   * 
   * */
  static setProjectLoggerModelData(data) {
    return {
      PROJECT_ID: data.ID,
      NAME: data.NAME,
      PROJECT_KEY: data.PROJECT_KEY,
      TEMPLATE_ID: data.TEMPLATE_ID,
      ICON: data.ICON,
      DESCRIPTION: data.DESCRIPTION,
      PROJECT_CATEGORY: data.PROJECT_CATEGORY,
      PROJECT_LEAD: data.PROJECT_LEAD,
      PROJECT_MEMBERS: data.PROJECT_MEMBERS,
      OWNER: data.OWNER,
      PROJECT_TYPE: data.PROJECT_TYPE
    }
  }

  /**
   * @name add
   * @memberof ProjectController
   * 
   * @description
   *  new project is created for given data
   * 
   * @param {*} projectObj json-object; model - 'Project'
   * 
   * @returns
   *    HTTP Response code based on DB Query execution response
   *
   */
  async add(req, res) {

    try {
      const model = ProjectController.setModelData(req.body);
      const response = await super.post(model, PROJECT_DB_TABLE);
      Logger.info(`ProjectController: add : query response : ${JSON.stringify(response)}`);
      const diff = await Utility.createDataDiffOnCreation(model);

      model.DIFFERENCE = JSON.stringify(diff);
      model.PROJECT_ID = response.insertId;
      model.ACTION_TYPE = ServerConstants.ACTION_TYPES().CREATED;
      model.AUTHOR_ID = req.body.projectOwner;
      await super.post(model, PROJECT_TRACKER_DB_TABLE);
      res.status(201);
      res.json({
        message: Constants.CLIENT_MESSAGES().PROJECT_CREATED,
        data: response
      });
    } catch (error) {
      Logger.error(`ProjectController: add: Error occured while creating a new project, req.body: ${JSON.stringify(req.body)}, error: %s`, JSON.stringify(error));
      res.statusMessage = error;
      res.status(400).end();
    }
  }

  /**
   * @name update
   * @memberof ProjectController
   * 
   * @description
   *  update the existing project with given projectId for given data
   * 
   * @param {*} projectId
   * @param {*} projectObj json-object; model - 'Project'
   * 
   * @returns
   *    HTTP Response code based on DB Query execution response
   *
   */
  async update(projectId, projectObj) {

  }

  /**
   * @name patch
   * @memberof ProjectController
   * 
   * @description
   *  update only one attribute i.e. patch the project object
   * 
   * @param {*} projectId
   * @param {*} attributeNameValuePair
   * 
   * @returns
   *    HTTP Response code based on DB Query execution response
   *
   */
  async patch(req, res) {
    const action = req.body.action;
    const self = new ProjectController();
    switch (action) {
      case ServerConstants.STAR_ACTIONS().STAR:
        self.markProjectStar(req, res);
        break;
      case ServerConstants.STAR_ACTIONS().UNSTAR:
        self.markProjectUnstar(req, res);
        break;
      default:
        res.statusMessage = Constants.CLIENT_MESSAGES().UNSUPPORT_ACTION;
        res.status(400).end();
    }
  }

  /**
   * @name delete
   * @memberof ProjectController
   * 
   * @description
   *  - This checks if Project with given projectId 
   *        EXISTS then deactivate i.e  DO NOT DELETE from DB TABLE but MARK as INACTIVE 
   *            i.e can't be used any longer for any project but visible at various places
   *        NOT EXISTS then mark it deleted, i.e  DO NOT DELETE from DB TABLE 
   *            but also it is no where visible in app
   * 
   * @param {*} projectId
   * 
   * @returns
   *    HTTP Response code based on DB Query execution response
   *
   */
  async delete(projectId) {

  }

  /**
   * @name info
   * @memberof ProjectController
   * 
   * @description
   *  - This checks if the type is list or detail in the query params
   * 
   * @param {*} req
   * @param {*} res
   * 
   * @returns
   *    brief metadata (not all data) like
   *    JSON array of object { projectId, projectName, etc.. } @todo
   *
   */
  async info(req, res) {
    const self = new ProjectController();
    switch (req.query.type) {
      case ServerConstants.DETAIL_TYPES().LIST:
        self.list(req, res);
        break;
      case ServerConstants.DETAIL_TYPES().DETAIL:
        self.detail(req, res);
        break;
      case ServerConstants.DETAIL_TYPES().RECENT:
        self.listRecentProjects(req, res);
        break;
      default:
        res.statusMessage = Constants.CLIENT_MESSAGES().UNSUPPORT_ACTION;
        res.status(400).end();
    }
  }

  /**
 * @name recent
 * @memberof ProjectController
 * 
 * @description
 *  - This will fetch recent projects viewed by the user
 * 
 * @param {*} projectId
 * 
 * @returns
 *    brief metadata (not all data) like
 *    JSON array of object { projectId, projectName, etc.. } 
 *
 */
  async listRecentProjects(req, res) {
    let message = Constants.CLIENT_MESSAGES().PROJECTS_DO_NOT_EXIST;
    if (!req.query || !req.query.employeeId) {
      res.status(204);
      return res.json({
        message: message,
        data: []
      });
    }
    try {
      const employeeId = req.query.employeeId;
      const sql = DbQueries.RECENT_PROJECT_LIST_QUERY(employeeId);
      const response = await super.executeQueryWithBindParams(sql.query, sql.bindParams);
      Logger.info(`ProjectController: listRecentProjects : query response : ${JSON.stringify(response)}`);
      let projectsList = [], statusCode = 204;
      if (Array.isArray(response) && response.length > 0) {
        message = Constants.CLIENT_MESSAGES().PROJECTS_EXIST;
        projectsList = response.filter(row => {
          const arr = row.PROJECT_MEMBERS ? JSON.parse(row.PROJECT_MEMBERS) : [];
          if (Array.isArray(arr) && arr.includes(Number(employeeId))) {
            return true;
          }
          return false;
        });
        Logger.info(`ProjectController: listRecentProjects : projectList : ${JSON.stringify(projectsList)}`);
        statusCode = 200;
      }
      res.status(statusCode);
      res.json({
        message: message,
        data: projectsList
      });

    } catch (error) {
      Logger.error(`ProjectController: listRecentProjects: Error occured while fetching the all projects List error: %s`, JSON.stringify(error));
      res.statusMessage = error;
      res.status(400).end();
    }

  }


  /**
   * @name list
   * @memberof ProjectController
   * 
   * @description
   *  - This checks if projectId is given or not (as default value is ZERO)
   *        if ZERO, then list all Project - brief metadata
   *        if NOT ZERO, then list only Project  - brief metadata for given projectId
   * 
   * @param {*} projectId
   * 
   * @returns
   *    brief metadata (not all data) like
   *    JSON array of object { projectId, projectName, etc.. } @todo
   *
   */
  async list(req, res) {
    const employeeId = req.query.employeeId;
    const projectId = req.query && req.query.projectId && req.query.projectId != 0 ? req.query.projectId : null;
    try {
      const sql = DbQueries.PROJECT_LIST_QUERY(projectId);
      const response = await super.executeQueryWithBindParams(sql.query, sql.bindParams);
      Logger.info(`ProjectController: list : query response : ${JSON.stringify(response)}`);
      let projectsList = [], statusCode = 204;
      if (Array.isArray(response) && response.length > 0) {
        projectsList = response.filter(row => {
          const arr = row.PROJECT_MEMBERS ? JSON.parse(row.PROJECT_MEMBERS) : [];
          if (Array.isArray(arr) && arr.includes(Number(employeeId))) {
            return true;
          }
          return false;
        });
        projectsList.forEach(row => {
          try {
            row.STARRED = (row.STARRED) ? (JSON.parse(row.STARRED)).includes(Number(employeeId)) : false;
          } catch (err) {
            row.STARRED = false;
            Logger.error(`ProjectController : detail: Error while parsing the schema : error : %s`, JSON.stringify(err));
          }
        });
        Logger.info(`ProjectController: list : filtered projectList : ${JSON.stringify(projectsList)}`);
        statusCode = 200;
      }
      res.status(statusCode);
      res.json({
        message: (projectsList.length) ? Constants.CLIENT_MESSAGES().PROJECTS_EXIST : Constants.CLIENT_MESSAGES().PROJECTS_DO_NOT_EXIST,
        data: projectsList
      });
    } catch (error) {
      Logger.error(`ProjectController: list: Error occured while fetching the all projects List error: %s`, JSON.stringify(error));
      res.statusMessage = error;
      res.status(400).end();
    }
  }

  /**
   * @name detail
   * @memberof ProjectController
   * 
   * @description
   *  - This checks if projectId is given or not (as default value is ZERO)
   *        if ZERO, then array all Project Category - all data/details
   *        if NOT ZERO, then Project Category - all data/detail for given projectId
   * 
   * @param {*} projectId
   * 
   * @returns
   *    all data/detail
   *    JSON array of object { projectId, categoryName, etc.. } @todo
   *
   */
  async detail(req, res) {
    const employeeId = req.query.employeeId;
    const projectId = req.query && req.query.projectId && req.query.projectId != 0 ? req.query.projectId : null;
    try {
      const sql = DbQueries.PROJECT_DETAIL_QUERY(projectId);
      const response = await super.executeQueryWithBindParams(sql.query, sql.bindParams);
      let projectsList = [], statusCode = 204;
      if (Array.isArray(response) && response.length > 0) {
        if (projectId) {
          const model = ProjectController.setProjectLoggerModelData(response[0]);
          model.ACTION_TYPE = ServerConstants.ACTION_TYPES().VIEWED;
          model.AUTHOR_ID = employeeId;
          await super.post(model, PROJECT_TRACKER_DB_TABLE);
        }
        projectsList = response.filter(row => {
          const arr = row.PROJECT_MEMBERS ? JSON.parse(row.PROJECT_MEMBERS) : [];
          if (Array.isArray(arr) && arr.includes(Number(employeeId))) {
            return true;
          }
          return false;
        });
        projectsList.forEach(row => {
          try {
            row.ISSUE_TYPE_SCHEMA = row.ISSUE_TYPE_SCHEMA = row.ISSUE_TYPE_SCHEMA ? JSON.parse(row.ISSUE_TYPE_SCHEMA) : []
            row.ISSUE_PRIORITY_SCHEMA = row.ISSUE_PRIORITY_SCHEMA = row.ISSUE_PRIORITY_SCHEMA ? JSON.parse(row.ISSUE_PRIORITY_SCHEMA) : []
            row.WORKFLOW_SCHEMA = row.WORKFLOW_SCHEMA = row.WORKFLOW_SCHEMA ? JSON.parse(row.WORKFLOW_SCHEMA) : []
            row.NOTIFICATION_SCHEMA = row.NOTIFICATION_SCHEMA = row.NOTIFICATION_SCHEMA ? JSON.parse(row.NOTIFICATION_SCHEMA) : []
            row.STARRED = (row.STARRED) ? (JSON.parse(row.STARRED)).includes(Number(employeeId)) : false;
          } catch (err) {
            row.ISSUE_TYPE_SCHEMA = [];
            row.ISSUE_PRIORITY_SCHEMA = [];
            row.WORKFLOW_SCHEMA = [];
            row.NOTIFICATION_SCHEMA = [];
            row.STARRED = false;
            Logger.error(`ProjectController : detail: Error while parsing the schema : error : %s`, JSON.stringify(err));
          }
        });
        Logger.info(`ProjectController: detail : projectsList : ${JSON.stringify(projectsList)}`);
        statusCode = 200;
      }
      res.status(statusCode);
      res.json({
        message: (projectsList.length) ? Constants.CLIENT_MESSAGES().PROJECTS_EXIST : Constants.CLIENT_MESSAGES().PROJECTS_DO_NOT_EXIST,
        data: projectsList
      });
    } catch (error) {
      Logger.error(`ProjectController: detail : Error while fetching the Project Info: %s`, JSON.stringify(error));
      res.statusMessage = error;
      res.status(400).end();
    }

  }

  /**
   * @name invalidateCache
   * @memberof ProjectController
   * 
   * @description
   *    this method is used to update the cache for Project Controller data and it is being invoked 
   *    by other member functions based on their operations
   *
   * @param {*} projectId
   * @param {*} data
   * 
   * @returns
   *    Success - if cache updated successfully 
   *    Failure - if cache is failed to update for given dataset
   * 
   */
  async invalidateCache(projectId, data) {

  }

  /**
   * @name updateTracker
   * @memberof ProjectController
   * 
   * @description
   *    this method is used to track the changes made by user for audit purposes &
   *    better tracking, view in history as applicable and etc
   *
   * @param {*} projectId
   * @param {*} data
   * 
   * @returns
   *    Success - if tracker updated successfully 
   *    Failure - if tracker is failed to update for given dataset
   * 
   */
  async updateTracker(projectId, data) {

  }

  /**
   * @name markProjectStar
   * @memberof ProjectController
   * 
   * @description
   *  update only one attribute i.e. starred the project 
   * 
   * @param {*} req
   * @param {*} res
   * 
   * @returns
   *    HTTP Response code based on DB Query execution response
   *
   */

  async markProjectStar(req, res) {
    const projectId = Number(req.params.projectId);
    const employeeId = Number(req.body.employeeId);

    try {
      const sql = DbQueries.PROJECT_LIST_QUERY(projectId);
      const response = await super.executeQueryWithBindParams(sql.query, sql.bindParams);
      if (Array.isArray(response) && response.length > 0) {
        const starred = (response[0].STARRED) ? JSON.parse(response[0].STARRED) : [];
        if (!Array.isArray(starred) || starred.indexOf(employeeId) > -1) {
          return res.status(200).end();
        }
        var set = new Set(starred.concat([employeeId]));
        const body = { STARRED: JSON.stringify([...set]) };
        console.log(body);
        const markStar = await super.patch(projectId, PROJECT_DB_TABLE, body);
        Logger.info(`ProjectController: markProjectStar : markStar : %s`, JSON.stringify(markStar));
        return res.status(200).end();
      }
      res.status(200).end();
    } catch (error) {
      Logger.error(`ProjectController: markProjectStar : Error while starring the Project : %s`, JSON.stringify(error));
      res.statusMessage = error;
      res.status(400).end();
    }

  }

  /**
   * @name markProjectUnstar
   * @memberof ProjectController
   * 
   * @description
   *  update only one attribute i.e. starred the project 
   * 
   * @param {*} req
   * @param {*} res
   * 
   * @returns
   *    HTTP Response code based on DB Query execution response
   *
   */
  async markProjectUnstar(req, res) {
    const projectId = Number(req.params.projectId);
    const employeeId = Number(req.body.employeeId);
    try {
      const sql = DbQueries.PROJECT_LIST_QUERY(projectId);
      const response = await super.executeQueryWithBindParams(sql.query, sql.bindParams);
      if (Array.isArray(response) && response.length > 0) {
        let starred = (response[0].STARRED) ? JSON.parse(response[0].STARRED) : [];
        const filteredStarred = starred.filter((empId) => {
          return empId !== employeeId
        });
        if (filteredStarred.length === starred.length) {
          Logger.info(`ProjectController: markProjectUnstar: Employee ${employeeId} does exist in project Starred list ${JSON.stringify(starred)}`);
          return res.status(200).end();
        }
        const body = { STARRED: JSON.stringify(filteredStarred) };
        const queryResponse = await super.patch(projectId, PROJECT_DB_TABLE, body);
        Logger.info(`ProjectController: markProjectUnstar : queryResponse : %s`, JSON.stringify(queryResponse));
      }
      res.status(200).end();
    } catch (error) {
      Logger.error(`ProjectController: markProjectUnstar : Error while un-starring the Project : %s`, JSON.stringify(error));
      res.statusMessage = error;
      res.status(400).end();
    }
  }

}

module.exports = ProjectController;
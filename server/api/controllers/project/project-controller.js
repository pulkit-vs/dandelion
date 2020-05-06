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

const BaseController = require('../common/base-controller');
const { PROJECT_LIST_QUERY, PROJECT_LIST_QUERY_WITH_PROJECTID, PROJECT_DETAIL_QUERY, PROJECT_DETAIL_QUERY_WITH_PROJECTID } = require('../common/db-queries');
const PROJECT_DB_TABLE = 'project';
class ProjectController extends BaseController {
  constructor() {
    super();
  }
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
      PROJECT_TYPE: data.projectType
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
    const model = ProjectController.setModelData(req.body);
    try {
      const response = await super.add(model, PROJECT_DB_TABLE);
      console.log(`ProjectController: add : query response : ${response}`);
      res.status(201);
      res.json({
        message: "Project Successfully created",
        db_response: response
      });
    } catch (error) {
      console.log(`ProjectController: add: Error occured while creating a new project, req.body: ${JSON.stringify(req.body)}, error: `, error);
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
  async patch(projectId, attributeNameValuePair) {

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
  async info(req, res) {
    const getProjectController = new ProjectController();
    switch (req.query.type) {
      case 'list': // define constants
        console.log('in list');
        getProjectController.list(req, res);
        break;
      case 'detail': // define constants
        getProjectController.detail(req, res);
        break;
      default:
        res.statusMessage = 'Un-support type';
        res.status(400).end();
    }
  }

  async list(req, res) {
    const employeeId = req.query.employeeId;
    const projectId = (req.query.projectId) ? req.query.projectId : 0;
    if (projectId == 0) {
      try {
        const sql = PROJECT_LIST_QUERY(employeeId);
        const response = await super.executeQuery(sql);
        console.log(`ProjectController: add : query response : ${response}`);
        const message = (response.length) ? "Projects Fetched Successfully " : `No Projects exist`;
        res.status(200);
        res.json({
          message: message,
          db_response: response
        });
      } catch (error) {
        console.log(`ProjectController: add: Error occured while fetching the all projects List error: ${error}`);
        res.statusMessage = error;
        res.status(400).end();
      }

    } else {
      try {
        const sql = PROJECT_LIST_QUERY_WITH_PROJECTID(employeeId, projectId);
        const response = await super.executeQuery(sql);
        const message = (response.length) ? "Project Fetched Successfully " : `Project not found with projectId : ${projectId} `;
        console.log(`ProjectController: add : query response : ${response}`);
        res.status(201);
        res.json({
          message: message,
          db_response: response
        });
      } catch (error) {
        console.log(`ProjectController: add: Error occured while fetching the project list error: `, error);
        res.statusMessage = error;
        res.status(400).end();
      }
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
    const projectId = (req.query.projectId) ? req.query.projectId : 0;
    const employeeId = req.query.employeeId;
    console.log('detail function', projectId);
    if (projectId == 0) {
      console.log(`projectId == `, projectId);
      try {
        const sql = PROJECT_DETAIL_QUERY(employeeId);
        console.log(`sql : ${sql}`);
        const response = await super.executeQuery(sql);
        console.log(`ProjectController: detail : query response : ${response}`);
        const message = (response.length) ? "Projects Fetched Successfully " : `No Projects to show`;
        res.status(200);
        res.json({
          message: message,
          db_response: response
        });
      } catch (error) {
        console.log(`ProjectController: add: Error while fetching the Project Info: `, error);
        res.statusMessage = error;
        res.status(400).end();
      }
    } else {
      try {
        const sql = PROJECT_DETAIL_QUERY_WITH_PROJECTID(employeeId, projectId);
        console.log(`sql : ${sql}`);
        const response = await super.executeQuery(sql);
        const message = (response.length) ? "Project Fetched Successfully " : `Project not found with projectId : ${projectId} `;
        console.log(`ProjectController: add : query response : ${response}`);
        res.status(200);
        res.json({
          message: message,
          db_response: response
        });
      } catch (error) {
        console.log(`ProjectController: add: Error occured while fetching project detail with projectId: ${projectId} , error: `, error);
        res.statusMessage = error;
        res.status(400).end();
      }
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
}

module.exports = ProjectController;
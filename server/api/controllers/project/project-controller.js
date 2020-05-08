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

const BaseController = require("../common/base-controller");
const DbQueries = require("../common/db-queries");
const ServerConstants = require("../common/db-constants"),
  logger = require("../common/logger"),
  Utility = require("../common/utils");
const PROJECT_DB_TABLE = "project";
const PROJECT_TRACKER_TABLE = "project_tracker";
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
      PROJECT_MEMBERS: data.projectMembers
        ? JSON.stringify(data.projectMembers)
        : JSON.stringify([data.projectOwner]),
    };
  }

  /**
   * @class ProjectController
   *
   * @method setLoggerModelData
   *
   * @description
   *      this method is to create the model to insert row in the project_tracker table.
   *
   * @param {*} data
   *
   * */
  static setLoggerModelData(data) {
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
      PROJECT_TYPE: data.PROJECT_TYPE,
      ISSUE_TYPE_SCHEMA: data.ISSUE_TYPE_SCHEMA,
      WORKFLOW_SCHEMA: data.WORKFLOW_SCHEMA,
      ISSUE_PRIORITY_SCHEMA: data.ISSUE_PRIORITY_SCHEMA,
      NOTIFICATION_SCHEMA: data.NOTIFICATION_SCHEMA,
    };
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
      const response = await super.post(model, PROJECT_DB_TABLE);
      logger.info(
        `ProjectController: add : query response : ${JSON.stringify(response)}`
      );
      const diff = await Utility.createDataDiffOnCreation(model);
      model.DIFFERENCE = JSON.stringify(diff);
      model.PROJECT_ID = response.insertId;
      model.ACTION_TYPE = ServerConstants.ACTION_TYPES().CREATED;
      model.AUTHOR_ID = req.body.projectOwner;
      await super.post(model, PROJECT_TRACKER_TABLE);
      res.status(201);
      res.json({
        message: "Project Successfully created",
        db_response: response,
      });
    } catch (error) {
      logger.error(
        `ProjectController: add: Error occured while creating a new project, req.body: ${JSON.stringify(
          req.body
        )}, error: `,
        error
      );
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
  async update(projectId, projectObj) {}

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
  async patch(projectId, attributeNameValuePair) {}

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
  async delete(projectId) {}

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
        res.statusMessage = "Un-support type";
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
    if (req.query && req.query.employeeId) {
      const employeeId = req.query.employeeId;
      try {
        const sql = DbQueries.RECENT_PROJECT_LIST_QUERY(employeeId);
        const response = await super.executeQueryWithBindParams(
          sql.query,
          sql.bindParams
        );
        logger.info(
          `ProjectController: listRecentProjects : query response : ${JSON.stringify(
            response
          )}`
        );
        if (Array.isArray(response)) {
          const message = "Projects Fetched Successfully ";
          const projects_list = response.filter(
            (row) =>
              row.PROJECT_MEMBERS &&
              Array.isArray(JSON.parse(row.PROJECT_MEMBERS)) &&
              JSON.parse(row.PROJECT_MEMBERS).includes(Number(employeeId))
          );
          logger.info(
            `ProjectController: listRecentProjects : query response : ${JSON.stringify(
              projects_list
            )}`
          );
          res.status(200);
          res.json({
            message: message,
            db_response: projects_list,
          });
        } else {
          const message = "No Projects exist";
          res.status(200);
          res.json({
            message: message,
            db_response: [],
          });
        }
      } catch (error) {
        logger.error(
          `ProjectController: listRecentProjects: Error occured while fetching the all projects List error: ${error}`
        );
        res.statusMessage = error;
        res.status(400).end();
      }
    } else {
      res.status(200);
      res.json({
        message: `No projects found for user : employeeId = ${
          req.query.employeeId
        }`,
        db_response: [],
      });
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
    const projectId =
      req.query && req.query.projectId && req.query.projectId != 0
        ? req.query.projectId
        : null;
    try {
      const sql = DbQueries.PROJECT_LIST_QUERY(projectId);
      const response = await super.executeQueryWithBindParams(
        sql.query,
        sql.bindParams
      );
      logger.info(
        `ProjectController: list : query response : ${JSON.stringify(response)}`
      );
      if (Array.isArray(response)) {
        const message = "Projects Fetched Successfully ";
        const projects_list = response.filter(
          (row) =>
            row.PROJECT_MEMBERS &&
            Array.isArray(JSON.parse(row.PROJECT_MEMBERS)) &&
            JSON.parse(row.PROJECT_MEMBERS).includes(Number(employeeId))
        );
        logger.info(
          `ProjectController: list : query response : ${JSON.stringify(
            projects_list
          )}`
        );
        res.status(200);
        res.json({
          message: message,
          db_response: projects_list,
        });
      } else {
        const message = "No Projects exist";
        res.status(200);
        res.json({
          message: message,
          db_response: [],
        });
      }
    } catch (error) {
      logger.error(
        `ProjectController: list: Error occured while fetching the all projects List error: ${error}`
      );
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
    const projectId =
      req.query && req.query.projectId && req.query.projectId != 0
        ? req.query.projectId
        : null;
    try {
      const sql = DbQueries.PROJECT_DETAIL_QUERY(projectId);
      const response = await super.executeQueryWithBindParams(
        sql.query,
        sql.bindParams
      );
      if (Array.isArray(response)) {
        const message = "Projects Fetched Successfully ";
        const projects_list = response.filter(
          (row) =>
            row.PROJECT_MEMBERS &&
            Array.isArray(JSON.parse(row.PROJECT_MEMBERS)) &&
            JSON.parse(row.PROJECT_MEMBERS).includes(Number(employeeId))
        );
        projects_list.forEach((row) => {
          try {
            row.ISSUE_TYPE_SCHEMA = JSON.parse(row.ISSUE_TYPE_SCHEMA);
            row.ISSUE_PRIORITY_SCHEMA = JSON.parse(row.ISSUE_PRIORITY_SCHEMA);
            row.WORKFLOW_SCHEMA = JSON.parse(row.WORKFLOW_SCHEMA);
            row.NOTIFICATION_SCHEMA = JSON.parse(row.NOTIFICATION_SCHEMA);
          } catch (err) {
            logger.error(
              `ProjectController : detail: Error while parsing the schema : error`,
              err
            );
          }
        });
        logger.info(
          `ProjectController: detail : query response : ${JSON.stringify(
            projects_list
          )}`
        );
        if (projectId) {
          const model = ProjectController.setLoggerModelData(response[0]);
          model.ACTION_TYPE = ServerConstants.ACTION_TYPES().VIEWED;
          model.AUTHOR_ID = employeeId;
          await super.post(model, PROJECT_TRACKER_TABLE);
        }
        res.status(200);
        res.json({
          message: message,
          db_response: projects_list,
        });
      } else {
        const message = "No Projects exist";
        res.status(200);
        res.json({
          message: message,
          db_response: [],
        });
      }
    } catch (error) {
      logger.error(
        `ProjectController: detail : Error while fetching the Project Info: `,
        error
      );
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
  async invalidateCache(projectId, data) {}

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
  async updateTracker(projectId, data) {}
}

module.exports = ProjectController;

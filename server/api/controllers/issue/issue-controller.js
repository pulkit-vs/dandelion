
/**
 * @class IssueController
 * @extends {BaseController}
 * 
 * @description
 *    API Controller for Issue Management
 * 
 * @author
 *  Nikhil Aggarwal, VectoScalar
 * 
 */

const DbQueries = require('../common/db-queries');
const BaseController = require('../common/base-controller');
const DB_TABLE_ISSUES = 'ISSUES',
  logger = require('../common/logger')
class IssueController extends BaseController {
  constructor() {
    super();
  }

  /**
   * @name setModelData
   * @memberof IssueController
   * 
   * @description
   *  create model for insert issue query 
   * 
   * @param {*} data issue fields object
   * 
   * @returns
   *    HTTP Response code based on DB Query execution response
   *
   */
  static setModelData(data, projectId) {
    return {
      PROJECT_ID: projectId,
      TITLE: data.issueTitle,
      ISSUE_TYPE_ID: data.issueTypeId,
      ISSUE_STAGE_ID: data.issueStageId,
      DESCRIPTION: data.issueDescription,
      PRIORITY_ID: data.issuePriorityId,
      ASSIGNEE_ID: data.issueAssigneeId,
      REPORTER_ID: data.issueReporterId,
      SPRINT_ID: data.issueSprintId,
      STORY_POINTS: data.issueStoryPoints,
      ATTACHMENTS: data.issueAttachments,
      EPIC_ID: data.issueEpicId,
      COMMENTS: data.issueComments,
      COMPONENTS: data.issueComponents
    }
  }

  /**
   * @name add
   * @memberof IssueController
   * 
   * @description
   *  new issue is created for given data
   * 
   * @param {*} req request 
   * @param {*} res response
   * 
   * @returns
   *    HTTP Response code based on DB Query execution response
   *
   */
  async add(req, res) {
    const model = IssueController.setModelData(req.body, req.params.projectId);
    try {
      const response = await super.post(model, DB_TABLE_ISSUES);
      logger.info(`IssueController: add : query response : ${response}`);
      res.status(201);
      res.json({
        message: "Issue Successfully created",
        db_response: response
      });
    } catch (error) {
      logger.error(`IssueController: add: Error occured while creating a new issue, req.body: ${JSON.stringify(req.body)}, error: `, error);
      res.statusMessage = error;
      res.status(400).end();
    }
  }

  /**
     * @name detail
     * @memberof IssueController
     * 
     * @description
     *  - This checks if projectId is given or not (as default value is ZERO)
     *        if ZERO, then array all Project Category - all data/details
     *        if NOT ZERO, then Project Category - all data/detail for given projectId
     * 
     * @param {*} req request
     * @param {*} res response
     * 
     * @returns
     *    all data/detail
     *    JSON array of object { issueId, title, etc.. }
     *
     */
  async  detail(req, res) {
    const projectId = req.params.projectId;
    const issueId = req.params && req.params.id ? req.params.id : null;
    const employeeId = req.query.employeeId;
    if (projectId) {
      try {
        const sql = DbQueries.ISSUE_DETAIL_QUERY(employeeId, projectId, issueId);
        const response = await super.executeQueryWithBindParams(sql.query, sql.bindParams);
        logger.info(`IssueController: detail : query response : ${response}`);
        let message;
        let final_response = [];
        if (Array.isArray(response) && response.length > 0) {
          message = (response.length) ? "Issues Fetched Successfully " : `No Issues to show`;
          final_response = response.forEach(row => {
            let starred;
            try {
              starred = (JSON.parse(row.STARRED)).includes(Number(employeeId));
              row.STARRED = starred
            } catch (err) {
              starred = false;
              logger.error(`IssueController : detail : Error while parsing the starred array: row.STARRED = ${row.STARRED} , error = `, err);
            }
          });
        }
        res.status(200);
        res.json({
          message: message,
          db_response: final_response
        });
      } catch (error) {
        logger.error(`IssueController: detail: Error while fetching the issues Info: `, error);
        res.statusMessage = error;
        res.status(400).end();
      }
    } else {
      res.json({ message: `IssueController : detail: Issues not found for projectId : ${projectId} ` });
    }
  }
}

module.exports = IssueController;

/**
 * 
 * @description
 *    Routes for all the API 
 * 
 * @author
 *  Mishu Parnami, VectoScalar
 * 
 */

'use strict';

module.exports = function (app) {

  // controllers
  const ProjectController = require('./controllers/project/project-controller');
  const SprintController = require('./controllers/sprint/sprint-controller');
  const ConfigController = require('./controllers/config/config-controller');
  const IssueController = require('./controllers/issue/issue-controller');
  const MyWorkController = require('./controllers/my-work/my-work-controller');

  // API Constants
  const BASE_API = '/api/v1/';
  const PROJECTS = 'projects';
  const PROJECTID = '/:projectId';
  const CONFIG = 'config';
  const ISSUES = '/issues';
  const ISSUEID = '/:issueId';
  const ASSIGNED_TO_ME = '/assignedToMe';

  // swagger models
  /**
   * @typedef ProjectFields
   * @property {string} projectName.required
   * @property {string} projectKey.required - ALl in Caps
   * @property {string} projectDescription
   * @property {string} projectType.required - eg PROTYP001
   * @property {string} projectCategory.required - eg PROCAT001
   * @property {string} projectTemplateId.required - eg PROTPL001
   * @property {integer} projectOwner.required
   * @property {integer} projectLead 
   * @property {string} projectIcon
   * @property {*} projectMembers -eg [1,2]
   * 
   */
  /**
   * @typedef IssueFields
   * @property {string} issueTitle.required
   * @property {string} issueTypeId.required 
   * @property {string} issueStageId.required
   * @property {string} issueDescription 
   * @property {string} issuePriorityId.required 
   * @property {integer} issueAssigneeId.required 
   * @property {integer} issueReporterId.required
   * @property {integer} issueSprintId 
   * @property {integer} issueStoryPoints
   * @property {string} issueAttachments
   * @property {integer} issueEpicId
   * @property {string} issueComments
   * @property {string} issueComponents
   * 
   */


  // -----------   Config API Routes   ---------------
  const configController = new ConfigController();

  /**
 * This function comment is parsed by doctrine
 * @route GET /config
 * @group CONFIG - Operations about Configuration
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
  app.route(BASE_API + CONFIG)
    .get(configController.list);

  // -----------   Project API Routes   ---------------
  const projectController = new ProjectController();

  /**
  * This function comment is parsed by doctrine
  * @route POST /projects
  * @group PROJECT - Operations about Project
  * @param {ProjectFields.model} ProjectFields.body.required - Project properties model
  * @produces application/json application/xml
  * @consumes application/json application/xml
  * @returns {object} 201 - Project Successfully Created
  * @returns {Error}  default - Unexpected error
  */
  app.route(BASE_API + PROJECTS)
    .post(projectController.add);

  /**
 * This function comment is parsed by doctrine
 * @route GET /projects
 * @group PROJECT - Operations about Project
 * @param {integer} projectId.query.required - // projectId = 0 for all project 
 * @param {string} type.query.required - // detail for detail info and list for short info like Name, Id, Icon
 * @param {integer} employeeId.query.required - // employee Id of the User
 * @returns {array} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
  app.route(BASE_API + PROJECTS)
    .get(projectController.info);

  // -----------   Issues API Routes   ---------------

  const issueController = new IssueController();

  /**
 * @route GET /projects/{projectId}/issues/{issueId}
 * @group ISSUES - Operations about Project
 * @param {integer} projectId.path.required - valid projectId 
 * @param {integer} issueId.path.required - // issueId = 0 for all issues for the project 
 * @param {integer} employeeId.query.required
 * @returns {array} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
  app.route(BASE_API + PROJECTS + PROJECTID + ISSUES + ISSUEID)
    .get(issueController.detail);

  /**
  * @route POST /projects/{projectId}/issues
  * @group ISSUES - Operations about Project
  * @param {integer} projectId.path.required - valid projectId
  * @param {IssueFields.model} IssueFields.body.required - Issue properties model
  * @produces application/json application/xml
  * @consumes application/json application/xml
  * @returns {object} 201 - Issue Successfully Created
  * @returns {Error}  default - Unexpected error
  */
  app.route(BASE_API + PROJECTS + PROJECTID + ISSUES)
    .post(issueController.add);

  // -----------   MyWork API Routes   ---------------

  const myWorkController = new MyWorkController();

  /**
 * This function comment is parsed by doctrine
 * @route GET /projects/{projectId}/assignedToMe - get Assigned to Me tickets
 * @group My WORK - Operations about Project
 * @param {integer} projectId.path.required - valid projectId 
 * @param {integer} employeeId.query.required
 * @returns {array} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
  app.route(BASE_API + PROJECTS + PROJECTID + ASSIGNED_TO_ME)
    .get(myWorkController.assignedToMeTickets);


};

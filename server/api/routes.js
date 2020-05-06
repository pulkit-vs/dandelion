
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

module.exports = function(app) {

// controllers
  const ProjectController = require('./controllers/project/project-controller');
  const SprintController = require('./controllers/sprint/sprint-controller');
  const ConfigController = require('./controllers/config/config-controller');

// API Constants
const BASE_API = '/v1/';
const PROJECTS = 'projects';
const CONFIG = 'config';
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
 */

// -----------   Config API Routes   ---------------
const configController = new ConfigController();

  /**
 * This function comment is parsed by doctrine
 * @route GET /config
 * @group CONFIG - Operations about Configuration
 * @returns {array} 200 - An array of user info
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
app.route('/v1/projects')
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

// -----------   Sprint API Routes   ---------------

};
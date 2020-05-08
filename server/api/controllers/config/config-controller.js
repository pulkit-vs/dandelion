/**
 * @class ConfigController
 * @extends {BaseController}
 * 
 * @description
 *    API Controller for Configuration
 * 
 * @author
 *  Nikhil Aggarwal, VectoScalar
 * 
 */

const BaseController = require('../common/base-controller');
const DBQueries = require('../common/db-queries');
const ServerConstants = require('../common/db-constants');
const logger = require('../common/logger')
class ConfigController extends BaseController {
  constructor() {
    super();
  }
  /**
   * @name list
   * @memberof ConfigController
   * 
   * @description
   *  - This will list the map of config with all the details
   * 
   * @param {*} projectId
   * 
   * @returns
   *    all detail data
   *    JSON array of object {PROJECT_CATEGORY: {}, ISSUE_TYPE: {} ... etc} @todo
   *
   */
  async list(req, res) {
    try {
      const configs = ServerConstants.CONFIG_NAMES();
      const bindParam = `'` + configs.join(`','`) + `'`;
      const sql = `${DBQueries.CONFIG_SELECT_QUERY()} (${bindParam})`;
      const response = await super.executeQueryWithBindParams(sql, bindParam);
      logger.info(`ConfigController : list: database response : response =  ${JSON.stringify(response)}`);
      if (Array.isArray(response) && response.length) {
        const mainConfigMap = {};
        const dbConfigMap = {};
        response.forEach(config => {
          const cnf = dbConfigMap[config.CONFIG_NAME] || {};
          cnf[config.CONFIG_CODE] = JSON.parse(config.DATA)
          dbConfigMap[config.CONFIG_NAME] = cnf;
        });
        configs.forEach(config => {
          mainConfigMap[config] = dbConfigMap[config] || [];
        });
        console.log("mainConfigMap", mainConfigMap)
        return res.json({ config: mainConfigMap });
      }
      else {
        res.json({ config: {} });
      }
    } catch (error) {
      logger.error(`ConfigController : list: Error occured while fetching the config list, error: `, error);
      res.statusMessage = error;
      res.status(400).end();
    }
  }
}

module.exports = ConfigController;
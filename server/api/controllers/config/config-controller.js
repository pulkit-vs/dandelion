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
const { CONFIG_SELECT_QUERY } = require('../common/db-queries');
const { CONFIG_NAMES } = require('../common/constants');

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
    //const configKeys = CONFIG_NAMES;
    try {
      const bindParam = `'` + CONFIG_NAMES.join(`','`) + `'`;
      const sql = `${CONFIG_SELECT_QUERY} (${bindParam})`;
      const response = await super.executeQueryWithBindParams(sql, bindParam);
      if (Array.isArray(response) && response.length) {
        const final_map = {};
        const mainConfigMap = {};
        const dbConfigMap = {};
        response.forEach(config => {
          const cnf = dbConfigMap[config.CONFIG_NAME] || [];
          cnf.push({[config.CONFIG_CODE]: JSON.parse(config.DATA)});
          dbConfigMap[config.CONFIG_NAME] = cnf;
        });
        // if you want the all config then call this otherwise above response.forEach should be fine.
        CONFIG_NAMES.forEach(config => {
          mainConfigMap[config] = dbConfigMap[config] || [];
        });
        // CONFIG_NAMES.forEach(key => {
        //   const configMap = response.filter(x => x.CONFIG_NAME === key);
        //   const configDataMap = {};
        //   configMap.forEach((configItem) => {
        //     configDataMap[configItem.CONFIG_CODE] = JSON.parse(configItem.DATA);
        //   });
        //   final_map[key] = configDataMap;
        // });
        res.json({ config: final_map });
      } else {
        res.json({ config: {} });
      }

    } catch (error) {
      console.log(`ConfigController : list: Error occured while fetching the config list, error: `, error);
      res.statusMessage = error;
      res.status(400).end();
    }
  }
}

module.exports = ConfigController;
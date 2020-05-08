
/**
 * @class Utils
 *
 * @description
 *    Utils - collection of generic methods used through out the code
 *
 * @author
 *  Nikhil Aggarwal, VectoScalar
 *
 */
const
  logger = require('../common/logger'),
  ServerConstants = require('./db-constants'),
  moment = require('moment');

class Utils {
  constructor() {

  }

  /**
   * @name getEnvVar
   * @memberof Utils
   * 
   * @description
   *  - This returns the enivirnoment variables for the project 
   * 
   * @param {*} name name
   * @param {*} defaultValue
   * 
   * @returns
   *    proces env name
   *
   */
  static getEnvVar(name, defaultValue = '') {
    return process.env[name] ? process.env[name] : defaultValue;
  }

  /**
 * @name getLocalTimestamp
 * @memberof Utils
 * 
 * @description
 *  - This method is to get the current loacl timestamp
 * 
 * @returns
 *    proces env name
 *
 */
  static getLocalTimestamp() {
    const timezone = Utils.getEnvVar('CLIENT_TIMEZONE', ServerConstants.IST_TZ)
    return moment().utcOffset(timezone).toDate().getTime()
  }

  /**
 * @name createDataDiffOnCreation
 * @memberof Utils
 * 
 * @description
 *  - This is the common method which calculates the difference on adding any new item
 *    for the tracking purpose
 * 
 * @param {*} modelObj object model
 * 
 * @returns
 *    difference
 *
 */
  static async createDataDiffOnCreation(modelObj) {
    try {
      const keys = Object.keys(modelObj);
      const diff = [];
      for (let k = 0; k < keys.length; k++) {
        const key = keys[k];
        diff.push({ [key]: { oldValue: null, newValue: modelObj[key] } });
      }
      return diff;
    } catch (error) {
      logger.error(`createDataDiffOnCreation: Error occured while finding the data difference for newly created ticket, modelObj: ${JSON.stringify(modelObj)} error: `, error);
      // If failed to get data difference then do not want to terminate/falied the further execution
      return [{ errorMessage: error.message || '' }];
    }
  }

  /**
* @name getDataDifference
* @memberof Utils
* 
* @description
*  - This is the common method which calculates the difference of old and new value
*    for the tracking purpose
* 
* @param {*} modelObj object model
* @param {*} oldRecord 
* @param {*} keysToBeSkip
* 
* @returns
*    difference
*
*/
  static async getDataDifference(modelObj, oldRecord, keysToBeSkip = []) {
    try {
      const diff = [];
      if (Array.isArray(oldRecord) && oldRecord.length > 0) {
        oldRecord = oldRecord[0];
        const keys = Object.keys(modelObj);
        for (let k = 0; k < keys.length; k++) {
          const key = keys[k];
          if (keysToBeSkip.indexOf(key) > -1) {
            continue;
          }
          const oldValue = oldRecord[key];
          const newValue = modelObj[key];
          logger.info('getDataDifference: key: %s :: oldValue', key, oldValue);
          logger.info('getDataDifference: key: %s :: newValue', key, newValue);
          if (newValue != oldValue) {
            diff.push({ [key]: { oldValue: oldValue, newValue: newValue } });
          }
        }
      }
      return diff;
    } catch (error) {
      logger.error(`Utility :::> getDataDifference: Error occured while finding the data difference for ticket, modelObj: ${JSON.stringify(modelObj)} error: `, error);
      // If failed to get data difference then do not want to terminate/falied the further execution
      return [{ errorMessage: error.message || '' }];
    }
  }

}



module.exports = Utils;

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
class Utils {
  constructor() {

  }
  static getEnvVar(name, defaultValue = '') {
    return process.env[name] ? process.env[name] : defaultValue;
  }
}



module.exports = Utils;
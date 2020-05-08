
/**
 * @class BaseController
 * @extends {DatabaseManager}
 * 
 * @description
 *    Base Controller
 * 
 * @author
 *  Nikhil Aggarwal, VectoScalar
 * 
 */
const DatabaseManager = require('./database-manager');
class BaseController extends DatabaseManager {
  constructor() {
    super()
  }

}



module.exports = BaseController;
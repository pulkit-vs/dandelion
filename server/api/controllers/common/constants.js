
/**
 * @class Constants
 * 
 * @description
 *    this class consists of constants to be used all over the code
 * 
 * @author
 *  Nikhil Aggarwal, VectoScalar
 * 
 */
class Constants {
  constructor() { }

  static CLIENT_MESSAGES() {
    return {
      PROJECTS_EXIST: `Projects Fetched Successfully`,
      PROJECTS_DO_NOT_EXIST: `No Projects exist`,
      PROJECT_CREATED: `Project Successfully Created`,
      UNSUPPOT_TYPE: `Un-support type`,
      UNSUPPORT_ACTION: `Un-support action`
    }
  };

}



module.exports = Constants;
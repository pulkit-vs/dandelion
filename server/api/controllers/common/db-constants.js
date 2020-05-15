/**
 * @class ServerConstants
 *
 * @description
 *    this method contains all the Server/DB constants
 *
 * @author
 *  Nikhil Aggarwal, VectoScalar
 *
 */
class ServerConstants {
  constructor() {}

  static IST_TZ() {
    return '+05:30';
  }

  static CONFIG_NAMES() {
    return ['PROJECT_CATEGORY', 'PROJECT_TEMPLATE', 'PROJECT_TYPE'];
  }

  static DETAIL_TYPES() {
    return {
      LIST: 'list',
      DETAIL: 'detail',
      RECENT: 'recent',
    };
  }

  static STATUS() {
    return {
      ACTIVE: 1,
      INACTIVE: 0,
    };
  }

  static ACTION_TYPES() {
    return {
      CREATED: 'Created',
      UPDATED: 'Updated',
      VIEWED: 'Viewed',
    };
  }

  static STAR_ACTIONS() {
    return {
      STAR: 'Star',
      UNSTAR: 'Unstar',
    };
  }
}

module.exports = ServerConstants;

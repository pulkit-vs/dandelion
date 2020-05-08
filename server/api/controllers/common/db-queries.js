/**
 *
 * @description
 *   this file consist of all the db queries
 *
 * @author
 *  Mishu Parnami, VectoScalar
 *
 */
const ServerConstants = require("./db-constants");

class DBQueries {
  constructor() {}

  static CONFIG_SELECT_QUERY() {
    return `SELECT CONFIG_NAME, CONFIG_CODE, DATA FROM configuration WHERE CONFIG_NAME IN `;
  }

  static PROJECT_LIST_QUERY(projectId) {
    return {
      query: `SELECT ID, PROJECT_KEY, NAME, ICON, PROJECT_MEMBERS FROM PROJECT WHERE ACTIVE = ${
        ServerConstants.STATUS().ACTIVE
      } ${projectId ? `AND ID = ?` : ``} order by CREATED_TS DESC ;`,
      bindParams: projectId ? [projectId] : [],
    };
  }

  static PROJECT_DETAIL_QUERY(projectId) {
    return {
      query: `SELECT pro.ID, pro.PROJECT_KEY, pro.NAME, pro.ICON, pro.DESCRIPTION, pro.PROJECT_CATEGORY, pro.PROJECT_TYPE, pro.TEMPLATE_ID, pro.PROJECT_MEMBERS, its.TYPE as ISSUE_TYPE_SCHEMA, wf.TYPE WORKFLOW_SCHEMA, ip.TYPE as ISSUE_PRIORITY_SCHEMA, ns.TYPE as NOTIFICATION_SCHEMA FROM PROJECT pro, ISSUE_TYPE_SCHEMA its, ISSUE_PRIORITY_SCHEMA as ip, WORKFLOW_SCHEMA wf, NOTIFICATION_SCHEMA as ns WHERE pro.ACTIVE = ${
        ServerConstants.STATUS().ACTIVE
      } ${projectId ? `AND pro.ID = ?` : ``} ORDER BY pro.CREATED_TS DESC ;`,
      bindParams: projectId ? [projectId] : [],
    };
  }

  static RECENT_PROJECT_LIST_QUERY(employeeId) {
    return {
      query: `SELECT DISTINCT pro.ID, pro.NAME, pro.ICON, pro.PROJECT_KEY , pro.PROJECT_MEMBERS FROM PROJECT_TRACKER as prot, PROJECT AS pro WHERE  pro.ID=prot.PROJECT_ID AND prot.AUTHOR_ID = ? AND prot.ACTION_DATE > DATE_SUB(NOW(), INTERVAL 24 HOUR) ORDER BY prot.ACTION_DATE DESC;`,
      bindParams: [employeeId],
    };
  }

  static ISSUE_DETAIL_QUERY(projectId, issueId) {
    return {
      query: `SELECT ID, PROJECT_ID, TITLE, DESCRIPTION, ISSUE_TYPE_ID, ISSUE_STAGE_ID, PRIORITY_ID, ASSIGNEE_ID, REPORTER_ID, SPRINT_ID, STORY_POINTS, ATTACHMENTS, EPIC_ID, COMPONENTS, COMMENTS, STARRED , CREATED_TS FROM ISSUES where ACTIVE = ${
        ServerConstants.STATUS().ACTIVE
      } AND PROJECT_ID = ? ${
        issueId ? `AND ID = ?` : ``
      } order by CREATED_TS DESC;`,
      bindParams: issueId ? [projectId, issueId] : [projectId],
    };
  }

  static ASSIGN_TO_ME_TICKETS_QUERY(userId, projectId) {
    return {
      query: `SELECT ID, PROJECT_ID, TITLE, DESCRIPTION, ISSUE_TYPE_ID, ISSUE_STAGE_ID, PRIORITY_ID, ASSIGNEE_ID, REPORTER_ID, SPRINT_ID, STORY_POINTS, ATTACHMENTS, EPIC_ID, COMPONENTS, COMMENTS, STARRED, CREATED_TS FROM ISSUES where ACTIVE = ${
        ServerConstants.STATUS().ACTIVE
      } AND PROJECT_ID = ? AND ASSIGNEE_ID = ? order by CREATED_TS DESC;`,
      bindParams: [projectId, userId],
    };
  }
}
module.exports = DBQueries;

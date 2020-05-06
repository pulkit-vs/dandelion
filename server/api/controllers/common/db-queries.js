
/**
 *
 * @description
 *   this file consist of all the db queries
 *
 * @author
 *  Mishu Parnami, VectoScalar
 *
 */

module.exports = {
    CONFIG_SELECT_QUERY : `SELECT CONFIG_NAME, CONFIG_CODE, DATA FROM configuration WHERE CONFIG_NAME IN `,
    PROJECT_LIST_QUERY: ((userId) => {
        return `SELECT pro.ID as projectID, pro.PROJECT_KEY as projectKey, pro.NAME as projectName ,
        pro.ICON as projectIcon
        FROM project pro
        WHERE FIND_IN_SET(${userId},REPLACE(REPLACE(PROJECT_MEMBERS, '[', ''), '[','')) ;`;
      }),
    PROJECT_LIST_QUERY_WITH_PROJECTID: ((userId, projectId) => {
        return `SELECT pro.ID as projectId, pro.PROJECT_KEY as projectKey, pro.NAME as projectName ,
        pro.ICON as projectIcon
        FROM project pro
        WHERE FIND_IN_SET(${userId},REPLACE(REPLACE(PROJECT_MEMBERS, '[', ''), '[','')) ${projectId ? `AND pro.ID = ${projectId}` : ``}`;
    }),
    PROJECT_DETAIL_QUERY: ((userId) => {
        return `SELECT pro.ID as projectID, pro.PROJECT_KEY as projectKey, pro.NAME as projectName ,
        pro.ICON as projectIcon,
        pro.DESCRIPTION as projectdecription,
        pro.PROJECT_CATEGORY AS 'projectCategory',
        pro.PROJECT_TYPE AS 'projectType', pro.TEMPLATE_ID AS 'projectTemplate',
        pro.PROJECT_MEMBERS as projectMembers
        FROM project pro
        WHERE FIND_IN_SET(${userId},REPLACE(REPLACE(PROJECT_MEMBERS, '[', ''), '[',''))  ;`;
      }),
    PROJECT_DETAIL_QUERY_WITH_PROJECTID:  ((userId, projectId) => {
        return `SELECT pro.ID as projectId, pro.PROJECT_KEY as projectKey, pro.NAME as projectName ,
        pro.ICON as projectIcon,
        pro.DESCRIPTION as projectdecription,
        pro.PROJECT_CATEGORY AS 'projectCategory',
        pro.PROJECT_TYPE AS 'projectType', pro.TEMPLATE_ID AS 'projectTemplate',
        pro.PROJECT_MEMBERS as projectMembers
        FROM project pro
        WHERE FIND_IN_SET(${userId},REPLACE(REPLACE(PROJECT_MEMBERS, '[', ''), '[','')) AND pro.ID = ${projectId} ;`;
      })
}
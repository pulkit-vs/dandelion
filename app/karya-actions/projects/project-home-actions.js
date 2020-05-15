export const types = {
  FETCH_ALL_PROJECTS: 'FETCH_ALL_PROJECTS',
  GET_ALL_TICKETS: 'GET_ALL_TICKETS',
  GET_CONFIG_INFO: 'GET_CONFIG_INFO',
  INIT: 'INIT', //TODO, needs to be removed
  SET_ALL_STARRED_TASK: 'SET_ALL_STARRED_TASK',
  SET_ALL_STARRED_TICKET_STATUS: 'SET_ALL_STARRED_TICKET_STATUS',
  SET_PROJECT_ICON: 'SET_PROJECT_ICON',
  SET_PROJECT_ID: 'SET_PROJECT_ID',
  SET_PROJECT_NAME: 'SET_PROJECT_NAME',
  SET_STARRED_TASK: 'SET_STARRED_TASK',
  SET_STARRED_TICKET_STATUS: 'SET_STARRED_TICKET_STATUS',
  SET_CONFIG_INFO: 'SET_CONFIG_INFO',
  SET_RECENT_PROJECTS: 'SET_RECENT_PROJECTS',
  GET_RECENT_PROJECTS: 'GET_RECENT_PROJECTS',
  GET_PROJECT_DETAILS: 'GET_PROJECT_DETAILS',
  SET_PROJECT_DETAILS: 'SET_PROJECT_DETAILS',
  SET_PROJECT_STARRED_STATUS: 'SET_PROJECT_STARRED_STATUS',
};

export const setStarredTask = (starredTask = {}) => ({
  type: types.SET_STARRED_TASK,
  payload: {
    starredTask,
  },
});

export const toggleStarredStatus = (projectId = '', status = false) => ({
  type: types.SET_STARRED_TICKET_STATUS,
  payload: {
    projectId,
    status,
  },
});

export const setRows = (projectList = []) => ({
  type: types.INIT,
  payload: {
    projectList,
  },
});

export const setAllStarredTask = (status = false) => ({
  type: types.SET_ALL_STARRED_TASK,
  payload: {
    status: status,
  },
});

export const toggleAllStarredStatus = (status = false) => ({
  type: types.SET_ALL_STARRED_TICKET_STATUS,
  payload: {
    status,
  },
});

export const setProjectId = (projectId = '') => ({
  type: types.SET_PROJECT_ID,
  payload: {
    projectId,
  },
});

export const setProjectName = (projectName = '') => ({
  type: types.SET_PROJECT_NAME,
  payload: {
    projectName,
  },
});

export const setProjectIcon = (projectIcon = '') => ({
  type: types.SET_PROJECT_ICON,
  payload: {
    projectIcon,
  },
});

export const fetchAllProjects = () => ({
  type: types.FETCH_ALL_PROJECTS,
});

export const getAllTickets = () => ({
  type: types.GET_ALL_TICKETS,
});

export const getConfigInfo = () => ({
  type: types.GET_CONFIG_INFO,
});

export const setConfigInfo = (config = {}) => ({
  type: types.SET_CONFIG_INFO,
  payload: {
    config,
  },
});

export const setRecentProjects = (recentProjects = []) => ({
  type: types.SET_RECENT_PROJECTS,
  payload: {
    recentProjects,
  },
});

export const getRecentProjects = () => ({
  type: types.GET_RECENT_PROJECTS,
});

export const getProjectDetails = (projectId) => ({
  type: types.GET_PROJECT_DETAILS,
  payload: {
    projectId,
  },
});

export const setProjectDetails = (projectDetails) => ({
  type: types.SET_PROJECT_DETAILS,
  projectDetails,
});

export const setStarredProject = (projectId = 0, status = 'Star') => ({
  type: types.SET_PROJECT_STARRED_STATUS,
  projectId,
  status,
});

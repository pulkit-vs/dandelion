export const types = {
  INIT: "INIT", //TODO, needs to be removed
  SET_ALL_STARRED_TASK: "SET_ALL_STARRED_TASK",
  SET_ALL_STARRED_TICKET_STATUS: "SET_ALL_STARRED_TICKET_STATUS",
  SET_PROJECT_ID: "SET_PROJECT_ID",
  SET_PROJECT_NAME: "SET_PROJECT_NAME",
  SET_STARRED_TASK: "SET_STARRED_TASK",
  SET_STARRED_TICKET_STATUS: "SET_STARRED_TICKET_STATUS",
  SET_PROJECT_ICON: "SET_PROJECT_ICON",
};

export const setStarredTask = (starredTask = {}) => ({
  type: types.SET_STARRED_TASK,
  payload: {
    starredTask,
  },
});

export const toggleStarredStatus = (ticketId = "", status = false) => ({
  type: types.SET_STARRED_TICKET_STATUS,
  payload: {
    ticketId,
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

export const setProjectId = (projectId = "") => ({
  type: types.SET_PROJECT_ID,
  payload: {
    projectId,
  },
});

export const setProjectName = (projectName = "") => ({
  type: types.SET_PROJECT_NAME,
  payload: {
    projectName,
  },
});

export const setProjectIcon = (projectIcon = "") => ({
  type: types.SET_PROJECT_ICON,
  payload: {
    projectIcon,
  },
});

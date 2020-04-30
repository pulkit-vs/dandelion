export const types = {
  INIT: "INIT", //TODO, needs to be removed
  SET_ALL_STARRED_TASK: "SET_ALL_STARRED_TASK",
  SET_ALL_STARRED_TICKET_STATUS: "SET_ALL_STARRED_TICKET_STATUS",
  SET_STARRED_TASK: "SET_STARRED_TASK",
  SET_STARRED_TICKET_STATUS: "SET_STARRED_TICKET_STATUS",
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

export const setRows = (projectHomeTickets = []) => ({
  type: types.INIT,
  payload: {
    projectHomeTickets,
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

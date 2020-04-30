export const types = {
  MY_WORK_SET_ALL_STARRED_TICKET_STATUS:
    "MY_WORK_SET_ALL_STARRED_TICKET_STATUS",
  MY_WORK_INIT: "MY_WORK_INIT", //TODO, needs to be removed
  MY_WORK_SET_ALL_STARRED_TASK: "MY_WORK_SET_ALL_STARRED_TASK",
  MY_WORK_SET_STARRED_TASK: "MY_WORK_SET_STARRED_TASK",
  MY_WORK_SET_STARRED_TICKET_STATUS: "MY_WORK_SET_STARRED_TICKET_STATUS",
};

export const setStarredTask = (starredTask = {}) => ({
  type: types.MY_WORK_SET_STARRED_TASK,
  payload: {
    starredTask,
  },
});

export const toggleStarredStatus = (ticketId = "", status = false) => ({
  type: types.MY_WORK_SET_STARRED_TICKET_STATUS,
  payload: {
    ticketId,
    status,
  },
});

export const setRows = (projectHomeTickets = []) => ({
  type: types.MY_WORK_INIT,
  payload: {
    projectHomeTickets,
  },
});

export const setAllStarredTask = (status = false) => ({
  type: types.MY_WORK_SET_ALL_STARRED_TASK,
  payload: {
    status: status,
  },
});

export const toggleAllStarredStatus = (status = false) => ({
  type: types.MY_WORK_SET_ALL_STARRED_TICKET_STATUS,
  payload: {
    status,
  },
});

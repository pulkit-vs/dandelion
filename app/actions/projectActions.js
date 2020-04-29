export const types = {
  INIT: "INIT", //TODO, needs to be removed
  SET_ALL_STARRED_TASK: "SET_ALL_STARRED_TASK",
  SET_ALL_STARRED_TICKET_STATUS: "SET_ALL_STARRED_TICKET_STATUS",
  SET_STARRED_TASK: "SET_STARRED_TASK",
  SET_STARRED_TICKET_STATUS: "SET_STARRED_TICKET_STATUS",
  UPDATE_TASKS: "UPDATE_TASKS",
};

export const updateTasks = (rows = []) => ({
  type: types.UPDATE_TASKS,
  payload: {
    rows: rows,
  },
});

export const setStarredTask = (starredTask = []) => ({
  type: types.SET_STARRED_TASK,
  payload: {
    starredTask: starredTask,
  },
});

export const toggleStarredStatus = (status = false, ticketId = "") => ({
  type: types.SET_STARRED_TICKET_STATUS,
  payload: {
    status: status,
    ticketId: ticketId,
  },
});

export const setRows = (rows = []) => ({
  type: types.INIT,
  rows: rows,
});

export const setAllStarredTask = (status = false) => ({
  type: types.SET_ALL_STARRED_TASK,
  status: status,
});

export const toggleAllStarredStatus = (status = false) => ({
  type: types.SET_ALL_STARRED_TICKET_STATUS,
  status: status,
});

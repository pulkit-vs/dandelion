export const types = {
  UPDATE_TASKS: "UPDATE_TASKS",
  SET_STARRED_TASK: "SET_STARRED_TASK",
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

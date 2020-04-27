export const types = {
  UPDATE_TASKS: "UPDATE_TASKS",
};

export const updateTasks = (rows = []) => ({
  type: types.UPDATE_TASKS,
  payload: {
    rows: rows,
  },
});

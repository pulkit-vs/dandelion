export const types = {
  NOTIFICATIONS_SET_MESSAGE: 'NOTIFICATIONS_SET_MESSAGE',
};

export const setNotificationMessage = (notification = {}) => ({
  type: types.NOTIFICATIONS_SET_MESSAGE,
  notification,
});

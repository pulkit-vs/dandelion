import { get } from 'lodash';
import { types } from '../../karya-actions/notifications/notifications-actions';

const initialState = {
  notificationMessage: '',
  severity: 'success',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.NOTIFICATIONS_SET_MESSAGE: {
      const message = get(action, ['notification', 'message'], '');
      const severity = get(action, ['notification', 'severity'], 'success');
      return {
        ...state,
        notificationMessage: message,
        severity: severity,
      };
    }
    default:
      return state;
  }
}

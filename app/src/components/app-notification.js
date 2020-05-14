import React from 'react';
import Notification from '../components/notifications';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { setNotificationMessage } from '../../karya-actions/notifications/notifications-actions';

export class AppNotification extends React.Component {
  handleClose = () => {
    this.props.setNotificationMessage();
  };

  render() {
    const { appNotification } = this.props;
    const message = get(appNotification, 'notificationMessage', '');
    const severity = get(appNotification, 'severity', 'success');
    return <Notification message={message} close={this.handleClose} appNotification={true} severity={severity} />;
  }
}

const mapStateToProps = (state) => ({
  appNotification: state.get('appNotification'),
});
const mapDispatchToProps = {
  setNotificationMessage: setNotificationMessage,
};

const AppNotificationMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNotification);

export default AppNotificationMapped;

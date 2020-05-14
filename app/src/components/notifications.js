import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';

const styles = (theme) => ({
  close: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    padding: 0,
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

class Notification extends React.Component {
  handleClose = (event, reason) => {
    const { close } = this.props;
    if (reason === 'clickaway') {
      return;
    }
    close && close('crudTableDemo');
  };

  render() {
    const { classes, message, appNotification, severity } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={message !== ''}
        autoHideDuration={3000}
        onClose={() => this.handleClose()}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        action={[
          <IconButton
            key='close'
            aria-label='Close'
            color='inherit'
            className={classes.close}
            onClick={() => this.handleClose()}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      >
        {appNotification && (
          <Alert onClose={this.handleClose} severity={severity}>
            {message}
          </Alert>
        )}
      </Snackbar>
    );
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default withStyles(styles)(Notification);

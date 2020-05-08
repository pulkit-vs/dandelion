import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Info from "@material-ui/icons/Info";
import Warning from "@material-ui/icons/Warning";
import Check from "@material-ui/icons/CheckCircle";
import Error from "@material-ui/icons/RemoveCircle";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Badge from "@material-ui/core/Badge";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Ionicon from "react-ionicons";
import dummy from "dan-api/dummy/dummyContents";
import messageStyles from "dan-styles/Messages.scss";
import avatarApi from "dan-api/images/avatars";
import link from "dan-api/ui/link";
import styles from "./header-jss";
import Settings from "../../src/settings/top-settings-menu";
import WorkIcon from "@material-ui/icons/Work";

class UserMenu extends React.Component {
  state = {
    anchorEl: null,
    openMenu: null,
    showSettings: false,
  };

  handleMenu = (menu) => (event) => {
    const { openMenu } = this.state;
    this.setState({
      openMenu: openMenu === menu ? null : menu,
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, openMenu: null });
  };

  toggleSettingsMenu = () => {
    this.setState({ showSettings: !this.state.showSettings });
  };

  render() {
    const { classes, dark } = this.props;
    const { anchorEl, openMenu } = this.state;
    return (
      <div>
        <IconButton
          aria-haspopup="true"
          onClick={this.handleMenu("notification")}
          color="inherit"
          className={classNames(
            classes.notifIcon,
            dark ? classes.dark : classes.light
          )}
        >
          <Badge className={classes.badge} badgeContent={4} color="secondary">
            <Ionicon icon="ios-notifications-outline" />
          </Badge>
        </IconButton>
        <IconButton
          aria-haspopup="true"
          onClick={this.handleMenu("add")}
          color="inherit"
          className={classNames(
            classes.notifIcon,
            dark ? classes.dark : classes.light
          )}
        >
          <Badge className={classes.badge} color="secondary">
            <Ionicon icon="md-add" />
          </Badge>
        </IconButton>
        <IconButton
          aria-haspopup="true"
          onClick={this.handleMenu("help")}
          color="inherit"
          className={classNames(
            classes.notifIcon,
            dark ? classes.dark : classes.light
          )}
        >
          <Badge className={classes.badge} color="secondary">
            <Ionicon icon="ios-help-circle" />
          </Badge>
        </IconButton>
        <Menu
          id="menu-notification"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          className={classes.notifMenu}
          PaperProps={{
            style: {
              width: 350,
            },
          }}
          open={openMenu === "notification"}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageInfo}>
              <ListItemAvatar>
                <Avatar alt="User Name" src={avatarApi[0]} />
              </ListItemAvatar>
              <ListItemText
                primary={dummy.text.subtitle}
                secondary={dummy.text.date}
              />
            </div>
          </MenuItem>
          <Divider variant="inset" />
          <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageInfo}>
              <ListItemAvatar>
                <Avatar className={messageStyles.icon}>
                  <Info />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={dummy.text.sentences}
                className={classes.textNotif}
                secondary={dummy.text.date}
              />
            </div>
          </MenuItem>
          <Divider variant="inset" />
          <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageSuccess}>
              <ListItemAvatar>
                <Avatar className={messageStyles.icon}>
                  <Check />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={dummy.text.subtitle}
                className={classes.textNotif}
                secondary={dummy.text.date}
              />
            </div>
          </MenuItem>
          <Divider variant="inset" />
          <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageWarning}>
              <ListItemAvatar>
                <Avatar className={messageStyles.icon}>
                  <Warning />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={dummy.text.subtitle}
                className={classes.textNotif}
                secondary={dummy.text.date}
              />
            </div>
          </MenuItem>
          <Divider variant="inset" />
          <MenuItem onClick={this.handleClose}>
            <div className={messageStyles.messageError}>
              <ListItemAvatar>
                <Avatar className={messageStyles.icon}>
                  <Error />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Suspendisse pharetra pulvinar sollicitudin. Aenean ut orci eu odio cursus lobortis eget tempus velit. "
                className={classes.textNotif}
                secondary="Jan 9, 2016"
              />
            </div>
          </MenuItem>
        </Menu>
        <Menu
          id="menu-notification"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          className={classes.notifMenu}
          PaperProps={{
            style: {
              width: 250,
            },
          }}
          open={openMenu === "help"}
          onClose={this.handleClose}
        >
          <label style={{ marginLeft: "4%", fontSize: "15px", color: "grey" }}>
            HELP
          </label>
          <a href="https://www.google.com/" target="_blank">
            <MenuItem onClick={this.handleClose}>
              <ListItemText
                primary="Karya Documentation"
                className={classes.textNotif}
              />
            </MenuItem>
          </a>
          <a href="https://www.google.com/" target="_blank">
            <MenuItem onClick={this.handleClose}>
              <ListItemText
                primary="Karya Community"
                className={classes.textNotif}
              />
            </MenuItem>
          </a>
          <a href="https://www.google.com/" target="_blank">
            <MenuItem onClick={this.handleClose}>
              <ListItemText
                primary="What's New"
                className={classes.textNotif}
              />
            </MenuItem>
          </a>
          <a href="https://www.google.com/" target="_blank">
            <MenuItem onClick={this.handleClose}>
              <ListItemText
                primary="Get Karya Mobile"
                className={classes.textNotif}
              />
            </MenuItem>
          </a>
          <a href="https://www.google.com/" target="_blank">
            <MenuItem onClick={this.handleClose}>
              <ListItemText
                primary="Keyboard shortcuts"
                className={classes.textNotif}
              />
            </MenuItem>
          </a>
          <a href="https://www.google.com/" target="_blank">
            <MenuItem onClick={this.handleClose}>
              <ListItemText
                primary="About Karya"
                className={classes.textNotif}
              />
            </MenuItem>
          </a>
          <label style={{ marginLeft: "4%", fontSize: "15px", color: "grey" }}>
            LEGAL
          </label>
          <a href="https://www.google.com/" target="_blank">
            <MenuItem onClick={this.handleClose}>
              <ListItemText
                primary="Terms of use"
                className={classes.textNotif}
              />
            </MenuItem>
          </a>
          <a href="https://www.google.com/" target="_blank">
            <MenuItem onClick={this.handleClose}>
              <ListItemText
                primary="Privacy policy"
                className={classes.textNotif}
              />
            </MenuItem>
          </a>
        </Menu>
        <Menu
          id="menu-notification"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          className={classes.notifMenu}
          PaperProps={{
            style: {
              width: 200,
            },
          }}
          open={openMenu === "add"}
          onClose={this.handleClose}
        >
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="projects/project-board"
          >
            <div className={messageStyles.messageSuccess}>
              <ListItemAvatar>
                <Avatar className={messageStyles.messageSuccess}>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Project" className={classes.textNotif} />
            </div>
          </MenuItem>
          <Divider variant="inset" />
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/create-task"
          >
            <div className={messageStyles.messageSuccess}>
              <ListItemAvatar>
                <Avatar className={messageStyles.icon}>
                  <Check />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Issue" className={classes.textNotif} />
            </div>
          </MenuItem>
          <Divider variant="inset" />
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/people/manage-team"
          >
            <div className={messageStyles.messageSuccess}>
              <ListItemAvatar>
                <Avatar alt="User Name" src={avatarApi[0]} />
              </ListItemAvatar>
              <ListItemText primary="Contact" className={classes.textNotif} />
            </div>
          </MenuItem>
        </Menu>
        <IconButton
          aria-haspopup="true"
          onClick={this.toggleSettingsMenu}
          color="inherit"
          className={classNames(
            classes.notifIcon,
            dark ? classes.dark : classes.light
          )}
        >
          {this.state.showSettings && <Settings />}
          <Ionicon icon="md-settings" />
        </IconButton>
        <Button onClick={this.handleMenu("user-setting")}>
          <Avatar alt={dummy.user.name} src={dummy.user.avatar} />
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            style: {
              width: 200,
            },
          }}
          open={openMenu === "user-setting"}
          onClose={this.handleClose}
        >
          <label style={{ marginLeft: "4%", fontSize: "15px", color: "grey" }}>
            Karya
          </label>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/account/feedback"
          >
            <ListItemText
              primary="Give us feedback"
              className={classes.textNotif}
            />
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/account/personal-settings"
          >
            <ListItemText
              primary="Personal Settings"
              className={classes.textNotif}
            />
          </MenuItem>
          <label style={{ marginLeft: "4%", fontSize: "15px", color: "grey" }}>
            Shubham Gupta
          </label>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/account/profile"
          >
            <ListItemText primary="Profile" className={classes.textNotif} />
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/account/account-settings"
          >
            <ListItemText
              primary="Account Settings"
              className={classes.textNotif}
            />
          </MenuItem>
          {/* <MenuItem onClick={this.handleClose} component={Link} to={link.profile}>My Profile</MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to={link.calendar}>My Calendar</MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to={link.email}>
            My Inbox
            <ListItemIcon>
              <Badge
                className={classNames(classes.badge, classes.badgeMenu)}
                badgeContent={2}
                color="secondary"
              />
            </ListItemIcon>
          </MenuItem> */}
          <Divider />
          <MenuItem onClick={this.handleClose} component={Link} to="/">
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            Log Out
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  dark: PropTypes.bool,
};

UserMenu.defaultProps = {
  dark: false,
};

export default withStyles(styles)(UserMenu);

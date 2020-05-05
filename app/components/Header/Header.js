import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Ionicon from "react-ionicons";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import AlertDialog from "../../api/ui/modal";
import Dashboards from "../../src/dashboards/dashboards";
import FiltersMenu from "../../src/filters/filter-menu";
import SearchUi from "../Search/SearchUi";
import UserMenu from "./UserMenu";
import styles from "./header-jss";
import { checkLocation } from "../../utils/functions";

class Header extends React.Component {
  state = {
    anchorEl: null,
    dashboardMenuPosition: 0,
    filterMenuPosition: 0,
    fullScreen: false,
    open: false,
    showDashboardsMenu: false,
    showFilterMenu: false,
    showModal: false,
    showTitle: false,
    turnDarker: false,
  };

  // Initial header style
  flagDarker = false;

  flagTitle = false;

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagDarker = scroll > 30;
    const newFlagTitle = scroll > 40;
    if (this.flagDarker !== newFlagDarker) {
      this.setState({ turnDarker: newFlagDarker });
      this.flagDarker = newFlagDarker;
    }
    if (this.flagTitle !== newFlagTitle) {
      this.setState({ showTitle: newFlagTitle });
      this.flagTitle = newFlagTitle;
    }
  };

  openModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  toggleDashboardsMenu = (event) => {
    event.persist();
    this.setState({
      showDashboardsMenu: !this.state.showDashboardsMenu,
      dashboardMenuPosition: event.clientX,
    });
  };

  handleClose = () => {
    this.setState({ showDashboardsMenu: false });
  };

  toggleFilterMenu = (event) => {
    event.persist();
    this.setState({
      showFilterMenu: !this.state.showFilterMenu,
      filterMenuPosition: event.clientX,
    });
  };

  closeFilterMenu = () => {
    this.setState({ showFilterMenu: false });
  };

  render() {
    const {
      classes,
      gradient,
      history,
      margin,
      openGuide,
      position,
      title,
      toggleDrawerOpen,
    } = this.props;
    const { open, turnDarker, showTitle } = this.state;
    const { currentBase } = checkLocation(history);

    const setMargin = (sidebarPosition) => {
      if (sidebarPosition === "right-sidebar") {
        return classes.right;
      }
      if (sidebarPosition === "left-sidebar-big") {
        return classes.leftBig;
      }
      return classes.left;
    };

    return (
      <AppBar
        className={classNames(
          classes.appBar,
          classes.floatingBar,
          (currentBase === "projects" || currentBase === "settings") &&
            margin &&
            classes.appBarShift,
          setMargin(position),
          turnDarker && classes.darker,
          gradient ? classes.gradientBg : classes.solidBg
        )}
      >
        <Toolbar disableGutters={!open}>
          {(currentBase === "projects" || currentBase === "settings") && (
            <Fab
              aria-label="Menu"
              className={classes.menuButton}
              onClick={toggleDrawerOpen}
              size="small"
            >
              <MenuIcon />
            </Fab>
          )}
          <Hidden smDown>
            <div className={classes.headerProperties}>
              <div
                className={classNames(
                  classes.headerAction,
                  showTitle && classes.fadeOut
                )}
              >
                <Tooltip title="Show Menu" placement="bottom">
                  <IconButton
                    className={classes.button}
                    onClick={this.openModal}
                  >
                    <Ionicon icon="ios-apps" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Show Guide" placement="bottom">
                  <IconButton className={classes.button} onClick={openGuide}>
                    <Ionicon icon="ios-help-circle-outline" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Projects" placement="bottom">
                  <IconButton
                    className={classes.button}
                    component={Link}
                    to="/projects/project-board"
                  >
                    <Ionicon icon="ios-briefcase" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Your Work" placement="bottom">
                  <IconButton
                    className={classes.button}
                    component={Link}
                    to="/mywork/assigned-task"
                  >
                    <Ionicon icon="ios-folder-open" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Filters" placement="bottom">
                  <IconButton
                    className={classes.button}
                    onClick={this.toggleFilterMenu}
                  >
                    <Ionicon icon="ios-funnel" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Dashboards" placement="bottom">
                  <IconButton
                    className={classes.button}
                    onClick={this.toggleDashboardsMenu}
                  >
                    <Ionicon icon="ios-clipboard" />
                  </IconButton>
                </Tooltip>
              </div>
              <Typography
                component="h2"
                className={classNames(
                  classes.headerTitle,
                  showTitle && classes.show
                )}
              >
                {title}
              </Typography>
            </div>
          </Hidden>
          <div className={classes.searchWrapper}>
            <div className={classNames(classes.wrapper, classes.light)}>
              <div className={classes.search}>
                <SearchIcon />
              </div>
              <SearchUi history={history} />
            </div>
          </div>
          <Hidden xsDown>
            <span className={classes.separatorV} />
          </Hidden>
          {this.state.showModal && <AlertDialog closeModal={this.closeModal} />}
          {this.state.showDashboardsMenu && (
            <Dashboards
              dashboardMenuPosition={this.state.dashboardMenuPosition}
              handleClose={this.handleClose}
              open={this.state.showDashboardsMenu}
            />
          )}

          {this.state.showFilterMenu && (
            <FiltersMenu
              filterMenuPosition={this.state.filterMenuPosition}
              handleClose={this.closeFilterMenu}
              open={this.state.showFilterMenu}
            />
          )}
          <UserMenu />
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  margin: PropTypes.bool.isRequired,
  gradient: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  changeMode: PropTypes.func.isRequired,
  openGuide: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  projectBoard: state.get("projectBoard"),
});

const mapDispatchToProps = (dispatch) => ({});

const HeaderMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default withStyles(styles)(HeaderMapped);

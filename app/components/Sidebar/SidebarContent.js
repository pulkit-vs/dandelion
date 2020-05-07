import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import React from "react";
import brand from "dan-api/dummy/brand";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { get } from "lodash";
import { withStyles } from "@material-ui/core/styles";

import {
  setProjectIcon,
  setProjectId,
  setProjectName,
} from "../../karya-actions/projects/project-home-actions";
import MainMenu from "./MainMenu";
import dummy from "dan-api/dummy/dummyContents";
import styles from "./sidebar-jss";
import { VS_PROJECTS, SWITCH_PROJECT } from "../../utils/constants";

class SidebarContent extends React.Component {
  state = {
    transform: 0,
  };

  componentDidMount = () => {
    // Scroll content to top
    const mainContent = document.getElementById("sidebar");
    mainContent.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount() {
    const mainContent = document.getElementById("sidebar");
    mainContent.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scroll = event.target.scrollTop;
    this.setState({
      transform: scroll,
    });
  };

  handleSwitchProjectClick = (projectId, projectName, imgSrc) => () => {
    this.props.handleProjectCardClick(projectId, projectName, imgSrc)();
    this.props.closeMenuStatus();
  };

  render() {
    const {
      anchorEl,
      classes,
      closeMenuStatus,
      dataMenu,
      drawerPaper,
      isLogin,
      leftSidebar,
      loadTransition,
      openMenuStatus,
      projectBoard,
      toggleDrawerOpen,
      turnDarker,
    } = this.props;

    const { transform } = this.state;
    const projectName = get(projectBoard, "projectName", "");
    const projectsListMap = get(projectBoard, "projectsListMap", "");
    const projectIcon = get(projectBoard, "projectIcon", "");

    return (
      <div
        className={classNames(
          classes.drawerInner,
          !drawerPaper ? classes.drawerPaperClose : ""
        )}
      >
        <div className={classes.drawerHeader}>
          <NavLink
            to="/projects/project-board"
            className={classNames(
              classes.brand,
              classes.brandBar,
              turnDarker && classes.darker
            )}
          >
            <img
              src="https://cdn.theorg.com/f740c607-065b-45a4-a725-76393fcc8747_medium.jpg"
              alt={brand.name}
            />
            {VS_PROJECTS}
          </NavLink>
          {isLogin && (
            <div
              className={classNames(classes.profile, classes.user)}
              style={{
                opacity: 1 - transform / 100,
                marginTop: transform * -0.3,
              }}
            >
              <Avatar
                alt={dummy.user.name}
                src={projectIcon}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
              <div style={{ width: "100%" }}>
                <h4 style={{ width: "100%" }}>{projectName}</h4>
                <Button
                  size="small"
                  onClick={openMenuStatus}
                  style={{ width: "100%" }}
                >
                  {SWITCH_PROJECT}
                </Button>
                <Menu
                  id="status-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={closeMenuStatus}
                  className={classes.statusMenu}
                  style={{ marginTop: "36px", marginLeft: "50px" }}
                >
                  {projectsListMap.map((projects, index) => {
                    return (
                      <MenuItem
                        key={`sideBar ${index}`}
                        onClick={this.handleSwitchProjectClick(
                          projects.projectId,
                          projects.projectName,
                          projects.imgSrc
                        )}
                        style={{ width: "100%" }}
                      >
                        <img
                          src={projects.imgSrc}
                          alt="https://cdn.theorg.com/f740c607-065b-45a4-a725-76393fcc8747_medium.jpg"
                          style={{
                            width: "15px",
                            height: "15px",
                            marginRight: "4%",
                          }}
                        />
                        {projects.projectName}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </div>
            </div>
          )}
        </div>
        <div
          id="sidebar"
          className={classNames(
            classes.menuContainer,
            leftSidebar && classes.rounded,
            isLogin && classes.withProfile
          )}
        >
          <MainMenu
            loadTransition={loadTransition}
            dataMenu={dataMenu}
            toggleDrawerOpen={toggleDrawerOpen}
          />
        </div>
      </div>
    );
  }
}

SidebarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerPaper: PropTypes.bool.isRequired,
  turnDarker: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
  leftSidebar: PropTypes.bool.isRequired,
  dataMenu: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  anchorEl: PropTypes.object,
  openMenuStatus: PropTypes.func.isRequired,
  closeMenuStatus: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
};

SidebarContent.defaultProps = {
  turnDarker: false,
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
  anchorEl: null,
  isLogin: true,
};

const mapStateToProps = (state) => ({
  projectBoard: state.get("projectBoard"),
});

const mapDispatchToProps = (dispatch) => ({
  handleProjectCardClick: (projectId, projectName, imgSrc) => () => {
    dispatch(setProjectId(projectId));
    dispatch(setProjectName(projectName));
    dispatch(setProjectIcon(imgSrc));
  },
});

const SidebarContentMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContent);

export default withStyles(styles)(SidebarContentMapped);

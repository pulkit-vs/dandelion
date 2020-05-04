import React, { Fragment } from "react";
import { PropTypes } from "prop-types";
import classNames from "classnames";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Header, Sidebar, BreadCrumb } from "dan-components";
import dataMenu from "dan-api/ui/menu";
import Decoration from "../Decoration";
import styles from "../appStyles-jss";
import { connect } from "react-redux";
import { get } from "lodash";

import { checkLocation, moduleJson } from "../../../utils/functions";
import { projectOptions } from "../../../src/projects/projectOptions";

class LeftSidebarLayout extends React.Component {
  render() {
    const {
      classes,
      children,
      toggleDrawer,
      sidebarOpen,
      loadTransition,
      pageLoaded,
      mode,
      gradient,
      deco,
      bgPosition,
      changeMode,
      place,
      titleException,
      handleOpenGuide,
      projectBoard,
    } = this.props;
    const projectId = get(projectBoard, "projectId", "");
    const history = get(this.props, "history", []);
    const { currentPage, currentBase } = checkLocation(history);
    const json = moduleJson(currentPage);
    return (
      <Fragment>
        <Header
          changeMode={changeMode}
          gradient={gradient}
          history={history}
          margin={sidebarOpen}
          mode={mode}
          openGuide={handleOpenGuide}
          position="left-sidebar"
          title={place}
          toggleDrawerOpen={toggleDrawer}
        />
        {(currentBase === "projects" || currentBase === "settings") && (
          <Sidebar
            open={sidebarOpen}
            toggleDrawerOpen={toggleDrawer}
            loadTransition={loadTransition}
            dataMenu={json}
            leftSidebar
          />
        )}
        <main
          className={classNames(
            classes.content,
            !sidebarOpen ? classes.contentPaddingLeft : ""
          )}
          id="mainContent"
        >
          <Decoration
            mode={mode}
            gradient={gradient}
            decoration={deco}
            bgPosition={bgPosition}
            horizontalMenu={false}
          />
          <section
            className={classNames(classes.mainWrap, classes.sidebarLayout)}
          >
            {titleException.indexOf(history.location.pathname) < 0 && (
              <div className={classes.pageTitle}>
                <Typography
                  component="h4"
                  className={
                    bgPosition === "header"
                      ? classes.darkTitle
                      : classes.lightTitle
                  }
                  variant="h4"
                >
                  {place}
                </Typography>
                <BreadCrumb
                  separator=" / "
                  theme={bgPosition === "header" ? "dark" : "light"}
                  location={history.location}
                />
              </div>
            )}
            {!pageLoaded && (
              <img
                src="/images/spinner.gif"
                alt="spinner"
                className={classes.circularProgress}
              />
            )}
            <Fade
              in={pageLoaded}
              mountOnEnter
              unmountOnExit
              {...(pageLoaded ? { timeout: 700 } : {})}
            >
              <div className={!pageLoaded ? classes.hideApp : ""}>
                {/* Application content will load here */}
                {children}
              </div>
            </Fade>
          </section>
        </main>
      </Fragment>
    );
  }
}

LeftSidebarLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  pageLoaded: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
  bgPosition: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  titleException: PropTypes.array.isRequired,
  handleOpenGuide: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  projectBoard: state.get("projectBoard"),
});

const mapDispatchToProps = (dispatch) => ({});

const LeftSidebarLayoutMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftSidebarLayout);

export default withStyles(styles)(LeftSidebarLayoutMapped);

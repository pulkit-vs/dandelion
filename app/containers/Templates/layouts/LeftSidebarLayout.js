import Fade from "@material-ui/core/Fade";
import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { Header, Sidebar, BreadCrumb } from "dan-components";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { get } from "lodash";
import { withStyles } from "@material-ui/core/styles";

import Decoration from "../Decoration";
import styles from "../appStyles-jss";

import { checkLocation, moduleJson } from "../../../utils/functions";

class LeftSidebarLayout extends React.Component {
  render() {
    const {
      bgPosition,
      changeMode,
      children,
      classes,
      deco,
      gradient,
      handleOpenGuide,
      loadTransition,
      mode,
      pageLoaded,
      place,
      sidebarOpen,
      titleException,
      toggleDrawer,
    } = this.props;
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
            dataMenu={json}
            leftSidebar
            loadTransition={loadTransition}
            open={sidebarOpen}
            toggleDrawerOpen={toggleDrawer}
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
            bgPosition={bgPosition}
            decoration={deco}
            gradient={gradient}
            horizontalMenu={false}
            mode={mode}
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
                  location={history.location}
                  separator=" / "
                  theme={bgPosition === "header" ? "dark" : "light"}
                />
              </div>
            )}
            {!pageLoaded && (
              <img
                alt="spinner"
                className={classes.circularProgress}
                src="/images/spinner.gif"
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
  bgPosition: PropTypes.string.isRequired,
  changeMode: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  deco: PropTypes.bool.isRequired,
  gradient: PropTypes.bool.isRequired,
  handleOpenGuide: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  loadTransition: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  pageLoaded: PropTypes.bool.isRequired,
  place: PropTypes.string.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  titleException: PropTypes.array.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
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

import Grid from "@material-ui/core/Grid";
import React from "react";
import { connect } from "react-redux";
import { get } from "lodash";

import EnhancedTable from "../../containers/Tables/TablePlayground";
import MediaCard from "../components/Cards";
import { projectHeadCells, projectList } from "../../utils/constants";
import {
  setAllStarredTask,
  setProjectIcon,
  setProjectId,
  setProjectName,
  setRows,
  setStarredTask,
  toggleAllStarredStatus,
  toggleStarredStatus,
  //dummy methods to demonstrate redux-saga
  fetchAllProjects,
  getConfigInfo,
  // getAllTickets,
} from "../../karya-actions/projects/project-home-actions";

const heading = "Projects";
export class ProjectHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setRows(); //TODO: Remove after API integration
    this.props.getConfigInfo();
    this.props.fetchAllProjects();
  }

  render() {
    const {
      handleProjectCardClick,
      projectHome,
      setAllStarredTask,
      setStarredTask,
      toggleAllStarredStatus,
      toggleStarredStatus,
    } = this.props;

    const starredProjects = get(projectHome, "starredProjects", []);
    const projectData = get(projectHome, "projectData", []);

    return (
      <Grid container spacing={2}>
        {projectList.map((project, index) => (
          <Grid key={index} item xs={12} sm={12} md={4}>
            <MediaCard
              handleProjectCardClick={handleProjectCardClick}
              projectCategory={project.data.projectCategory}
              projectIconUrl={project.projectIcon}
              projectId={project.id}
              projectName={project.data.projectName}
            />
          </Grid>
        ))}
        <div style={{ width: "100%", marginTop: 30 }}>
          <Grid item sm={12} xs={12} md={12}>
            <EnhancedTable
              handleTableRowClick={handleProjectCardClick}
              headCells={projectHeadCells}
              heading={heading}
              projectHome={true}
              rows={projectData}
              setAllStarredTask={setAllStarredTask}
              setStarredTask={setStarredTask}
              showStarredButton={true}
              starredTask={starredProjects}
              toggleAllStarredStatus={toggleAllStarredStatus}
              toggleStarredStatus={toggleStarredStatus}
            />
          </Grid>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  projectHome: state.get("projectHome"),
});

const mapDispatchToProps = (dispatch) => ({
  setStarredTask: (rows) => dispatch(setStarredTask(rows)),

  toggleStarredStatus: (projectId, status) =>
    dispatch(toggleStarredStatus(projectId, status)),

  setRows: () => dispatch(setRows(projectList)),

  setAllStarredTask: (status) => dispatch(setAllStarredTask(status)),

  toggleAllStarredStatus: (status) => dispatch(toggleAllStarredStatus(status)),

  handleProjectCardClick: (projectId, projectName, projectIcon) => () => {
    dispatch(setProjectId(projectId));
    dispatch(setProjectName(projectName));
    dispatch(setProjectIcon(projectIcon));
    //dummy methods to demonstrate redux-saga
    // dispatch(getAllTickets());
  },

  getConfigInfo: () => {
    dispatch(getConfigInfo());
  },

  fetchAllProjects: () => {
    dispatch(fetchAllProjects());
  },
});

const ProjectHomeMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectHome);

export default ProjectHomeMapped;

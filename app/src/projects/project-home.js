/**
 * @class ProjectHome
 * 
 * @description
 *    Project Home Screen
 * 
 * @author
 *  Nikhil Aggarwal, VectoScalar
 * 
 */

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
import DataService from "../../services/data-service";
import { APIS } from "../../utils/constants";
import styles from "dan-styles/ProjectHome.scss";

const heading = "Projects";
export class ProjectHome extends React.Component {
  constructor(props) {
    super(props);
  }

  async getData() {
    const data = await DataService.asyncGetAll(APIS.PROJECTS);
    console.log("Data -->", data);
  }

  componentDidMount() {
    // this.props.setRows(); //TODO: Remove after API integration
    this.props.getConfigInfo();
    this.props.fetchAllProjects();
}

getProjectCategory(categoryId, projectCategories) {
    return (projectCategories.filter(x => x.id == categoryId)).map(x => x.name)
}

getProjectType(typeId, projectTypes) {
    return (projectTypes.filter(x => x.id == typeId)).map(x => x.name)
}

getEmployeeName(empId, employeeData){
    return (employeeData.filter(x => x.ID == empId)).map(x => x.NAME)
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
    const projectTable = get(projectHome, "projectTable", []);
    const projectCategories = get(projectHome, "projectCategories", []);
    const projectTypes = get(projectHome, "projectTypes", []);
    const employeeData = get(projectHome, "employeeData", []);

    if (projectTable.length > 0 && projectCategories.length > 0) {
        for (let i = 0; i < projectTable.length; i++) {
            projectTable[i].data.projectCategory = this.getProjectCategory(projectTable[i].data.projectCategory, projectCategories)
        }
    }

    if (projectTable.length > 0 && projectTypes.length > 0) {
        for (let i = 0; i < projectTable.length; i++) {
            projectTable[i].data.projectType = this.getProjectType(projectTable[i].data.projectType, projectTypes)
        }
    }

    if (projectTable.length > 0 && employeeData.length > 0) {
        for (let i = 0; i < projectTable.length; i++) {
            projectTable[i].data.projectLead = this.getEmployeeName(projectTable[i].data.projectLead, employeeData)
        }
    }

    return (
      <Grid container spacing={2}>
        {projectTable.slice(0,3).map((project, index) => (
          <Grid key={index} item xs={12} sm={12} md={4}>
            <MediaCard
              handleProjectCardClick={handleProjectCardClick}
              projectCategory={project.data.projectCategory}
              projectIconUrl={project.projectIcon}
              projectId={project.projectId}
              projectName={project.data.projectName}
            />
          </Grid>
        ))}
        <div className={styles.tableDiv}>
          <Grid item sm={12} xs={12} md={12}>
            <EnhancedTable
              handleTableRowClick={handleProjectCardClick}
              headCells={projectHeadCells}
              heading={heading}
              projectHome={true}
              rows={projectTable}
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

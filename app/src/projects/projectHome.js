import Grid from "@material-ui/core/Grid";
import React from "react";
import { connect } from "react-redux";
import { get } from "lodash";

import EnhancedTable from "../../containers/Tables/TablePlayground";
import MediaCard from "../Cards";
import {
  projectHeadCells,
  projectHomeTickets,
  projectList,
} from "../../utils/constants";
import {
  setAllStarredTask,
  setRows,
  setStarredTask,
  toggleAllStarredStatus,
  toggleStarredStatus,
} from "../../actions/projects/projectBoardActions";
import { projectCardData } from "../../utils/constants";

const heading = "Projects";

export class ProjectHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setRows(); //TODO: Remove after API integration
  }

  render() {
    const {
      projectBoard,
      setAllStarredTask,
      setStarredTask,
      toggleAllStarredStatus,
      toggleStarredStatus,
    } = this.props;
    const projectStarredTasks = get(projectBoard, "projectStarredTasks", []);
    const projectData = get(projectBoard, "projectData", []);

    return (
      <Grid container spacing={2}>
        {projectCardData.map((data, index) => (
          <Grid key={index} item xs={12} sm={12} md={4}>
            <MediaCard
              projectCategory={data.projectCategory}
              projectIconUrl={data.projectIcon}
              projectName={data.projectName}
            />
          </Grid>
        ))}
        <div style={{ width: "100%", marginTop: 30 }}>
          <Grid item sm={12} xs={12} md={12}>
            <EnhancedTable
              headCells={projectHeadCells}
              heading={heading}
              rows={projectList}
              setAllStarredTask={setAllStarredTask}
              setStarredTask={setStarredTask}
              showStarredButton={true}
              starredTask={projectStarredTasks}
              toggleAllStarredStatus={toggleAllStarredStatus}
              toggleStarredStatus={toggleStarredStatus}
              projectHome={true}
            />
          </Grid>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  projectBoard: state.get("projectBoard"),
});

const mapDispatchToProps = (dispatch) => ({
  setStarredTask: (rows) => dispatch(setStarredTask(rows)),

  toggleStarredStatus: (ticketId, status) =>
    dispatch(toggleStarredStatus(ticketId, status)),

  setRows: () => dispatch(setRows(projectHomeTickets)),

  setAllStarredTask: (status) => dispatch(setAllStarredTask(status)),

  toggleAllStarredStatus: (status) => dispatch(toggleAllStarredStatus(status)),
});

const ProjectHomeMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectHome);

export default ProjectHomeMapped;

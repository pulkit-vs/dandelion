import Grid from "@material-ui/core/Grid";
import React from "react";
import { connect } from "react-redux";
import { get } from "lodash";

import EnhancedTable from "../../containers/Tables/TablePlayground";
import MediaCard from "../Cards";
import { headCells, rows } from "../../utils/constants";
import {
  setAllStarredTask,
  setRows,
  setStarredTask,
  toggleAllStarredStatus,
  toggleStarredStatus,
} from "../../actions/projectActions";
import { projectCardData } from "../../utils/constants";

const heading = "Tickets";

export class ProjectHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setRows(); //TODO: Remove after API integration
  }

  render() {
    const {
      projects,
      setAllStarredTask,
      setStarredTask,
      toggleAllStarredStatus,
      toggleStarredStatus,
    } = this.props;
    const starredTask = get(projects, "starredTask", []);
    const rows = get(projects, "rows", []);

    return (
      <Grid container spacing={2}>
        {projectCardData.map((data, index) => (
          <Grid key={index} item xs={12} sm={12} md={4}>
            <MediaCard
              projectName={data.projectName}
              projectCategory={data.projectCategory}
              projectIconUrl={data.projectIcon}
            />
          </Grid>
        ))}
        <div style={{ width: "100%", marginTop: 30 }}>
          <Grid item sm={12} xs={12} md={12}>
            <EnhancedTable
              headCells={headCells}
              heading={heading}
              rows={rows}
              setAllStarredTask={setAllStarredTask}
              setStarredTask={setStarredTask}
              starredTask={starredTask}
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
  projects: state.get("projects"),
});

const mapDispatchToProps = (dispatch) => ({
  setStarredTask: (rows) => dispatch(setStarredTask({ rows })),

  toggleStarredStatus: (ticketId, status) =>
    dispatch(toggleStarredStatus({ ticketId, status })),

  setRows: () => dispatch(setRows({ rows })),

  setAllStarredTask: (status) => dispatch(setAllStarredTask({ status })),

  toggleAllStarredStatus: (status) =>
    dispatch(toggleAllStarredStatus({ status })),
});

const ProjectHomeMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectHome);

export default ProjectHomeMapped;

import Grid from "@material-ui/core/Grid";
import React from "react";
import { connect } from "react-redux";
import { get } from "lodash";

import EnhancedTable from "../../containers/Tables/TablePlayground";
import { headCells, rows } from "../../utils/constants";
import {
  setAllStarredTask,
  setRows,
  setStarredTask,
  toggleAllStarredStatus,
  toggleStarredStatus,
} from "../../karya-actions/projects/project-home-actions";

const heading = "Starred Tasks";

export class StarredTasks extends React.Component {
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
    const projectStarredTasks = get(projects, "projectStarredTasks", []);
    const rows = get(projects, "rows", []);

    return (
      <Grid container>
        <div style={{ width: "100%", marginTop: 30 }}>
          <Grid item sm={12}>
            <EnhancedTable
              headCells={headCells}
              heading={heading}
              rows={rows}
              setAllStarredTask={setAllStarredTask}
              setStarredTask={setStarredTask}
              showStarredButton={false}
              starredTask={projectStarredTasks}
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
  setStarredTask: (rows) => dispatch(setStarredTask(rows)),

  toggleStarredStatus: (ticketId, status) =>
    dispatch(toggleStarredStatus(ticketId, status)),

  setRows: () => dispatch(setRows(rows)),

  setAllStarredTask: (status) => dispatch(setAllStarredTask(status)),

  toggleAllStarredStatus: (status) => dispatch(toggleAllStarredStatus(status)),
});

const StarredTasksMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarredTasks);

export default StarredTasksMapped;

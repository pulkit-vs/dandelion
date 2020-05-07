import Grid from "@material-ui/core/Grid";
import React from "react";
import { connect } from "react-redux";
import { get, identity } from "lodash";
import DataService from "../../services/data-service";
import * as AppConstants from "../../utils/constants";

import EnhancedTable from "../../containers/Tables/TablePlayground";
import { headCells, assignedToMeTickets } from "../../utils/constants";
import {
  setAllStarredTask,
  setRows,
  setStarredTask,
  toggleAllStarredStatus,
  toggleStarredStatus,
} from "../../karya-actions/myWork/assigned-issues-actions";

const heading = "My Tasks";

export class AssignedToMe extends React.Component {
  constructor() {
    super();
    this.dataService = new DataService();
  }

  componentDidMount() {
    this.props.setRows(); //TODO: Remove after API integration
    this.getData();
  }

  async getData() {
    console.log("getData: staring...");
    const params = {
      peojectId: 0,
      type: "list",
      employeeId: 1,
    };
    const data = await this.dataService.asyncGetWithParam(
      AppConstants.APIS.PROJECTS,
      params
    );
    console.log("getData: data - 2", data);
  }

  render() {
    const {
      assignedTasks,
      setAllStarredTask,
      setStarredTask,
      toggleAllStarredStatus,
      toggleStarredStatus,
    } = this.props;
    const assignedStarredTasks = get(assignedTasks, "assignedStarredTasks", []);
    const assignedData = get(assignedTasks, "assignedData", []);

    return (
      <Grid container>
        <div style={{ width: "100%", marginTop: 30 }}>
          <Grid item sm={12}>
            <EnhancedTable
              headCells={headCells}
              heading={heading}
              rows={assignedData}
              setAllStarredTask={setAllStarredTask}
              setStarredTask={setStarredTask}
              showStarredButton={true}
              starredTask={assignedStarredTasks}
              toggleAllStarredStatus={toggleAllStarredStatus}
              toggleStarredStatus={toggleStarredStatus}
              handleTableRowClick={identity}
            />
          </Grid>
        </div>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => ({
  assignedTasks: state.get("assignedToMe"),
});

const mapDispatchToProps = (dispatch) => ({
  setStarredTask: (rows) => dispatch(setStarredTask(rows)),

  toggleStarredStatus: (ticketId, status) =>
    dispatch(toggleStarredStatus(ticketId, status)),

  setRows: () => dispatch(setRows(assignedToMeTickets)),

  setAllStarredTask: (status) => dispatch(setAllStarredTask(status)),

  toggleAllStarredStatus: (status) => dispatch(toggleAllStarredStatus(status)),
});

const AssignedToMeMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignedToMe);

export default AssignedToMeMapped;

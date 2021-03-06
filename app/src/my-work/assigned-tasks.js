/**
 * @class AssignedToMe
 * 
 * @description
 *    Assigned Tasks Screen
 * 
 * @author
 *  Nikhil Aggarwal, VectoScalar
 * 
 */

import Grid from "@material-ui/core/Grid";
import React from "react";
import { connect } from "react-redux";
import { get, identity } from "lodash";

import EnhancedTable from "../../containers/Tables/TablePlayground";
import { headCells, assignedToMeTickets } from "../../utils/constants";
import {
  setAllStarredTask,
  setRows,
  setStarredTask,
  toggleAllStarredStatus,
  toggleStarredStatus,
} from "../../karya-actions/myWork/assigned-issues-actions";
import styles from "dan-styles/AssignedTasks.scss";

const heading = "My Tasks";

export class AssignedToMe extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.setRows(); //TODO: Remove after API integration
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
        <div className={styles.tableDiv}>
          <Grid item sm={12}>
            <EnhancedTable
              handleTableRowClick={identity}
              headCells={headCells}
              heading={heading}
              rows={assignedData}
              setAllStarredTask={setAllStarredTask}
              setStarredTask={setStarredTask}
              showStarredButton={true}
              starredTask={assignedStarredTasks}
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
  assignedTasks: state.get("assignedTasks"),
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

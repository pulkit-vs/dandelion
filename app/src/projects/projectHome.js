import Grid from "@material-ui/core/Grid";
import React from "react";
import { connect } from "react-redux";

import EnhancedTable from "../../containers/Tables/TablePlayground";
import MediaCard from "../Cards";
import { headCells, rows } from "../../utils/constants";
import { updateTasks } from "../../actions/projectActions";

const heading = "Tickets";

export class ProjectHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { updateTasks } = this.props;
    return (
      <Grid container>
        <Grid item xs={12} sm={4}>
          <MediaCard />
        </Grid>
        <div style={{ width: "100%", marginTop: 30 }}>
          <Grid item sm={12}>
            <EnhancedTable
              headCells={headCells}
              heading={heading}
              rows={rows}
              updateTasks={updateTasks}
            />
          </Grid>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  rows: state.getIn(["projects", "rows"]),
});

const mapDispatchToProps = (dispatch) => ({
  updateTasks: (rows) => dispatch(updateTasks({ rows })),
});

const ProjectHomeMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectHome);

export default ProjectHomeMapped;

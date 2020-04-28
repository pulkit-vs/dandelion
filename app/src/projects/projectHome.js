import Grid from "@material-ui/core/Grid";
import React from "react";
import { connect } from "react-redux";

import EnhancedTable from "../../containers/Tables/TablePlayground";
import MediaCard from "../Cards";
import { headCells, rows } from "../../utils/constants";
import { updateTasks } from "../../actions/projectActions";
import { projectCardData } from '../../utils/constants';

const heading = "Tickets";

export class ProjectHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { updateTasks } = this.props;
    return (
      <Grid container spacing={2}>
        {projectCardData.map((data) => (
        <Grid item xs={12} sm={12} md={4}>
            <MediaCard projectName={data.projectName} projectCategory={data.projectCategory} projectIconUrl={data.projectIcon}/>
        </Grid>
        ))}
        <div style={{ width: "100%", marginTop: 30 }}>
          <Grid item sm={12} xs={12} md={12}>
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

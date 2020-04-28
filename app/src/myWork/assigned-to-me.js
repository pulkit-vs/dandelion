import Grid from "@material-ui/core/Grid";
import React from "react";

import EnhancedTable from "../../containers/Tables/TablePlayground";
import { headCells, rows } from "../../utils/constants";

const heading = "My Tasks";

export default class AssignedToMe extends React.Component {
  render() {
    return (
      <Grid container>
        <div style={{ width: "100%", marginTop: 30 }}>
          <Grid item sm={12}>
            <EnhancedTable
              headCells={headCells}
              heading={heading}
              rows={rows}
            />
          </Grid>
        </div>
      </Grid>
    );
  }
}

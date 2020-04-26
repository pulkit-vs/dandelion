import Grid from "@material-ui/core/Grid";
import React from "react";

import EnhancedTable from "../../containers/Tables/TablePlayground";
import MediaCard from "../Cards";
import { headCells, rows } from "../../utils/constants";

const heading = "Tickets";

export default class ProjectHome extends React.Component {
  render() {
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
            />
          </Grid>
        </div>
      </Grid>
    );
  }
}

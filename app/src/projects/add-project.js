import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";

import PaperSheet from "../../containers/UiElements/demos/Cards/PaperSheet";

export default class AddProject extends Component {
  form = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
        </form>
      </div>
    );
  };
  render() {
    return (
      <Grid item md={6} xs={12}>
        <PaperSheet Children={this.form} />
      </Grid>
    );
  }
}

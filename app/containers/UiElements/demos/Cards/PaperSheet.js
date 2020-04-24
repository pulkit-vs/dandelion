import PropTypes from "prop-types";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  root: theme.mixins.gutters({
    marginTop: theme.spacing(3),
    paddingBottom: 16,
    paddingTop: 16,
  }),
});

export function PaperSheet(props) {
  const { classes, Children } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Children />
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);

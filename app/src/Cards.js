import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "dan-styles/Cards.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const {projectName, projectCategory, projectIconUrl} = props;
  return (
    <Card
      className={`${classes.root} ${styles.cardShadow}`}
    >
      <Grid container className={styles.gridPadding} spacing={3}>
        <Grid item xs={12} sm={4}>
          <img src={projectIconUrl} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <h2 className={styles.h2}>{projectName}</h2>
          <span className={styles.spanFont}> {projectCategory} </span>
        </Grid>
      </Grid>
    </Card>
  );
}

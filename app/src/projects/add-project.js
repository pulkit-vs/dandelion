import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import PaperSheet from "../../containers/UiElements/demos/Cards/PaperSheet";
import styles from "dan-styles/AddProject.scss";
import { constants } from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Enter basic details", "Select Category", "Select Template"];
}

function getStepContent(stepIndex) {
  const [shadowChange, onShadowChange] = React.useState(false);
  const onShadowChangeClicked = (shadowChange) => {
    return () => {
      onShadowChange(shadowChange);
      console.log("Calling", shadowChange);
    };
  };
  switch (stepIndex) {
    case 0:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField
              className={styles.fullWidth}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              className={styles.fullWidth}
              id="outlined-basic"
              label="key"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={styles.fullWidth}
              id="outlined-basic"
              label="Description"
              multiline
              rows={3}
              variant="outlined"
            />
          </Grid>
        </Grid>
      );
    case 1:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Card
              className={
                shadowChange ? styles.selectedCardShadow : styles.cardShadow
              }
              onClick={onShadowChangeClicked(!shadowChange)}
            >
              <CardContent>
                <Typography
                  className={styles.textCenter}
                  color="textSecondary"
                  gutterBottom
                >
                  {constants.SOFTWARE}
                </Typography>
                <img
                  className={styles.img}
                  src={require("../images/img-software.png")}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={styles.cardShadow}>
              <CardContent>
                <Typography
                  className={styles.textCenter}
                  color="textSecondary"
                  gutterBottom
                >
                  {constants.MANAGEMENT}
                </Typography>
                <img
                  className={styles.img}
                  src={require("../images/management.png")}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12}>
            <br />
          </Grid>
        </Grid>
      );
    case 2:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card className={styles.cardShadow}>
              <CardContent>
                <Typography
                  className={styles.textCenter}
                  color="textSecondary"
                  gutterBottom
                >
                  {constants.KANBAN_BOARD}
                </Typography>
                <img
                  className={styles.img}
                  src={require("../images/kanban-board.png")}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={styles.cardShadow}>
              <CardContent>
                <Typography
                  className={styles.textCenter}
                  color="textSecondary"
                  gutterBottom
                >
                  {constants.SCRUM_BOARD}
                </Typography>
                <img
                  className={styles.img}
                  src={require("../images/scrum-board.jpg")}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={styles.cardShadow}>
              <CardContent>
                <Typography
                  className={styles.textCenter}
                  color="textSecondary"
                  gutterBottom
                >
                  {constants.SPRINT_BOARD}
                </Typography>
                <img
                  className={styles.img}
                  src={require("../images/sprint-board.png")}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      );
    default:
      return "Unknown step";
  }
}

export default class AddProject extends Component {
  form = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
      setActiveStep(0);
    };

    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <div className={styles.divStyle}>
            <div className={classes.root}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>
                      {constants.PROJECT_CREATED}
                    </Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>
                      {getStepContent(activeStep)}
                    </Typography>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                      >
                        {constants.BACK}
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  };

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item md={12} xs={12}>
          <PaperSheet Children={this.form} />
        </Grid>
      </Grid>
    );
  }
}

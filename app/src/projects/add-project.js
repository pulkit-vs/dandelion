import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import PaperSheet from "../../containers/UiElements/demos/Cards/PaperSheet";
import styles from "dan-styles/AddProject.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
  return ['Enter basic details', 'Select Category', 'Select Template'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField id="outlined-basic" label="Name" variant="outlined" className={styles.fullWidth} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField id="outlined-basic" label="key" variant="outlined" className={styles.fullWidth} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="outlined-basic" label="Description" variant="outlined" multiline rows={3} className={styles.fullWidth} />
          </Grid>
        </Grid>
      );
    case 1:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Card className={styles.cardShadow}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom className={styles.textCenter}> Software </Typography>
                <img src={require('../img-software.png')} className={styles.img} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className={styles.cardShadow}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom className={styles.textCenter}> Management </Typography>
                <img src={require('../management.png')} className={styles.img} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      );
    case 2:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card className={styles.cardShadow}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom className={styles.textCenter}> Kanban Board </Typography>
                <img src={require('../kanban-board.png')} className={styles.img} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={styles.cardShadow}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom className={styles.textCenter}> Scrum Board </Typography>
                <img src={require('../scrum-board.jpg')} className={styles.img} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={styles.cardShadow}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom className={styles.textCenter}> Sprint Board </Typography>
                <img src={require('../sprint-board.png')} className={styles.img} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      );
    default:
      return 'Unknown step';
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
                    <Typography className={classes.instructions}>Project Created</Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                    <div>
                      <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.backButton}
                        >
                          Back
              </Button>
                        <Button variant="contained" color="primary" onClick={handleNext}>
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
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

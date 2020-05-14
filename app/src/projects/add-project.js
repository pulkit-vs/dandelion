/**
 * @class AddProject
 *
 * @description
 *    Add Project Screen
 *
 * @author
 *  Nikhil Aggarwal, VectoScalar
 *
 */

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';

import PaperSheet from '../../containers/UiElements/demos/Cards/PaperSheet';
import styles from 'dan-styles/AddProject.scss';
import { constants } from '../../utils/constants';
import {
  createProject,
  setProjectDesc,
  setProjectKey,
  setProjectName,
  setSelectedCategory,
  setSelectedTemplate,
  setSelectedType,
} from '../../karya-actions/projects/add-project-actions';

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
  return ['Enter basic details', 'Select Category', 'Select Template', 'Select Type'];
}

function getStepContent(
  stepIndex,
  setProjectName,
  setProjectKey,
  setProjectDesc,
  projectHome,
  handleCategoryClick,
  addProjectData,
  handleSelectedTemplate,
  handleSelectedType,
  categoryIndex,
  templateIndex,
  typeIndex
) {
  const projectCategories = get(projectHome, 'projectCategories', []);
  const projectTemplates = get(projectHome, 'projectTemplates', []);
  const projectTypes = get(projectHome, 'projectTypes', []);

  const projectName = get(addProjectData, 'projectName', '');
  const projectKey = get(addProjectData, 'projectKey', '');
  const projectDesc = get(addProjectData, 'projectDesc', '');
  const selectedCategory = get(addProjectData, 'selectedCategory', '');
  const selectedTemplate = get(addProjectData, 'selectedTemplate', '');
  const selectedType = get(addProjectData, 'selectedType', '');
  console.log('selectedType', selectedType);

  const [nameInput, onNameInputChange] = React.useState('');
  const [keyInput, onKeyInputChange] = React.useState('');
  const [descInput, onDescInputChange] = React.useState('');

  const [shadowChange, onShadowChange] = React.useState(false);

  const onShadowChangeClicked = (shadowChange) => {
    return () => {
      onShadowChange(shadowChange);
      console.log('Calling', shadowChange);
    };
  };

  const onNameChange = () => {
    onNameInputChange(event.target.value);
    if (event.target.value === '') {
      setProjectName();
    }
  };

  const onKeyChange = () => {
    onKeyInputChange(event.target.value);
    if (event.target.value === '') {
      setProjectKey();
    }
  };

  const onDescriptionChange = () => {
    onDescInputChange(event.target.value);
    if (event.target.value === '') {
      setProjectDesc();
    }
  };

  switch (stepIndex) {
    case 0:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField
              className={styles.fullWidth}
              label='Name'
              onBlur={setProjectName}
              onChange={onNameChange}
              value={nameInput ? nameInput : projectName}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              className={styles.fullWidth}
              label='key'
              onBlur={setProjectKey}
              onChange={onKeyChange}
              value={keyInput ? keyInput : projectKey}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={styles.fullWidth}
              label='Description'
              onBlur={setProjectDesc}
              onChange={onDescriptionChange}
              value={descInput ? descInput : projectDesc}
              variant='outlined'
            />
          </Grid>
        </Grid>
      );
    case 1:
      return (
        <Grid container spacing={2}>
          {projectCategories.map((category, index) => {
            return (
              <Grid item xs={12} sm={3} key={`cat-grid${index}`}>
                <Card
                  className={categoryIndex === index ? styles.selectedCardShadow : styles.cardShadow}
                  onClick={handleCategoryClick(category.id, index)}
                >
                  <CardContent>
                    <Typography className={styles.textCenter} color='textSecondary' gutterBottom>
                      {category.name}
                    </Typography>
                    <img className={styles.img} src={require('../images/img-software.png')} />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
          <Grid item xs={12} sm={12}>
            <br />
          </Grid>
        </Grid>
      );
    case 2:
      return (
        <Grid container spacing={2}>
          {projectTemplates.map((template, index) => {
            return (
              <Grid item xs={12} sm={4} key={`templates${index}`}>
                <Card
                  className={templateIndex === index ? styles.selectedCardShadow : styles.cardShadow}
                  onClick={handleSelectedTemplate(template.id, index)}
                >
                  <CardContent>
                    <Typography className={styles.textCenter} color='textSecondary' gutterBottom>
                      {template.name}
                    </Typography>
                    <img className={styles.img} src={require('../images/kanban-board.png')} />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      );
    case 3:
      return (
        <Grid container spacing={2}>
          {projectTypes.map((type, index) => {
            return (
              <Grid item xs={12} sm={4} key={`type${index}`}>
                <Card
                  className={typeIndex === index ? styles.selectedCardShadow : styles.cardShadow}
                  onClick={handleSelectedType(type.id, index)}
                >
                  <CardContent>
                    <Typography className={styles.textCenter} color='textSecondary' gutterBottom>
                      {type.name}
                    </Typography>
                    <img className={styles.img} src={require('../images/kanban-board.png')} />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      );
    default:
      return 'Unknown step';
  }
}

function form(
  addProjectData,
  setProjectName,
  setProjectKey,
  setProjectDesc,
  projectHome,
  handleCategoryClick,
  incrementActiveStep,
  decrementActiveStep,
  activeStep,
  handleSelectedTemplate,
  handleSelectedType,
  categoryIndex,
  templateIndex,
  typeIndex
) {
  const classes = useStyles();
  const steps = getSteps();

  const handleNext = () => {
    incrementActiveStep();
  };

  const handleBack = () => {
    decrementActiveStep();
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
              {activeStep !== steps.length && (
                <div>
                  <Typography className={classes.instructions}>
                    {getStepContent(
                      activeStep,
                      setProjectName,
                      setProjectKey,
                      setProjectDesc,
                      projectHome,
                      handleCategoryClick,
                      addProjectData,
                      handleSelectedTemplate,
                      handleSelectedType,
                      categoryIndex,
                      templateIndex,
                      typeIndex
                    )}
                  </Typography>
                  <div>
                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
                      {constants.BACK}
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleNext}
                      disabled={
                        activeStep == 0
                          ? addProjectData.projectName.trim() == '' ||
                            addProjectData.projectKey.trim() == '' ||
                            addProjectData.projectDesc.trim() == ''
                          : activeStep == 1
                          ? addProjectData.selectedCategory.trim() == ''
                          : activeStep == 2
                          ? addProjectData.selectedTemplate.trim() == ''
                          : activeStep == 3
                          ? addProjectData.selectedType.trim() == ''
                          : true
                      }
                    >
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
}

export class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
      categoryIndex: null,
      templateIndex: null,
      typeIndex: null,
    };
  }

  incrementActiveStep = () => {
    const { addProjectData } = this.props;
    const steps = getSteps();
    if (this.state.activeStep + 1 === steps.length) {
      this.props.createProject(
        addProjectData.projectName,
        addProjectData.projectKey,
        addProjectData.projectDesc,
        addProjectData.selectedCategory,
        addProjectData.selectedTemplate,
        addProjectData.selectedType
      );
    } else {
      this.setState({ activeStep: this.state.activeStep + 1 });
    }
  };

  decrementActiveStep = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  resetActiveStep = () => {
    this.setState({ activeStep: 0 });
  };

  setProjectName = () => {
    this.props.setProjectName(event.target.value);
  };

  setProjectKey = () => {
    this.props.setProjectKey(event.target.value);
  };

  setProjectDesc = () => {
    this.props.setProjectDesc(event.target.value);
  };

  handleCategoryClick = (categoryId, selectedCategoryIndex) => {
    return () => {
      this.props.setSelectedCategory(categoryId);
      this.setState({ categoryIndex: selectedCategoryIndex });
    };
  };

  handleSelectedTemplate = (templateId, selectedTemplateIndex) => {
    return () => {
      this.props.setSelectedTemplate(templateId);
      this.setState({ templateIndex: selectedTemplateIndex });
    };
  };

  handleSelectedType = (typeId, selectedTypeIndex) => {
    return () => {
      this.props.setSelectedType(typeId);
      this.setState({ typeIndex: selectedTypeIndex });
    };
  };

  render() {
    const { addProjectData, projectHome } = this.props;
    return (
      <Grid container spacing={3}>
        <Grid item md={12} xs={12}>
          <PaperSheet
            Children={() =>
              form(
                addProjectData,
                this.setProjectName,
                this.setProjectKey,
                this.setProjectDesc,
                projectHome,
                this.handleCategoryClick,
                this.incrementActiveStep,
                this.decrementActiveStep,
                this.state.activeStep,
                this.handleSelectedTemplate,
                this.handleSelectedType,
                this.state.categoryIndex,
                this.state.templateIndex,
                this.state.typeIndex
              )
            }
          />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  addProjectData: state.get('addProject'),
  projectHome: state.get('projectHome'),
});

const mapDispatchToProps = (dispatch) => ({
  setProjectName: (projectName) => {
    dispatch(setProjectName(projectName));
  },

  setProjectKey: (projectKey) => {
    dispatch(setProjectKey(projectKey));
  },

  setProjectDesc: (projectDesc) => {
    dispatch(setProjectDesc(projectDesc));
  },

  setSelectedCategory: (categoryId) => {
    dispatch(setSelectedCategory(categoryId));
  },

  setSelectedTemplate: (templateId) => {
    dispatch(setSelectedTemplate(templateId));
  },

  setSelectedType: (typeId) => {
    dispatch(setSelectedType(typeId));
  },

  createProject: (projectName, projectKey, projectDesc, selectedCategory, selectedTemplate, selectedType) => {
    dispatch(createProject(projectName, projectKey, projectDesc, selectedCategory, selectedTemplate, selectedType));
  },
});

const AddProjectMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProject);

export default AddProjectMapped;

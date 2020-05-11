/**
 * @class CreateIssues
 * 
 * @description
 *    Create Issues Screen
 * 
 * @author
 *  Nikhil Aggarwal, VectoScalar
 * 
 */

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Drawer from "@material-ui/core/Drawer";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

import { Wysiwyg } from "../../containers/Forms/demos/Wysiwyg";
import {
  setAssigneeText,
  setComponentsText,
  setDescriptionText,
  setEpicText,
  setFixVersionsText,
  setIssueTypeText,
  setLabelsText,
  setOriginalEstimateText,
  setPriorityText,
  setProjectText,
  setReporterText,
  setSprintText,
  setStoryPointsText,
  setSummaryText,
} from "../../karya-actions/issues/create-issue-actions";
import { constants } from "../../utils/constants";
import styles from "dan-styles/CreateIssue.scss";

export class CreateIssues extends React.Component {
  state = {
    age: "",
    bottom: false,
    left: false,
    name: "hai",
    right: false,
    top: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  setSummaryField = (e) => {
    this.props.setSummaryText(e.target.value);
  };

  setOriginalEstimateField = (e) => {
    this.props.setOriginalEstimateText(e.target.value);
  };

  setStoryPointsField = (e) => {
    this.props.setStoryPointsText(e.target.value);
  };

  setLabelsField = (e) => {
    this.props.setLabelsText(e.target.value);
  };

  setEpicField = (e) => {
    this.props.setEpicText(e.target.value);
  };

  setSprintField = (e) => {
    this.props.setSprintText(e.target.value);
  };

  setPriorityField = (e) => {
    this.props.setPriorityText(e.target.value);
  };

  setFixVersionsField = (e) => {
    this.props.setFixVersionsText(e.target.value);
  };

  setComponentsField = (e) => {
    this.props.setComponentsText(e.target.value);
  };

  setAssigneeField = (e) => {
    this.props.setAssigneeText(e.target.value);
  };

  setReporterField = (e) => {
    this.props.setReporterText(e.target.value);
  };

  setIssueTypeField = (e) => {
    this.props.setIssueTypeText(e.target.value);
  };

  setProjectField = (e) => {
    this.props.setProjectText(e.target.value);
  };

  setDescriptionField = (e) => {
    this.props.setDescriptionText(e.target.value);
  };

  render() {
    const { createIssues } = this.props;
    const { right } = this.state;
    return (
      <div>
        <Grid container justify="center" direction="row">
          <Button
            variant="outlined"
            color="secondary"
            onClick={this.toggleDrawer("right", true)}
          >
            {constants.OPEN_RIGHT}
          </Button>
          <Drawer
            anchor="right"
            open={right}
            onClose={this.toggleDrawer("right", false)}
          >
            <div tabIndex={0} role="button" className={styles.drawerDiv}>
              <Grid container>
                <Grid
                  item
                  sm={12}
                  xs={12}
                  className={styles.gridLinearGradient}
                >
                  <Card
                    className={styles.cardLinearGradient}
                  >
                    <CardContent className={styles.cardContent}>
                      <Grid
                        container
                        spacing={3}
                        className={styles.gridBoxShadow}
                      >
                        <Grid
                          item
                          sm={6}
                          xs={12}
                          className={styles.gridBorderBottom}
                        >
                          <h2 className={styles.h2}>
                            <Icon>create</Icon> Create Task
                          </h2>
                        </Grid>
                        <Grid
                          item
                          sm={6}
                          xs={12}
                          className={styles.gridBorderBottom}
                        >
                          <Button
                            variant="contained"
                            color="warning"
                            className={styles.button}
                            onClick={this.toggleDrawer("left", false)}
                          >
                            {constants.CANCEL}
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            className={styles.buttonFloat}
                          >
                            {constants.CREATE}
                          </Button>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <FormControl className={styles.width100}>
                            <InputLabel htmlFor="age-simple">
                              {constants.PROJECT}
                            </InputLabel>
                            <Select
                              inputProps={{
                                name: "age",
                                id: "age-simple",
                              }}
                              value={createIssues.project}
                              onChange={this.setProjectField}
                            >
                              <MenuItem value="">
                                <em>{constants.NONE}</em>
                              </MenuItem>
                              <MenuItem value={10}>
                                <img
                                  src={require("../images/img-software.png")}
                                  className={styles.imgSize}
                                />
                                {/* TODO: To be removed after API integration */}
                                Wonolo
                              </MenuItem>
                              <MenuItem value={20}>Synergy</MenuItem>
                              <MenuItem value={30}>ESS</MenuItem>
                              <MenuItem value={30}>Vantaa</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <FormControl className={styles.width100}>
                            <InputLabel htmlFor="age-simple">
                              {constants.ISSUE_TYPE}
                            </InputLabel>
                            <Select
                              inputProps={{
                                name: "age",
                                id: "age-simple",
                              }}
                              value={createIssues.issueType}
                              onChange={this.setIssueTypeField}
                            >
                              <MenuItem value="">
                                <em>{constants.NONE}</em>
                              </MenuItem>
                              <MenuItem value={10}>
                                <Icon
                                 className={styles.icon}
                                >
                                  {/* TODO: To be removed after API integration */}
                                  bug_report
                                </Icon>
                                <em>{constants.BUG}</em>
                              </MenuItem>
                              <MenuItem value={20}>Task</MenuItem>
                              <MenuItem value={30}>Story</MenuItem>
                              <MenuItem value={30}>Epic</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={12} xs={12}>
                          <TextField
                            id="outlined-basic"
                            label="Summary"
                            variant="outlined"
                            className={styles.width100}
                            value={createIssues.summary}
                            onChange={this.setSummaryField}
                          />
                        </Grid>
                        <Grid
                          item
                          sm={12}
                          xs={12}
                          className={styles.gridBorder}
                        >
                          <Wysiwyg
                            value={"jlkjkl"}
                            onChange={this.setDescriptionField}
                          />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <FormControl className={styles.width100}>
                            <InputLabel htmlFor="age-simple">
                              {constants.REPORTER}
                            </InputLabel>
                            <Select
                              inputProps={{
                                name: "age",
                                id: "age-simple",
                              }}
                              value={createIssues.reporter}
                              onChange={this.setReporterField}
                            >
                              <MenuItem value="">
                                <em>{constants.NONE}</em>
                              </MenuItem>
                              <MenuItem value={10}>
                                <img
                                  src={require("../images/nikhilsir.png")}
                                  className={styles.menuImgSize}
                                />
                                {/* TODO: To be removed after API integration */}
                                Nikhil Agarwal
                              </MenuItem>
                              <MenuItem value={20}>Ashish Mangla</MenuItem>
                              <MenuItem value={30}>Kosal</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <FormControl className={styles.width100}>
                            <InputLabel htmlFor="age-simple">
                              {constants.ASSIGNEE}
                            </InputLabel>
                            <Select
                              inputProps={{
                                name: "age",
                                id: "age-simple",
                              }}
                              value={createIssues.assignee}
                              onChange={this.setAssigneeField}
                            >
                              <MenuItem value="">
                                <em> {constants.NONE}</em>
                              </MenuItem>

                              {/* TODO: To be removed after API integration */}
                              <MenuItem value={10}>Nikhil Agarwal</MenuItem>
                              <MenuItem value={20}>Ashish Mangla</MenuItem>
                              <MenuItem value={30}>Kosal</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <FormControl className={styles.width100}>
                            <InputLabel htmlFor="age-simple">
                              {constants.COMPONENTS}
                            </InputLabel>
                            <Select
                              inputProps={{
                                name: "age",
                                id: "age-simple",
                              }}
                              value={createIssues.components}
                              onChange={this.setComponentsField}
                            >
                              <MenuItem value="">
                                <em> {constants.NONE}</em>
                              </MenuItem>

                              {/* TODO: To be removed after API integration */}
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <FormControl className={styles.width100}>
                            <InputLabel htmlFor="age-simple">
                              {constants.FIX_VERSIONS}
                            </InputLabel>
                            <Select
                              inputProps={{
                                name: "age",
                                id: "age-simple",
                              }}
                              value={createIssues.fixVersions}
                              onChange={this.setFixVersionsField}
                            >
                              <MenuItem value="">
                                <em> {constants.NONE}</em>
                              </MenuItem>

                              {/* TODO: To be removed after API integration */}
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <FormControl className={styles.width100}>
                            <InputLabel htmlFor="age-simple">
                              {constants.PRIORITY}
                            </InputLabel>
                            <Select
                              inputProps={{
                                name: "age",
                                id: "age-simple",
                              }}
                              value={createIssues.priority}
                              onChange={this.setPriorityField}
                            >
                              <MenuItem value="">
                                <em>{constants.NONE}</em>
                              </MenuItem>

                              {/* TODO: To be removed after API integration */}
                              <MenuItem value={10}>High</MenuItem>
                              <MenuItem value={20}>Medium</MenuItem>
                              <MenuItem value={30}>Low</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <FormControl className={styles.width100}>
                            <InputLabel htmlFor="age-simple">
                              {constants.SPRINT}
                            </InputLabel>
                            <Select
                              inputProps={{
                                name: "age",
                                id: "age-simple",
                              }}
                              value={createIssues.sprint}
                              onChange={this.setSprintField}
                            >
                              <MenuItem value="">
                                <em>{constants.NONE}</em>
                              </MenuItem>

                              {/* TODO: To be removed after API integration */}
                              <MenuItem value={10}>Active Sprint</MenuItem>
                              <MenuItem value={20}>Sprint 10</MenuItem>
                              <MenuItem value={30}>Sprint 9</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <FormControl className={styles.width100}>
                            <InputLabel htmlFor="age-simple">
                              {constants.EPIC}
                            </InputLabel>
                            <Select
                              inputProps={{
                                name: "age",
                                id: "age-simple",
                              }}
                              value={createIssues.epic}
                              onChange={this.setEpicField}
                            >
                              <MenuItem value="">
                                <em>{constants.SPRINT}</em>
                              </MenuItem>

                              {/* TODO: To be removed after API integration */}
                              <MenuItem value={10}>Epic 1</MenuItem>
                              <MenuItem value={20}>Epic 2</MenuItem>
                              <MenuItem value={30}>Epic 3</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <FormControl className={styles.width100}>
                            <InputLabel htmlFor="age-simple">
                              {constants.LABELS}
                            </InputLabel>
                            <Select
                              inputProps={{
                                name: "age",
                                id: "age-simple",
                              }}
                              value={createIssues.labels}
                              onChange={this.setLabelsField}
                            >
                              <MenuItem value="">
                                <em>{constants.NONE}</em>
                              </MenuItem>

                              {/* TODO: To be removed after API integration */}
                              <MenuItem value={10}>Label 1</MenuItem>
                              <MenuItem value={20}>Label 2</MenuItem>
                              <MenuItem value={30}>Label 3</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            id="outlined-basic"
                            label="Original Estimate"
                            variant="outlined"
                            className={styles.width100}
                            value={createIssues.originalEstimate}
                            onChange={this.setOriginalEstimateField}
                          />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            id="outlined-basic"
                            label="Story Points"
                            variant="outlined"
                            className={styles.width100}
                            value={createIssues.storyPoints}
                            onChange={this.setStoryPointsField}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Drawer>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  createIssues: state.get("createIssues"),
});

const mapDispatchToProps = (dispatch) => ({
  setSummaryText: (summary) => dispatch(setSummaryText({ summary })),

  setOriginalEstimateText: (originalEstimate) =>
    dispatch(setOriginalEstimateText({ originalEstimate })),

  setStoryPointsText: (storyPoints) =>
    dispatch(setStoryPointsText({ storyPoints })),

  setLabelsText: (labels) => dispatch(setLabelsText({ labels })),

  setEpicText: (epic) => dispatch(setEpicText({ epic })),

  setSprintText: (sprint) => dispatch(setSprintText({ sprint })),

  setPriorityText: (priority) => dispatch(setPriorityText({ priority })),

  setFixVersionsText: (fixVersions) =>
    dispatch(setFixVersionsText({ fixVersions })),

  setComponentsText: (components) =>
    dispatch(setComponentsText({ components })),

  setAssigneeText: (assignee) => dispatch(setAssigneeText({ assignee })),

  setReporterText: (reporter) => dispatch(setReporterText({ reporter })),

  setProjectText: (project) => dispatch(setProjectText({ project })),

  setIssueTypeText: (issueType) => dispatch(setIssueTypeText({ issueType })),

  setDescriptionText: (description) =>
    dispatch(setDescriptionText({ description })),
});

const CreateTaskMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateIssues);

export default CreateTaskMapped;

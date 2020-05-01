import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { connect } from "react-redux";

import styles from "dan-styles/AddProject.scss";
import { Wysiwyg } from '../../containers/Forms/demos/Wysiwyg';
import { setSummaryText, setOriginalEstimateText, setStoryPointsText, setLabelsText, setEpicText, setSprintText, setPriorityText, setFixVersionsText, setComponentsText, setAssigneeText, setReporterText, setProjectText, setIssueTypeText, setDescriptionText } from "../../actions/createTaskActions";

export class CreateTask extends React.Component {
    state = {
        age: '',
        name: 'hai',
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    setSummaryField = (e) => {
        // console.log("event", e.target.value)
        this.props.setSummaryText(e.target.value);
    }

    setOriginalEstimateField = (e) => {
        this.props.setOriginalEstimateText(e.target.value);
    }

    setStoryPointsField = (e) => {
        this.props.setStoryPointsText(e.target.value);
    }

    setLabelsField = (e) => {
        this.props.setLabelsText(e.target.value);
    }

    setEpicField = (e) => {
        this.props.setEpicText(e.target.value);
    }

    setSprintField = (e) => {
        this.props.setSprintText(e.target.value);
    }
   
    setPriorityField = (e) => {
        this.props.setPriorityText(e.target.value);
    }

    setFixVersionsField = (e) => {
        this.props.setFixVersionsText(e.target.value);
    }
  
    setComponentsField = (e) => {
        this.props.setComponentsText(e.target.value);
    }

    setAssigneeField = (e) => {
        this.props.setAssigneeText(e.target.value);
    }

    setReporterField = (e) => {
        this.props.setReporterText(e.target.value);
    }

    setIssueTypeField = (e) => {
        this.props.setIssueTypeText(e.target.value);
    }

    setProjectField = (e) => {
        this.props.setProjectText(e.target.value);
    }
    
    setDescriptionField = (e) => {
        this.props.setDescriptionText(e.target.value);
    }

    render() {
        const { classes, createTask } = this.props;
        console.log("Craete Task", createTask)
        const { right } = this.state;
        return (
            <div>
                <Grid container justify="center" direction="row">
                    <Button variant="outlined" color="secondary" onClick={this.toggleDrawer('right', true)}>Open Right</Button>
                    <Drawer anchor="right" open={right} onClose={this.toggleDrawer('right', false)}>
                        <div
                            tabIndex={0}
                            role="button"
                            style={{ width: "50vw" }}
                        >
                            <Grid container>
                                <Grid item sm={12} xs={12} style={{ backgroundImage: "linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)" }}>
                                    <Card style={{ padding: "2%", backgroundImage: "linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)" }}>
                                        <CardContent style={{ backgroundColor: "white" }}>
                                            <Grid container spacing={3} style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                                                <Grid item sm={6} xs={12} style={{ borderBottom: "1px solid #d5dad8" }}>
                                                    <h2 style={{ fontWeight: "normal" }}>  <Icon>create</Icon> Create Task </h2>
                                                </Grid>
                                                <Grid item sm={6} xs={12} style={{ borderBottom: "1px solid #d5dad8" }}>
                                                    <Button variant="contained" color="warning" style={{ float: "right", marginLeft:"2%" }} onClick={this.toggleDrawer('left', false)}>
                                                        Cancel
                                                    </Button><Button variant="contained" color="primary" style={{ float: "right" }}>
                                                        Create
                                                    </Button>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <FormControl style={{ width: "100%" }}>
                                                        <InputLabel htmlFor="age-simple">Project</InputLabel>
                                                        <Select
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'age-simple',
                                                            }}
                                                            value={createTask.project} onChange={this.setProjectField}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}><img src={require('../img-software.png')} style={{ width: "20px", height: "20px", marginRight: "2%" }} />Wonolo</MenuItem>
                                                            <MenuItem value={20}>Synergy</MenuItem>
                                                            <MenuItem value={30}>ESS</MenuItem>
                                                            <MenuItem value={30}>Vantaa</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <FormControl style={{ width: "100%" }}>
                                                        <InputLabel htmlFor="age-simple">Issue Type</InputLabel>
                                                        <Select
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'age-simple',
                                                            }}
                                                            value={createTask.issueType} onChange={this.setIssueTypeField}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}><Icon style={{ color: "red", width: "20px", height: "20px", marginRight: "2%" }}>bug_report</Icon>Bug</MenuItem>
                                                            <MenuItem value={20}>Task</MenuItem>
                                                            <MenuItem value={30}>Story</MenuItem>
                                                            <MenuItem value={30}>Epic</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item sm={12} xs={12}>
                                                    <TextField id="outlined-basic" label="Summary" variant="outlined" className={styles.fullWidth} value={createTask.summary} onChange={this.setSummaryField}/>
                                                </Grid>
                                                <Grid item sm={12} xs={12} style={{ border: "1px solid black" }}>
                                                    <Wysiwyg value={"jlkjkl"} onChange={this.setDescriptionField}></Wysiwyg>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <FormControl style={{ width: "100%" }}>
                                                        <InputLabel htmlFor="age-simple">Reporter</InputLabel>
                                                        <Select
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'age-simple',
                                                            }}
                                                            value={createTask.reporter} onChange={this.setReporterField}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}><img src={require('../nikhilsir.png')} style={{ width: "20px", height: "20px", marginRight: "2%", borderRadius: "50%" }} />Nikhil Agarwal</MenuItem>
                                                            <MenuItem value={20}>Ashish Mangla</MenuItem>
                                                            <MenuItem value={30}>Kosal</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <FormControl style={{ width: "100%" }}>
                                                        <InputLabel htmlFor="age-simple">Assignee</InputLabel>
                                                        <Select
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'age-simple',
                                                            }}
                                                            value={createTask.assignee} onChange={this.setAssigneeField}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Nikhil Agarwal</MenuItem>
                                                            <MenuItem value={20}>Ashish Mangla</MenuItem>
                                                            <MenuItem value={30}>Kosal</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <FormControl style={{ width: "100%" }}>
                                                        <InputLabel htmlFor="age-simple">Components</InputLabel>
                                                        <Select
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'age-simple',
                                                            }}
                                                            value={createTask.components} onChange={this.setComponentsField}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <FormControl style={{ width: "100%" }}>
                                                        <InputLabel htmlFor="age-simple">Fix versions</InputLabel>
                                                        <Select
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'age-simple',
                                                            }}
                                                            value={createTask.fixVersions} onChange={this.setFixVersionsField}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <FormControl style={{ width: "100%" }}>
                                                        <InputLabel htmlFor="age-simple">Priority</InputLabel>
                                                        <Select
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'age-simple',
                                                            }}
                                                            value={createTask.priority} onChange={this.setPriorityField}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>High</MenuItem>
                                                            <MenuItem value={20}>Medium</MenuItem>
                                                            <MenuItem value={30}>Low</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <FormControl style={{ width: "100%" }}>
                                                        <InputLabel htmlFor="age-simple">Sprint</InputLabel>
                                                        <Select
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'age-simple',
                                                            }}
                                                            value={createTask.sprint} onChange={this.setSprintField}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Active Sprint</MenuItem>
                                                            <MenuItem value={20}>Sprint 10</MenuItem>
                                                            <MenuItem value={30}>Sprint 9</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <FormControl style={{ width: "100%" }}>
                                                        <InputLabel htmlFor="age-simple">Epic</InputLabel>
                                                        <Select
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'age-simple',
                                                            }}
                                                            value={createTask.epic} onChange={this.setEpicField}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Epic 1</MenuItem>
                                                            <MenuItem value={20}>Epic 2</MenuItem>
                                                            <MenuItem value={30}>Epic 3</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <FormControl style={{ width: "100%" }}>
                                                        <InputLabel htmlFor="age-simple">Labels</InputLabel>
                                                        <Select
                                                            inputProps={{
                                                                name: 'age',
                                                                id: 'age-simple',
                                                            }}
                                                            value={createTask.labels} onChange={this.setLabelsField}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Label 1</MenuItem>
                                                            <MenuItem value={20}>Label 2</MenuItem>
                                                            <MenuItem value={30}>Label 3</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField id="outlined-basic" label="Original Estimate" variant="outlined" className={styles.fullWidth} value={createTask.originalEstimate} onChange={this.setOriginalEstimateField} />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField id="outlined-basic" label="Story Points" variant="outlined" className={styles.fullWidth} value={createTask.storyPoints} onChange={this.setStoryPointsField} />
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
    createTask: state.get("createTasks")
  });
  
  const mapDispatchToProps = (dispatch) => ({
    setSummaryText: (summary) => dispatch(setSummaryText({ summary })),
    setOriginalEstimateText: (originalEstimate) => dispatch(setOriginalEstimateText({ originalEstimate })),
    setStoryPointsText: (storyPoints) => dispatch(setStoryPointsText({ storyPoints })),
    setLabelsText: (labels) => dispatch(setLabelsText({ labels })),
    setEpicText: (epic) => dispatch(setEpicText({ epic })),
    setSprintText: (sprint) => dispatch(setSprintText({ sprint })),
    setPriorityText: (priority) => dispatch(setPriorityText({ priority })),
    setFixVersionsText: (fixVersions) => dispatch(setFixVersionsText({ fixVersions })),
    setComponentsText: (components) => dispatch(setComponentsText({ components })),
    setAssigneeText: (assignee) => dispatch(setAssigneeText({ assignee })),
    setReporterText: (reporter) => dispatch(setReporterText({ reporter })),
    setProjectText: (project) => dispatch(setProjectText({ project })),
    setIssueTypeText: (issueType) => dispatch(setIssueTypeText({ issueType })),
    setDescriptionText: (description) => dispatch(setDescriptionText({ description })),
  });
  
  const CreateTaskMapped = connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateTask);
  
  export default CreateTaskMapped;
  
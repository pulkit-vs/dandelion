export const types = {
    SET_SUMMARY_TASK: "SET_SUMMARY_TASK",
    SET_ORIGINAL_ESTIMATE_TASK: "SET_ORIGINAL_ESTIMATE_TASK",
    SET_STORY_POINTS_TASK: "SET_STORY_POINTS_TASK",
    SET_LABELS_TASK: "SET_LABELS_TASK",
    SET_EPIC_TASK: "SET_EPIC_TASK",
    SET_SPRINT_TASK: "SET_SPRINT_TASK",
    SET_PRIORITY_TASK: "SET_PRIORITY_TASK",
    SET_FIX_VERSIONS_TASK: "SET_FIX_VERSIONS_TASK",
    SET_COMPONENTS_TASK: "SET_COMPONENTS_TASK",
    SET_ASSIGNEE_TASK: "SET_ASSIGNEE_TASK",
    SET_REPORTER_TASK: "SET_REPORTER_TASK",
    SET_PROJECT_TASK: "SET_PROJECT_TASK",
    SET_ISSUE_TYPE_TASK: "SET_ISSUE_TYPE_TASK",
    SET_DESCRIPTION_TASK: "SET_DESCRIPTION_TASK",
};

export const setSummaryText = (summary = '') => ({
    type: types.SET_SUMMARY_TASK,
    summary: summary
});

export const setOriginalEstimateText = (originalEstimate = '') => ({
    type: types.SET_ORIGINAL_ESTIMATE_TASK,
    originalEstimate: originalEstimate
});

export const setStoryPointsText = (storyPoints = '') => ({
    type: types.SET_STORY_POINTS_TASK,
    storyPoints: storyPoints
});

export const setLabelsText = (labels = '') => ({
    type: types.SET_LABELS_TASK,
    labels: labels
});

export const setEpicText = (epic = '') => ({
    type: types.SET_EPIC_TASK,
    epic: epic
});

export const setSprintText = (sprint = '') => ({
    type: types.SET_SPRINT_TASK,
    sprint: sprint
});

export const setPriorityText = (priority = '') => ({
    type: types.SET_PRIORITY_TASK,
    priority: priority
});

export const setFixVersionsText = (fixVersions = '') => ({
    type: types.SET_FIX_VERSIONS_TASK,
    fixVersions: fixVersions
});
////
export const setComponentsText = (components = '') => ({
    type: types.SET_COMPONENTS_TASK,
    components: components
});

export const setAssigneeText = (assignee = '') => ({
    type: types.SET_ASSIGNEE_TASK,
    assignee: assignee
});

export const setReporterText = (reporter = '') => ({
    type: types.SET_REPORTER_TASK,
    reporter: reporter
});

export const setProjectText = (project = '') => ({
    type: types.SET_PROJECT_TASK,
    project: project
});

export const setIssueTypeText = (issueType = '') => ({
    type: types.SET_ISSUE_TYPE_TASK,
    issueType: issueType
});

export const setDescriptionText = (description = '') => ({
    type: types.SET_DESCRIPTION_TASK,
    description: description
});

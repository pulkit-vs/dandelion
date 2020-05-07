import { types } from "../../../karya-actions/issues/create-issue-actions";

const initialState = {
  assignee: "",
  components: "",
  description: "",
  epic: "",
  fixVersions: "",
  issueType: "",
  labels: "",
  originalEstimate: "",
  priority: "",
  project: "",
  reporter: "",
  sprint: "",
  storyPoints: "",
  summary: "",
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_SUMMARY_TASK: {
      const summary = action.summary.summary;
      return {
        ...state,
        summary: summary,
      };
    }

    case types.SET_ORIGINAL_ESTIMATE_TASK: {
      const originalEstimate = action.originalEstimate.originalEstimate;
      return {
        ...state,
        originalEstimate: originalEstimate,
      };
    }

    case types.SET_STORY_POINTS_TASK: {
      const storyPoints = action.storyPoints.storyPoints;
      return {
        ...state,
        storyPoints: storyPoints,
      };
    }

    case types.SET_LABELS_TASK: {
      const labels = action.labels.labels;
      return {
        ...state,
        labels: labels,
      };
    }

    case types.SET_EPIC_TASK: {
      const epic = action.epic.epic;
      return {
        ...state,
        epic: epic,
      };
    }

    case types.SET_SPRINT_TASK: {
      const sprint = action.sprint.sprint;
      return {
        ...state,
        sprint: sprint,
      };
    }

    case types.SET_PRIORITY_TASK: {
      const priority = action.priority.priority;
      return {
        ...state,
        priority: priority,
      };
    }

    case types.SET_FIX_VERSIONS_TASK: {
      const fixVersions = action.fixVersions.fixVersions;
      return {
        ...state,
        fixVersions: fixVersions,
      };
    }

    case types.SET_COMPONENTS_TASK: {
      const components = action.components.components;
      return {
        ...state,
        components: components,
      };
    }

    case types.SET_ASSIGNEE_TASK: {
      const assignee = action.assignee.assignee;
      return {
        ...state,
        assignee: assignee,
      };
    }

    case types.SET_REPORTER_TASK: {
      const reporter = action.reporter.reporter;
      return {
        ...state,
        reporter: reporter,
      };
    }

    case types.SET_PROJECT_TASK: {
      const project = action.project.project;
      return {
        ...state,
        project: project,
      };
    }

    case types.SET_ISSUE_TYPE_TASK: {
      const issueType = action.issueType.issueType;
      return {
        ...state,
        issueType: issueType,
      };
    }

    case types.SET_DESCRIPTION_TASK: {
      const description = action.description.description;
      return {
        ...state,
        description: description,
      };
    }

    default:
      return state;
  }
}

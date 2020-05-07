import { get } from "lodash";
import { types } from "../../../karya-actions/projects/project-home-actions";

const initialState = {
  projectData: [],
  projectIcon: "",
  projectId: "",
  projectName: "",
  starredProjects: [],
  projectsListMap: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_STARRED_TASK: {
      let updatedTask = [];
      const rowData = get(action, ["payload", "starredTask"], {});
      const RowAlreadyExists = state.starredProjects.find(
        ({ id }) => id === rowData.id
      );
      if (RowAlreadyExists) {
        updatedTask = state.starredProjects.filter(
          ({ id }) => id !== RowAlreadyExists.id
        );
      } else {
        updatedTask = [...state.starredProjects, rowData];
      }
      return { ...state, starredProjects: updatedTask };
    }

    case types.SET_STARRED_TICKET_STATUS: {
      const status = get(action, ["payload", "status"], false);
      const projectId = get(action, ["payload", "projectId"], "");
      const index = state.projectData.findIndex(({ id }) => id === projectId);
      state.projectData[index].starred = status;
      return {
        ...state,
      };
    }

    case types.INIT: {
      const projectList = get(action, ["payload", "projectList"], false);
      const starredProjects = projectList.filter(
        (item) => item.starred === true
      );
      const projectsMap = projectList.map((project) => {
        return {
          projectId: project.id,
          projectName: project.data.projectName,
          imgSrc: project.projectIcon,
        };
      });
      return {
        ...state,
        projectData: projectList,
        starredProjects: starredProjects,
        projectsListMap: projectsMap,
      };
    }

    case types.SET_ALL_STARRED_TASK: {
      const status = get(action, ["payload", "status"], false);
      let updatedTask = [];
      if (status) {
        updatedTask = state.projectData;
      }
      return {
        ...state,
        starredProjects: updatedTask,
      };
    }

    case types.SET_ALL_STARRED_TICKET_STATUS: {
      const status = get(action, ["payload", "status"], false);
      state.projectData.map((data) => {
        data.starred = status;
      });
      return {
        ...state,
      };
    }

    case types.SET_PROJECT_ID: {
      const id = get(action, ["payload", "projectId"], "");
      return {
        ...state,
        projectId: id,
      };
    }

    case types.SET_PROJECT_NAME: {
      const projectName = get(action, ["payload", "projectName"], "");
      return {
        ...state,
        projectName: projectName,
      };
    }

    case types.SET_PROJECT_ICON: {
      const projectIcon = get(action, ["payload", "projectIcon"], "");
      return {
        ...state,
        projectIcon: projectIcon,
      };
    }

    default:
      return state;
  }
}

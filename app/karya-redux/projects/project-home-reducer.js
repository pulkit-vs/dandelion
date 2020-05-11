import { get } from "lodash";
import { types } from "../../karya-actions/projects/project-home-actions";

const initialState = {
  employeeData: [],
  projectCategories: [],
  projectData: [],
  projectIcon: "",
  projectId: "",
  projectName: "",
  projectTable: [],
  projectTemplates: [],
  projectTypes: [],
  projectsListMap: [],
  starredProjects: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_STARRED_TASK: {
      let updatedTask = [];
      const rowData = get(action, ["payload", "starredTask"], {});
      const RowAlreadyExists = state.starredProjects.find(
        ({ projectId }) => projectId === rowData.projectId
      );
      if (RowAlreadyExists) {
        updatedTask = state.starredProjects.filter(
          ({ projectId }) => projectId !== RowAlreadyExists.projectId
        );
      } else {
        updatedTask = [...state.starredProjects, rowData];
      }
      return { ...state, starredProjects: updatedTask };
    }

    case types.SET_STARRED_TICKET_STATUS: {
      const status = get(action, ["payload", "status"], false);
      const id = get(action, ["payload", "projectId"], "");
      const index = state.projectTable.findIndex(
        ({ projectId }) => projectId === id
      );
      state.projectTable[index].starred = status;
      return {
        ...state,
      };
    }

    case types.INIT: {
      const projectList = get(action, ["projectList", "db_response"], []);
      console.log("db_response", projectList);

      const projectTable = projectList.map((project) => {
        return {
          starred: project.STARRED,
          projectId: project.ID,
          projectIcon: project.ICON,
          data: {
            projectName: project.NAME,
            projectKey: project.PROJECT_KEY,
            projectLead: project.PROJECT_LEAD,
            projectType: project.PROJECT_TYPE,
            projectCategory: project.PROJECT_CATEGORY,
          },
        };
      });

      const starredProjects = projectTable.filter(
        (item) => item.starred === true
      );

      const projectsMap = projectTable.map((project) => {
        return {
          projectId: project.projectId,
          projectName: project.data.projectName,
          imgSrc: project.projectIcon,
        };
      });
      return {
        ...state,
        projectData: projectList,
        starredProjects: starredProjects,
        projectsListMap: projectsMap,
        projectTable: projectTable,
      };
    }

    case types.SET_ALL_STARRED_TASK: {
      const status = get(action, ["payload", "status"], false);
      let updatedTask = [];
      if (status) {
        updatedTask = state.projectTable;
      }
      return {
        ...state,
        starredProjects: updatedTask,
      };
    }

    case types.SET_ALL_STARRED_TICKET_STATUS: {
      const status = get(action, ["payload", "status"], false);
      state.projectTable.map((data) => {
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

    case types.SET_CONFIG_INFO: {
      const config = get(action, ["config", "config"], {});
      const employeeData = get(action, ["config", "employee_map"], {});
      console.log("employeeData", employeeData);

      console.log("configconfig", config);
      const projectCategories = get(config, "PROJECT_CATEGORY", []);
      console.log("projectCategories", projectCategories);
      const projectTemplates = get(config, "PROJECT_TEMPLATE", []);
      console.log("projectTemplates", projectTemplates);

      const projectTypes = get(config, "PROJECT_TYPE", []);
      console.log("projectTypes", projectTypes);

      return {
        ...state,
        projectCategories: projectCategories,
        projectTemplates: projectTemplates,
        projectTypes: projectTypes,
        employeeData: employeeData,
      };
    }

    default:
      return state;
  }
}

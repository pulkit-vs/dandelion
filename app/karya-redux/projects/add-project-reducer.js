import { get } from "lodash";
import { types } from "../../karya-actions/projects/add-project-actions";

const initialState = {
  projectDesc: "",
  projectKey: "",
  projectName: "",
  selectedCategory: "",
  selectedTemplate: "",
  selectedType: "",
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_PROJECT_SET_PROJECT_NAME: {
      const projectName = get(action, ["payload", "projectName"], "");
      return {
        ...state,
        projectName: projectName,
      };
    }

    case types.ADD_PROJECT_SET_PROJECT_KEY: {
      const projectKey = get(action, ["payload", "projectKey"], "");
      return {
        ...state,
        projectKey: projectKey,
      };
    }

    case types.ADD_PROJECT_SET_PROJECT_DESC: {
      const projectDesc = get(action, ["payload", "projectDesc"], "");
      return {
        ...state,
        projectDesc: projectDesc,
      };
    }

    case types.ADD_PROJECT_SET_SELECTED_CATEGORY: {
      const selectedCategory = get(action, ["payload", "selectedCategory"], "");
      return {
        ...state,
        selectedCategory: selectedCategory,
      };
    }

    case types.ADD_PROJECT_SET_SELECTED_TEMPLATE: {
      const selectedTemplate = get(action, ["payload", "templateId"], "");
      return {
        ...state,
        selectedTemplate: selectedTemplate,
      };
    }

    case types.ADD_PROJECT_SET_SELECTED_TYPE: {
      const selectedType = get(action, ["payload", "typeId"], "");
      return {
        ...state,
        selectedType: selectedType,
      };
    }

    default:
      return state;
  }
}

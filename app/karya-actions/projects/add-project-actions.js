export const types = {
  ADD_PROJECT_CREATE_PROJECT: "ADD_PROJECT_CREATE_PROJECT",
  ADD_PROJECT_SET_PROJECT_DESC: "ADD_PROJECT_SET_PROJECT_DESC",
  ADD_PROJECT_SET_PROJECT_KEY: "ADD_PROJECT_SET_PROJECT_KEY",
  ADD_PROJECT_SET_PROJECT_NAME: "ADD_PROJECT_SET_PROJECT_NAME",
  ADD_PROJECT_SET_SELECTED_CATEGORY: "ADD_PROJECT_SET_SELECTED_CATEGORY",
  ADD_PROJECT_SET_SELECTED_TEMPLATE: "ADD_PROJECT_SET_SELECTED_TEMPLATE",
  ADD_PROJECT_SET_SELECTED_TYPE: "ADD_PROJECT_SET_SELECTED_TYPE",
};

export const setProjectName = (projectName = "") => ({
  type: types.ADD_PROJECT_SET_PROJECT_NAME,
  payload: {
    projectName,
  },
});

export const setProjectKey = (projectKey = "") => ({
  type: types.ADD_PROJECT_SET_PROJECT_KEY,
  payload: {
    projectKey,
  },
});

export const setProjectDesc = (projectDesc = "") => ({
  type: types.ADD_PROJECT_SET_PROJECT_DESC,
  payload: {
    projectDesc,
  },
});

export const setSelectedCategory = (selectedCategory = "") => ({
  type: types.ADD_PROJECT_SET_SELECTED_CATEGORY,
  payload: {
    selectedCategory,
  },
});

export const setSelectedTemplate = (templateId = "") => ({
  type: types.ADD_PROJECT_SET_SELECTED_TEMPLATE,
  payload: {
    templateId,
  },
});

export const setSelectedType = (typeId = "") => ({
  type: types.ADD_PROJECT_SET_SELECTED_TYPE,
  payload: {
    typeId,
  },
});

export const createProject = (
  projectName = "",
  projectKey = "",
  projectDesc = "",
  selectedCategory = "",
  selectedTemplate = "",
  selectedType = ""
) => ({
  type: types.ADD_PROJECT_CREATE_PROJECT,
  projectName,
  projectKey,
  projectDesc,
  selectedCategory,
  selectedTemplate,
  selectedType,
});

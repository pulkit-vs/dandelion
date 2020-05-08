import { takeEvery, call } from "redux-saga/effects";
import DataService from "../../services/data-service";

import { types } from "../../karya-actions/projects/project-home-actions";

const dataService = new DataService();

function* getAllProjects() {
  //params will come from action dispatcher
  const queryParams = {
    projectId: 0,
    type: "list",
    employeeId: 1,
  };
  const projects = yield call(dataService.asyncGetWithParam, {
    type: "projects",
    queryParams: queryParams,
  });
  console.log("projects", projects);
}

function* getConfigInfo() {
  const config = yield call(dataService.asyncGetAll, {
    type: "config",
  });
  console.log("config", config);
}

//TODO: redux needs to be created for ADD PROJECT
function* addProject() {
  const body = {
    //object
  };
  const config = yield call(dataService.asyncExecuteApi, {
    type: "POST",
    body: body,
  });
  console.log("config", config);
}

const projectBoardSagas = [
  takeEvery(types.FETCH_ALL_PROJECTS, getAllProjects),
  takeEvery(types.GET_CONFIG_INFO, getConfigInfo),
  takeEvery(types.ADD_PROJECT, addProject),
];

export default projectBoardSagas;

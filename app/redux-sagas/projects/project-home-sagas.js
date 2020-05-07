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

function* getAllTickets() {
  console.log("saga getAllTickets");
  // yield put({ type: setAllprojects, projects: ["1", "2", "3"] });
}

const projectBoardSagas = [
  takeEvery(types.FETCH_ALL_PROJECTS, getAllProjects),
  takeEvery(types.GET_ALL_TICKETS, getAllTickets),
];

export default projectBoardSagas;

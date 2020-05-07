import { put, takeLatest, all, takeEvery, call } from "redux-saga/effects";
import DataService from "../../../app/services/data-service";

import { types } from "../../actions/projects/projectBoardActions";

const dataService = new DataService();

function* getAllProjects() {
  //params will come from action dispatcher
  const params = {
    projectId: 0,
    type: "list",
    employeeId: 1,
  };
  console.log("saga getAllProjects");
  const projects = yield call(
    dataService.asyncGetWithParam("projects", params)
  );
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

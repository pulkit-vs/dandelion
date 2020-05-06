import { put, takeLatest, all, takeEvery } from "redux-saga/effects";

import { types } from "../../actions/projects/projectBoardActions";
function* getAllProjects() {
  console.log("saga getAllProjects");
  //yield put({ type: setAllprojects, projects: ["1", "2", "3"] });
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
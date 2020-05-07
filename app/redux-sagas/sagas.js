import { all } from "redux-saga/effects";

import projectBoardSagas from "./projects/project-board";

const root = function* rootSaga() {
  yield all([...projectBoardSagas]);
};

export default root;

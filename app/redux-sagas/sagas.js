import { all } from "redux-saga/effects";
import projectBoardSagas from "./projects/project-board";

export default function* rootSaga() {
  yield all([...projectBoardSagas]);
}

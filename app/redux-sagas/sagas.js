import { all } from "redux-saga/effects";
import projectBoardSagas from "./projects/project-home-sagas";

export default function* rootSaga() {
  yield all([...projectBoardSagas]);
}

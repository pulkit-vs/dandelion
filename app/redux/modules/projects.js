import { fromJS } from "immutable";
import { get, clonedeep } from "lodash";
import { types } from "../../actions/projectActions";

const initialState = {
  rows: [],
  starredTask: [],
};

const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case types.UPDATE_TASKS: {
      return state.withMutations((mutableState) => {
        const rows = action.payload.rows.rows;
        mutableState.set("rows", rows);
      });
    }
    case types.SET_STARRED_TASK: {
      return state.withMutations((mutableState) => {
        const copyState = clonedeep(fromJS(state));
        const starredTask = get(copyState, "starredTask", []);
        const row = action.payload.starredTask.rows;
        mutableState.set("starredTask", starredTask.push(row));
      });
    }
    default:
      return state;
  }
}

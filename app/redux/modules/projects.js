import { Map, fromJS } from "immutable";
import { get } from "lodash";
import { types } from "../../actions/projectActions";

const initialState = {
  rows: [],
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
    default:
      return state;
  }
}

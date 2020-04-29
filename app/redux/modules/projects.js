import { types } from "../../actions/projectActions";
import { rows } from "../../utils/constants";

const initialState = {
  rows: [],
  starredTask: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_STARRED_TASK: {
      let updatedTask = [];
      const rowData = action.payload.starredTask.rows;
      const sameRow = state.starredTask.find(
        ({ ticketId }) => ticketId === rowData.ticketId
      );
      if (sameRow) {
        updatedTask = state.starredTask.filter(
          ({ ticketId }) => ticketId !== sameRow.ticketId
        );
      } else {
        updatedTask = [...state.starredTask, rowData];
      }
      return { ...state, starredTask: updatedTask };
    }

    case types.SET_STARRED_TICKET_STATUS: {
      const status = action.payload.status.status;
      const id = action.payload.status.ticketId;
      state.rows
        .filter((data) => data.ticketId === id)
        .map((item) => (item.starredTicket = status));
      return {
        ...state,
        rows: rows,
      };
    }

    case types.INIT: {
      const updatedTask = state.rows.filter(
        (item) => item.starredTicket === true
      );
      return {
        ...state,
        rows: action.rows.rows,
        starredTask: updatedTask,
      };
    }

    case types.SET_ALL_STARRED_TASK: {
      const status = action.status.status;
      let updatedTask = [];
      if (status) {
        updatedTask = state.rows;
      }
      return {
        ...state,
        starredTask: updatedTask,
      };
    }

    case types.SET_ALL_STARRED_TICKET_STATUS: {
      const status = action.status.status;
      state.rows.map((data) => {
        data.starredTicket = status;
      });
      return {
        ...state,
        rows: rows,
      };
    }

    default:
      return state;
  }
}

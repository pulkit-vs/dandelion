import { get } from "lodash";
import { types } from "../../../karya-actions/myWork/assigned-issues-actions";

const initialState = {
  assignedData: [],
  assignedStarredTasks: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.MY_WORK_SET_STARRED_TASK: {
      let updatedTask = [];
      const rowData = get(action, ["payload", "starredTask"], {});
      const RowAlreadyExists = state.assignedStarredTasks.find(
        ({ ticketId }) => ticketId === rowData.ticketId
      );
      if (RowAlreadyExists) {
        updatedTask = state.assignedStarredTasks.filter(
          ({ ticketId }) => ticketId !== RowAlreadyExists.ticketId
        );
      } else {
        updatedTask = [...state.assignedStarredTasks, rowData];
      }
      return { ...state, assignedStarredTasks: updatedTask };
    }

    case types.MY_WORK_SET_STARRED_TICKET_STATUS: {
      const status = get(action, ["payload", "status"], false);
      const id = get(action, ["payload", "ticketId"], "");
      const index = state.assignedData.findIndex(({ id }) => id === id);
      state.assignedData[index].starred = status;
      return {
        ...state,
      };
    }

    case types.MY_WORK_INIT: {
      const projectHomeTickets = get(
        action,
        ["payload", "projectHomeTickets"],
        false
      );
      const updatedTask = projectHomeTickets.filter(
        (item) => item.starredTicket === true
      );
      return {
        ...state,
        assignedData: projectHomeTickets,
        assignedStarredTasks: updatedTask,
      };
    }

    case types.MY_WORK_SET_ALL_STARRED_TASK: {
      const status = get(action, ["payload", "status"], false);
      let updatedTask = [];
      if (status) {
        updatedTask = state.assignedData;
      }
      return {
        ...state,
        assignedStarredTasks: updatedTask,
      };
    }

    case types.MY_WORK_SET_ALL_STARRED_TICKET_STATUS: {
      const status = get(action, ["payload", "status"], false);
      state.assignedData.map((data) => {
        data.starredTicket = status;
      });
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}

import { get } from "lodash";
import { types } from "../../../actions/projects/projectBoardActions";

const initialState = {
  projectData: [],
  projectStarredTasks: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_STARRED_TASK: {
      let updatedTask = [];
      const rowData = get(action, ["payload", "starredTask"], {});
      const RowAlreadyExists = state.projectStarredTasks.find(
        ({ ticketId }) => ticketId === rowData.ticketId
      );
      if (RowAlreadyExists) {
        updatedTask = state.projectStarredTasks.filter(
          ({ ticketId }) => ticketId !== RowAlreadyExists.ticketId
        );
      } else {
        updatedTask = [...state.projectStarredTasks, rowData];
      }
      return { ...state, projectStarredTasks: updatedTask };
    }

    case types.SET_STARRED_TICKET_STATUS: {
      const status = get(action, ["payload", "status"], false);
      const id = get(action, ["payload", "ticketId"], "");
      const index = state.projectData.findIndex(
        ({ ticketId }) => ticketId === id
      );
      state.projectData[index].starredTicket = status;
      return {
        ...state,
      };
    }

    case types.INIT: {
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
        projectData: projectHomeTickets,
        projectStarredTasks: updatedTask,
      };
    }

    case types.SET_ALL_STARRED_TASK: {
      const status = get(action, ["payload", "status"], false);
      let updatedTask = [];
      if (status) {
        updatedTask = state.projectData;
      }
      return {
        ...state,
        projectStarredTasks: updatedTask,
      };
    }

    case types.SET_ALL_STARRED_TICKET_STATUS: {
      const status = get(action, ["payload", "status"], false);
      state.projectData.map((data) => {
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

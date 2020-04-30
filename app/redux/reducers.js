/**
 * Combine all reducers in this file and export the combined reducers.
 */

import history from "utils/history";
import { combineReducers } from "redux-immutable";
import { connectRouter } from "connected-react-router/immutable";
import { reducer as form } from "redux-form/immutable";

import calendar from "./modules/calendar";
import chat from "./modules/chat";
import contact from "./modules/contact";
import crudTable from "./modules/crudTable";
import crudTableForm from "./modules/crudTableForm";
import ecommerce from "./modules/ecommerce";
import email from "./modules/email";
import initval from "./modules/initForm";
import languageProviderReducer from "containers/LanguageProvider/reducer";
import login from "./modules/login";
import projectBoard from "./modules/ProjectReducer/project-board";
import socmed from "./modules/socialMedia";
import taskboard from "./modules/taskboard";
import treeTable from "./modules/treeTable";
import uiReducer from "./modules/ui";
import assignedToMe from "./modules/MyWorkReducer/assigned-to-me";

/**
 * Branching reducers to use one reducer for many components
 */

function branchReducer(reducerFunction, reducerName) {
  return (state, action) => {
    const { branch } = action;
    const isInitializationCall = state === undefined;
    if (branch !== reducerName && !isInitializationCall) {
      return state;
    }
    return reducerFunction(state, action);
  };
}

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    assignedToMe,
    calendar,
    chat,
    contact,
    ecommerce,
    email,
    form,
    initval,
    login,
    projectBoard,
    socmed,
    taskboard,
    ui: uiReducer,
    treeTableArrow: branchReducer(treeTable, "treeTableArrow"),
    treeTablePM: branchReducer(treeTable, "treeTablePM"),
    crudTableDemo: branchReducer(crudTable, "crudTableDemo"),
    crudTableForm,
    crudTbFrmDemo: branchReducer(crudTableForm, "crudTbFrmDemo"),
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}

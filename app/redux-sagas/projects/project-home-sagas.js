import { takeEvery, call, put, putResolve, select } from 'redux-saga/effects';
import DataService from '../../services/data-service';
import history from 'utils/history';
import { get } from 'lodash';

import { types } from '../../karya-actions/projects/project-home-actions';
import { types as addProjectTypes } from '../../karya-actions/projects/add-project-actions';
import { types as addNotificationTypes } from '../../karya-actions/notifications/notifications-actions';

const dataService = new DataService();

function* getAllProjects() {
  //params will come from action dispatcher
  const queryParams = {
    projectId: 0,
    type: 'list',
    employeeId: 1,
  };
  const projectList = yield call(dataService.asyncGetWithParam, {
    type: 'projects',
    queryParams: queryParams,
  });
  console.log('projectList', projectList);
  yield put({ type: types.INIT, projectList });
}

function* getConfigInfo() {
  const config = yield call(dataService.asyncGetAll, {
    type: 'config',
  });
  console.log('config', config);
  yield put({ type: types.SET_CONFIG_INFO, config });
}

function* addProject(payload) {
  const body = {
    projectName: payload.projectName,
    projectKey: payload.projectKey,
    projectDescription: payload.projectDesc,
    projectCategory: payload.selectedCategory,
    projectType: payload.selectedType,
    projectTemplateId: payload.selectedTemplate,
  };
  try {
    yield call(dataService.asyncExecuteApi, {
      type: 'add',
      body: body,
      path: 'projects',
    });
    const notification = { message: `Project ${body.projectName} created successfully`, severity: 'success' };
    yield put({ type: addNotificationTypes.NOTIFICATIONS_SET_MESSAGE, notification });
    history.push('/projects/project-board');
  } catch (error) {
    const notification = { message: `Failed to create project ${body.projectName}`, severity: 'error' };
    yield put({ type: addNotificationTypes.NOTIFICATIONS_SET_MESSAGE, notification });
  }
}

function* getRecentProjects() {
  //params will come from action dispatcher
  const queryParams = {
    projectId: 0,
    type: 'recent',
    employeeId: 1,
  };
  const recentProjects = yield call(dataService.asyncGetWithParam, {
    type: 'projects',
    queryParams: queryParams,
  });
  yield put({ type: types.SET_RECENT_PROJECTS, recentProjects });
}

function* getProjectDetails(payload) {
  //params will come from action dispatcher
  const projectId = get(payload, ['payload', 'projectId'], 0);
  const queryParams = {
    projectId: projectId,
    type: 'detail',
    employeeId: 1,
  };
  try {
    const projectDetails = yield call(dataService.asyncGetWithParam, {
      type: 'projects',
      queryParams: queryParams,
    });
    yield put({ type: types.SET_PROJECT_DETAILS, projectDetails });
  } catch (error) {}
}

function* setStarredProject(payload) {
  const status = get(payload, 'status', 'Star');
  const projectId = get(payload, 'projectId', 0);
  const message = status ? 'starred' : 'unstarred';
  const star = status ? 'Star' : 'Unstar';
  const queryParams = {
    action: star,
    employeeId: 1, //TODO: remove after login integration
  };

  try {
    yield call(dataService.asyncExecuteApi, {
      type: 'edit',
      body: queryParams,
      path: `projects/${projectId}`,
    });
    const notification = { message: `Project ${message} successfully`, severity: 'success' };
    yield put({ type: addNotificationTypes.NOTIFICATIONS_SET_MESSAGE, notification });
  } catch (error) {
    const notification = { message: `Failed to star a project`, severity: 'error' };
    yield put({ type: addNotificationTypes.NOTIFICATIONS_SET_MESSAGE, notification });
  }
}

const projectBoardSagas = [
  takeEvery(types.FETCH_ALL_PROJECTS, getAllProjects),
  takeEvery(types.GET_CONFIG_INFO, getConfigInfo),
  takeEvery(addProjectTypes.ADD_PROJECT_CREATE_PROJECT, addProject),
  takeEvery(types.GET_RECENT_PROJECTS, getRecentProjects),
  takeEvery(types.GET_PROJECT_DETAILS, getProjectDetails),
  takeEvery(types.SET_PROJECT_STARRED_STATUS, setStarredProject),
];

export default projectBoardSagas;

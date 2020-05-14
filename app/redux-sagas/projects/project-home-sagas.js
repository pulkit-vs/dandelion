import { takeEvery, call, put, putResolve, select } from 'redux-saga/effects';
import DataService from '../../services/data-service';
import history from 'utils/history';

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

const projectBoardSagas = [
  takeEvery(types.FETCH_ALL_PROJECTS, getAllProjects),
  takeEvery(types.GET_CONFIG_INFO, getConfigInfo),
  takeEvery(addProjectTypes.ADD_PROJECT_CREATE_PROJECT, addProject),
];

export default projectBoardSagas;

import {all} from 'redux-saga/effects'
import fetchDepartamentsSaga from "./fetchDepartamentsSaga";
import updateDepartamentSaga from "./updateDepartamentSaga";
import fetchEmployeesSaga from "./fetchEmployeesSaga";
import fetchEmployeeSaga from "./fetchEmployeeSaga";
import updateEmployeeSaga from "./updateEmployeeSaga";
import removeEmployeeSaga from "./removeEmployeeSaga";
import createEmployeeSaga from "./createEmployeeSaga";
import removeDepartamentSaga from "./removeDepartamentSaga";
import createDepartamentSaga from "./createDepartamentSaga";

export default function* rootSaga() {
    yield all([
        fetchDepartamentsSaga(),
        updateDepartamentSaga(),
        fetchEmployeesSaga(),
        fetchEmployeeSaga(),
        updateEmployeeSaga(),
        removeEmployeeSaga(),
        createEmployeeSaga(),
        removeDepartamentSaga(),
        createDepartamentSaga(),
    ])
}
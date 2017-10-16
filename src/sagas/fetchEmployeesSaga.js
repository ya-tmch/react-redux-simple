import {put, call, takeLatest} from 'redux-saga/effects'
import {fetchEmployees} from "../api/index";
import {push} from "react-router-redux";

function* fetch() {
    try {
        const employees = yield call(fetchEmployees);
        yield put({type: "FETCH_EMPLOYEES_SUCCESS", employees});
    } catch (e) {
        yield put({type: 'ERROR', message: e.message})
        yield put(push('/error'))
    }
}

function* fetchEmployeesSaga() {
    yield takeLatest("FETCH_EMPLOYEES", fetch);
}


export default fetchEmployeesSaga
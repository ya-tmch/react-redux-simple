import {put, call, takeLatest} from 'redux-saga/effects'
import {removeEmployee} from "../api/index";
import {push} from "react-router-redux";

function* remove({id}) {
    try {
        yield call(removeEmployee, id);
        yield put({type: 'FETCH_EMPLOYEES'})
    } catch (e) {
        yield put({type: 'ERROR', message: e.message})
        yield put(push('/error'))
    }
}

function* removeEmployeeSaga() {
    yield takeLatest("REMOVE_EMPLOYEE", remove);
}

export default removeEmployeeSaga
import {put, call, takeLatest} from 'redux-saga/effects'
import {createEmployee} from "../api/index";
import {push} from "react-router-redux";

function* create({employee}) {
    try {
        yield call(createEmployee, employee);
        yield put(push('/employees'));
    } catch (e) {
        yield put({type: 'ERROR', message: e.message})
        yield put(push('/error'))
    }
}

function* createEmployeeSaga() {
    yield takeLatest("CREATE_EMPLOYEE", create);
}

export default createEmployeeSaga
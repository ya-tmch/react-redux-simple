import {put, call, takeLatest} from 'redux-saga/effects'
import {fetchEmployee} from "../api/index";
import {push} from "react-router-redux";

function* fetch({id}) {
    try {
        const employee = yield call(fetchEmployee, id);
        yield put({type: "FETCH_EMPLOYEE_SUCCESS", employee});
    } catch (e) {
        yield put({type: 'ERROR', message: e.message})
        yield put(push('/error'))
    }
}

function* fetchEmployeeSaga() {
    yield takeLatest("FETCH_EMPLOYEE", fetch);
}

export default fetchEmployeeSaga
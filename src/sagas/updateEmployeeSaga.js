import {put, call, takeLatest, select} from 'redux-saga/effects'
import {updateEmployee} from "../api/index";
import {push} from "react-router-redux";

function* save() {
    try {
        let employee = yield select((state) => state.employee.data);
        employee = yield call(updateEmployee, employee);
        yield put({type: "FETCH_EMPLOYEE_SUCCESS", employee});
    } catch (e) {
        yield put({type: 'ERROR', message: e.message})
        yield put(push('/error'))
    }
}

function* saveEmployeeSaga() {
    yield takeLatest("UPDATE_EMPLOYEE", save);
}

export default saveEmployeeSaga
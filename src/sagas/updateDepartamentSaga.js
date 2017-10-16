import { put, call, takeLatest} from 'redux-saga/effects'
import {updateDepartament} from "../api/index";
import {push} from "react-router-redux";

function* change(action) {
    try {
        yield call(updateDepartament, action.departament)
        yield put({type: 'FETCH_DEPARTAMENTS', force: true})
    } catch (e) {
        yield put({type: 'ERROR', message: e.message})
        yield put(push('/error'))
    }
}

function* updateDepartamentSaga() {
    yield takeLatest("UPDATE_DEPARTAMENT", change);
}

export default updateDepartamentSaga


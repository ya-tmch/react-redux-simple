import {put, call, takeLatest} from 'redux-saga/effects'
import {createDepartament} from "../api/index";
import {push} from "react-router-redux";

function* create({departament}) {
    try {
        yield call(createDepartament, departament);
        yield put({type: 'FETCH_DEPARTAMENTS', force: true})
    } catch (e) {
        yield put({type: 'ERROR', message: e.message})
        yield put(push('/error'))
    }
}

function* createDepartamentSaga() {
    yield takeLatest("CREATE_DEPARTAMENT", create);
}

export default createDepartamentSaga
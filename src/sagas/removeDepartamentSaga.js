import {put, call, takeLatest} from 'redux-saga/effects'
import {removeDepartament} from "../api/index";
import {push} from "react-router-redux";

function* remove({id}) {
    try {
        yield call(removeDepartament, id);
        yield put({type: 'FETCH_DEPARTAMENTS', force: true})
    } catch (e) {
        yield put({type: 'ERROR', message: e.message})
        yield put(push('/error'))
    }
}

function* removeDepartamentSaga() {
    yield takeLatest("REMOVE_DEPARTAMENT", remove);
}

export default removeDepartamentSaga
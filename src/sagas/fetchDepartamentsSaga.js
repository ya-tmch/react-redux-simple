import {put, call, takeLatest, select} from 'redux-saga/effects'
import {fetchDepartaments} from "../api/index";
import {push} from "react-router-redux";

function* fetch(action) {
    try {
        const loaded = yield select((state) => state.departaments.data)

        if (!loaded || action.force) {
            const departaments = yield call(fetchDepartaments);
            yield put({type: "FETCH_DEPARTAMENTS_SUCCESS", departaments});
        }
    } catch (e) {
        yield put({type: 'ERROR', message: e.message})
        yield put(push('/error'))
    }
}

function* fetchDepartamentsSaga() {
    yield takeLatest("FETCH_DEPARTAMENTS", fetch);
}

export default fetchDepartamentsSaga
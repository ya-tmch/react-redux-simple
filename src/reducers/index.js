import {combineReducers} from 'redux'
import departaments from "./departaments";
import employees from "./employees";
import employee from "./employee";
import error from "./error";

export default function (router) {
    return combineReducers({
        departaments,
        employees,
        employee,
        error,
        router
    })
}
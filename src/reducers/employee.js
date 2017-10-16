let initState = {
    data: null,
    needSave: false,
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_EMPLOYEE_SUCCESS': {
            return {data: action.employee, needSave: false}
        }

        case 'CHANGE_EMPLOYEE': {
            return {
                data: {...state.data, ...action.data},
                needSave: true
            }
        }

        case 'SAVE_EMPLOYEE': {
            return {...state, ...{needSave: false}}
        }

        default:
            return state
    }
}
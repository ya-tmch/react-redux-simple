let initState = {
    data: null
}

export default (state = initState, action) => {
    switch (action.type) {

        case 'FETCH_EMPLOYEES_SUCCESS': {
            return {data: action.employees}
        }

        default:
            return state
    }
}
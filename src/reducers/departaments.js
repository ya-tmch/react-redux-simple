let initState = {
    data: null,
}

export default (state = initState, action) => {
    switch (action.type) {

        case 'FETCH_DEPARTAMENTS_SUCCESS': {
            return Object.assign({}, state, {data: action.departaments})
        }

        default:
            return state
    }
}
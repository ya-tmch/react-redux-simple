let initState = {
    message: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'ERROR': {
            return {message: action.message}
        }

        default:
            return state
    }
}
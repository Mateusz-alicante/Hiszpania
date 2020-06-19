const defaultState = {
    token: ""
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "SET_AUTH_TOKEN":
            return {
                ...state,
                token: action.token
            }

        default:
            return state
    }
}
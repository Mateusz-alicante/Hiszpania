const defaultState = {
    header: false,
    front: false
}

export default (state = defaultState, action) => {
    switch(action.type) {

        case "SET_RENDER":
            const update = {}
            update[action.key] = action.value
            return {
                ...state,
                ...update
            }

        default:
            return state
    }
}
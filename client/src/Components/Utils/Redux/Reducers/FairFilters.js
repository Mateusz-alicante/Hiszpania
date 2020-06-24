const defaultState = {
    startDate: null,
    endDate: null
}

export default (state = defaultState, action) => {
    switch(action.type) {

        case "SET_FILTERS_FAIRS":
            return {
                ...state,
                ...action.filters
            }

        default:
            return state
    }
}
export const setRender = (component, value) => {
    return ({
        type: "SET_RENDER",
        key: component,
        value
    })
}

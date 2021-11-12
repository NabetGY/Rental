
/* export const myGetters = ( state ) => {
    return state
} */

export const currentState = ( state ) => {
    return state.status
}

export const username = ( state ) => {
    return state.username
}

export const getEmail = ( state ) => {
    return state.email
}


export const getAuthToken = ( state ) => {

    const token = 'Bearer '+state.token
    return token
}

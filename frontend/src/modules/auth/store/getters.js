
/* export const myGetters = ( state ) => {
    return state
} */

export const currentState = ( state ) => {
    return state.status
}

export const username = ( state ) => {
    return state.username
}

export const img_profile = ( state ) => {
    return state.img_profile
}

export const number_phone = ( state ) => {
    return state.number_phone
}

export const getEmail = ( state ) => {
    return state.email
}


export const getAuthToken = ( state ) => {

    const token = 'Bearer '+state.token
    return token
}

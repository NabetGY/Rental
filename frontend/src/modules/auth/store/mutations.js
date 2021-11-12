
/* export const myAction = ( state ) => {

} */

export const loginUser = ( state, { user, token, refreshToken } ) => {

    if ( token ) {
       localStorage.setItem('token', token)
       state.token = token
   }

   if ( refreshToken ) {
    localStorage.setItem('refreshToken', refreshToken)
    state.refreshToken = refreshToken
    }

    if ( user ) {
        const {username, email} = user
        localStorage.setItem('username', username)
        localStorage.setItem('email', email)
        state.username = username
        state.email = email
    }
    
    state.status = 'authenticated'
    state.checking = false
}


export const logout = ( state ) => {
    state.status= 'no-authenicate'
    state.user= null
    state.token = null
    state.refreshToken= null

    localStorage.removeItem('user')
    localStorage.removeItem('email')
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')

}


/* export const myAction = ( state ) => {

} */

export const loginUser = ( state, { user, token, refreshToken } ) => {
    console.log('en loginsuser mutations')
    if ( token ) {
       localStorage.setItem('token', token)
       state.token = token
   }

   if ( refreshToken ) {
    localStorage.setItem('refreshToken', refreshToken)
    state.refreshToken = refreshToken
    }

    if ( user ) {
        const {username, email, image_perfil, number_phone} = user
        localStorage.setItem('username', username)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('email', email)
        localStorage.setItem('img_profile', image_perfil)
        localStorage.setItem('number_phone', number_phone)

        state.username = username
        state.email = email
        state.img_profile = image_perfil
        state.number_phone = number_phone

        state.status = 'authenticated'
        state.checking = false
    }
    
    
}

export const updateUser = ( state, { username, image_perfil, number_phone } ) => {

    localStorage.setItem('username', username)
    localStorage.setItem('img_profile', image_perfil)
    localStorage.setItem('number_phone', number_phone)

    state.username = username
    state.img_profile = image_perfil
    state.number_phone = number_phone
 
}

export const logout = ( state ) => {
    state.status = 'no-authenicate'
    state.user= null
    state.token = null
    state.refreshToken= null
    state.img_profile = null
    state.number_phone = null

    localStorage.removeItem('user')
    localStorage.removeItem('email')
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('img_profile')
    localStorage.removeItem('number_phone')







}

import rentalApi from "@/api/rentalApi"

/* export const myAction = async({ commit }) => {

} */


export const createUser = async ( { commit }, user ) => {

    const { username, email, password } = user

    try {
        const { data } = await rentalApi.post('/user/user/', { email, password, username })
        
        const { message } = data

        //await rentalApi.post(':update', { displayName: username, token, refreshToken })

        delete user.password
        
        commit('logout')
        
        return { ok: true, message: message }

    } catch (error) {
        return { ok: false, message: error.response.data.error.message}
    }
}


export const signInUser = async ( { commit }, user ) => {

    const { username, password } = user
    try {
        console.log('rentalaPI', rentalApi)

        const resp = await rentalApi.post('/user/login/', { username, password })
        console.log('respuesta',resp)
        const { data } = resp
        const {  token, refreshToken , user, message } = data

        console.log('data:', data)

        commit('loginUser', {  token, refreshToken , user })

        

        return { ok: true, message: message }
        
    } catch (error) {
        console.log(error.response)
        return { ok: false, message: error.response.data.error.message }
        
    }

}

export const userLogout = async ( { commit }, email ) => {

    try {
        console.log('rentalaPI', rentalApi)

        const resp = await rentalApi.post('/user/logout/', { email })
        const { data } = resp
        const { message } = data

        commit('logout')
        return { ok: true, message: message }
        
    } catch (error) {
        console.log(error.response)
        return { ok: false, message: error.response.data.error.message }
        
    }

}




export const checkAuthentication = async({ commit }) => {

    const token = localStorage.getItem('token')
    const refreshToken = localStorage.getItem('refreshToken')
    const user = localStorage.getItem('refreshToken')


    if (!token) {
        commit('logout')
        return { ok: false, message: 'No hay token' }
    }

    try {


        commit('loginUser', { user, token, refreshToken})

        return { ok : true }

    } catch (error) {
        commit('logout')
        return { ok: false, message: error.response.data.error.message }

        
    }


}


export const setTokens = async({ commit }, token, refreshToken, user) => {
    commit('loginUser', { user, token, refreshToken})
}


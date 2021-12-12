/* import rentalApi from "@/api/rentalApi"
 */import axios from 'axios';

/* export const myAction = async({ commit }) => {

} */


export const createUser = async ( { commit }, user ) => {

    const { username, email, password, image_perfil, number_phone } = user

    try {
        const { data } = await axios.post('https://lumayo-arrendamientos.herokuapp.com/user/register/', { email, password, username, image_perfil, number_phone })
        
        const { message } = data

        delete user.password
        
        commit('logout')
        
        return { ok: true, message: message }

    } catch (error) {
        console.log('error')

        commit('logout')
        location.reload();
        return { ok: false, message: error.response.data.error.message}
    }
}

export const updateUser = async ( { commit }, user ) => {

    const { email, username, image_perfil, number_phone } = user

    try {
        const { data } = await axios.put('https://lumayo-arrendamientos.herokuapp.com/user/user/'+email+'/', { username, image_perfil, number_phone },
            {
                headers: {
                    Authorization: 'Bearer '+localStorage.getItem('token')
                }
            }
        )
        
        const { message } = data

        commit('updateUser', { username, image_perfil, number_phone })
        
        return { ok: true, message: message }

    } catch (error) {
        console.log('error')

        commit('logout')
        location.reload();
        return { ok: false, message: error.response.data.error.message}
    }
}


export const signInUser = async ( { commit }, user ) => {

    const { username, password } = user
    try {

        const resp = await axios.post('https://lumayo-arrendamientos.herokuapp.com/user/login/', { username, password })

        const { data } = resp

        const {  token, refreshToken , user, message } = data
        
        commit('loginUser', {  token, refreshToken , user })

        return { ok: true, message: message }
        
    } catch (error) {
        commit('logout')
        location.reload();
        console.log('error')

        return { ok: false, message: error.response.data.error.message }
        
    }

}

export const userLogout = async ( { commit }, email ) => {

    try {
        const resp = await axios.post('https://lumayo-arrendamientos.herokuapp.com/user/logout/', { email },
            {
                headers: {
                    Authorization: 'Bearer '+localStorage.getItem('token')
                }
            }
        )
        const { data } = resp
        const { message } = data

        commit('logout')
        location.reload();
        return { ok: true, message: message }
        
    } catch (error) {
            console.log('error')
            commit('logout')
            location.reload(); 
        
        return { ok: false, message: 'error' }
        
    }

}




export const checkAuthentication = async({ commit }) => {

    const token = localStorage.getItem('token')
    const refreshToken = localStorage.getItem('refreshToken')


    if (!token) {
        console.log('token')

        commit('logout')
        return { ok: false, message: 'No hay token' }
    }

    try {
        console.log('try')
        const response = await axios.post(`https://lumayo-arrendamientos.herokuapp.com/api/token/refresh/`, {
            refresh: refreshToken
        });
        const {  access, refresh  } = response.data
        commit('loginUser', { user:false, token:access, refreshToken:refresh})
        
        return { ok : true }

    } catch (error) {
        console.log('error')

        commit('logout')
        return { ok: false, message: error.response.data.error.message }

        
    }


}


export const setTokens = async({ commit }, token, refreshToken, user) => {
    commit('loginUser', { user, token, refreshToken})
}


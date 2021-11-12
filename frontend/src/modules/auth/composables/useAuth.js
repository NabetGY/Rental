import { useStore } from "vuex"
import { computed } from "vue";


const useAuth = () => {
    const store = useStore()

    const createUser = async( user ) => {

        const resp = await store.dispatch('auth/createUser', user )
        
        return resp
    }


    const loginUser = async( user ) => {

        const resp = await store.dispatch('auth/signInUser', user )
        
        return resp
    }

    const checkAuthStatus = async() => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
        
    }

    const logout = async () => {
        const email = computed(() => store.getters['auth/getEmail']).value
        const resp = await store.dispatch('auth/userLogout', email)
        console.log(resp)
        //store.commit('journal/clearEntries')
    }
        


    return {
        checkAuthStatus,
        createUser,
        loginUser,
        logout,
        authStatus: computed( () => store.getters['auth/currentState']),
        username: computed( () => store.getters['auth/username']),
        authToken: computed( () => store.getters['auth/getAuthToken']),

    }
}

export default useAuth
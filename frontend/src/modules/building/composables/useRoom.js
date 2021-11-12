import { useStore } from "vuex"
import { computed } from "vue";


const useRoom = () => {
    const store = useStore()

    const createRoom = async( Room ) => {

        const resp = await store.dispatch('building/createPublication', Room )
        
        return resp
    }

    const getUserPublications = async() => {

        const email = computed(() => store.getters['auth/getEmail']).value

        await store.dispatch('building/getMyPublications', email )

        return email
        
    }


    const loginUser = async( user ) => {

        const resp = await store.dispatch('auth/signInUser', user )
        
        return resp
    }

    const checkAuthStatus = async() => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
        
    }

    const logout = () => {
        store.commit('auth/logout')
        store.commit('journal/clearEntries')

        
    }

    const clearUserPublications = () => {
        store.commit('building/clearMyPublications')   
    }

    return {
        getUserPublications,
        clearUserPublications,
        checkAuthStatus,
        createRoom,
        loginUser,
        logout,
        authStatus: computed( () => store.getters['auth/currentState']),
        username: computed( () => store.getters['auth/username']),

    }
}

export default useRoom 
import { useStore } from "vuex"
import { computed } from "vue";


const useRoom = () => {
    const store = useStore()

    const createRoom = async( Room ) => {

        const resp = await store.dispatch('building/createPublication', Room )
        
        return resp
    }

    const updateRoom = async( Room ) => {

        const resp = await store.dispatch('building/updatePublication', Room )
        
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

    const deleteRoom = async( id ) => {
        const resp = await store.dispatch('building/deleteRoom', id)
        return resp
        
    }

    const logout = () => {
        store.commit('auth/logout')
        store.commit('journal/clearEntries')

        
    }



    const getUserPublications = async() => {

        const email = computed(() => store.getters['auth/getEmail']).value

        await store.dispatch('building/getMyPublications', email )

        return email
        
    }

    const clearUserPublications = () => {
        store.commit('building/deleteRoom')   
    }


    const getPublications = async() => {

        await store.dispatch('building/getAllPublications' )

    }

    const clearPublications = () => {
        store.commit('building/deleteRoom')   
    }


    return {
        getUserPublications,
        clearUserPublications,
        getPublications,
        clearPublications,
        checkAuthStatus,
        createRoom,
        updateRoom,
        loginUser,
        logout,
        deleteRoom,
        authStatus: computed( () => store.getters['auth/currentState']),
        username: computed( () => store.getters['auth/username']),

    }
}

export default useRoom 
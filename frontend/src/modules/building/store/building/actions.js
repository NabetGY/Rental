import rentalApi from '@/api/rentalApi'

/* export const myAction = async({ commit }) => {

} */
export const getMyPublications = async ({ commit }, email) => {


    const { data } = await rentalApi.get('/rooms/rooms/?email='+email,
        {
            headers: {
                Authorization: 'Bearer '+localStorage.getItem('token')
            }
        }
    )

    if (!data) {
        commit('building/setPublications', [])
        return

    }
    const publications = []

    for (let id of Object.keys(data)) {
        publications.push({
            id,
            ...data[id]
        })
    }
    commit('setPublications', publications)
}


export const getAllPublications = async ({ commit } ) => {


    const { data } = await rentalApi.get('/rooms/rooms/')

    if (!data) {
        commit('building/setPublications', [])
        return
    }
    const publications = []

    for (let id of Object.keys(data)) {
        publications.push({
            id,
            ...data[id]
        })
    }

    commit('setPublications', publications)
}

export const deleteRoom = async ({ commit }, id) => {

    try {
        const { data } = await rentalApi.delete('/rooms/rooms/'+id,
            {
                headers: {
                    Authorization: 'Bearer '+localStorage.getItem('token')
                }
            }
        )
        
        const { message } = data
        
        commit('deleteRoom', id)
        
        return { ok: true, message: message }

        } 
    catch (error) {
        return { ok: false, message: error.response.data.error.message}
    }
}

 /* export const updateEntry = async ({ commit }, entry) => {

    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    const resp = await rentalApi.put(`/publications/${entry.id}.json`, dataToSave)
    console.log(resp)

    // commit de una mutation -> updateEntry
    commit('updateEntry', { ...entry })
} */

export const createPublication = async ({ commit }, publication) => {

    const {           
        titulo, area, banio, ciudad, ubicacion, descripcion, estrato, precio, estacionamiento, images, user 
    } = publication

    const dataToSave = {           
        titulo, area, banio, ciudad, ubicacion, descripcion, estrato, precio, estacionamiento, images, user 
    }

    try {
        const { data } = await rentalApi.post(`/rooms/rooms/`, dataToSave,
            {
                headers: {
                    Authorization: 'Bearer '+localStorage.getItem('token')
                }
            }
        )
    
        commit('addMyPublication', dataToSave)
    
        return {ok: true, message: data.message }
    } catch (error) {
        console.log(error.response)
        return { ok: false, message: error.response.data.error.message }
    }
}



export const updatePublication = async ({ commit }, publication) => {

    const {           
        titulo, area, banio, ciudad, ubicacion, descripcion, estrato, precio, estacionamiento, images, id 
    } = publication

    const dataToSave = {           
        titulo, area, banio, ciudad, ubicacion, descripcion, estrato, precio, estacionamiento, images, id
    }

    try {
        const { data } = await rentalApi.put("/rooms/rooms/"+id+'/', dataToSave,
            {
                headers: {
                    Authorization: 'Bearer '+localStorage.getItem('token')
                }
            }
        )
    
        commit('updateMyPublication', publication)
    
        return {ok: true, message: data.message }
    } catch (error) {
        console.log(error.response)
        return { ok: false, message: error.response.data.error.message }
    }
}

/* export const deleteEntry = async ({ commit }, id) => {

    await rentalApi.delete(`/publications/${id}.json`)
    commit('deleteEntry', id)

    return id

}
 */

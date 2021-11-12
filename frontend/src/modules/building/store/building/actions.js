import rentalApi from '@/api/rentalApi'

/* export const myAction = async({ commit }) => {

} */
export const getMyPublications = async ({ commit }, email) => {


    rentalApi.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');
    const { data } = await rentalApi.get('/rooms/rooms/?email='+email)

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
        rentalApi.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');
        const { data } = await rentalApi.post(`/rooms/rooms/`, dataToSave)

        console.log(data)
        //dataToSave.id = data.name
    
        commit('addMyPublication', dataToSave)
    
        return {ok: true}
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

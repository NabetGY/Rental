
/* export const myGetters = ( state ) => {
    return state
} */

export const getMyItems = (state) =>  (username = '') => {

    return state.publications.filter( publication => publication.user.username === username )

}

export const getPublicationById = (state) => (id = 0) => {

    const publication = state.publications.find( publication => publication.id === Number(id) )

    if (!publication) return

    return { ...publication }

}


export const getPublicationBySubscribed = (state) => {

    return state.publications.filter( publication => publication.user.is_subscribed === true )


}

export const getPublicationsByWord = ( state ) => (term = '') => {

    if ( term.length === 0) {
        return state.publications
    }

    return state.publications.filter( publication => publication.titulo.toLowerCase().includes( term.toLocaleLowerCase() ) )

}
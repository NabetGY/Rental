
/* export const myAction = ( state ) => {

} */

export const setPublications = (state, publications) => {

    state.publications = [...state.publications, ...publications]
    state.isLoading = false
}

export const updateEntry = (state, entry) => {

    const idx = state.publications.map(e => e.id).indexOf(entry.id)
    state.publications[idx] = entry

}

export const addMyPublication = (state, myPublication) => {

    state.myPublications = [myPublication, ...state.myPublications]

}

export const deleteEntry = (state, id) => {

    state.publications = state.publications.filter(entry => entry.id !== id)

}

export const clearPublications = (state) => {

    state.myPublications = []

}
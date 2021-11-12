
/* export const myGetters = ( state ) => {
    return state
} */

export const getMyItems = (state) => {

    return state.publications

}

export const getEntryById = (state) => (id = '') => {

    const entry = state.entries.find(entry => entry.id === id)
    if (!entry) return
    return { ...entry }

}
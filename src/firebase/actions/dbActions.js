export const addNote = (note) => (dispatch, getState, { getFirestore }) => {

    const firestore = getFirestore()

    firestore.collection(getState().firebase.auth.uid).add(note)
        .then(() => {
            dispatch({ type: 'ADD_NOTE_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'ADD_NOTE_FAILED', err })
        })
}

export const delNote = (id) => (dispatch, getState, { getFirestore }) => {

    const firestore = getFirestore()

    firestore.collection(getState().firebase.auth.uid).doc(id).delete()
        .then(() => {
            dispatch({ type: 'DEL_NOTE_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'DEL_NOTE_FAILED', err })
        })
}

export const editNote = (id, note) => (dispatch, getState, { getFirestore }) => {

    const firestore = getFirestore()

    firestore.collection(getState().firebase.auth.uid).doc(id).update(note)
        .then(() => {
            dispatch({ type: 'EDIT_NOTE_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'EDIT_NOTE_FAILED', err })
        })
}

export const fetchNotes = () => (dispatch, getState, { getFirestore }) => {

    const firestore = getFirestore()

    firestore.collection(getState().firebase.auth.uid).orderBy('time', 'desc').get()
        .then(notes => {
            dispatch({ type: 'FETCH_NOTES_SUCCESS', notes })
        }).catch(err => {
            dispatch({ type: 'FETCH_NOTES_FAILED', err })
        })
}

export const fetchDetails = () => (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()

    firestore.collection('users').doc(getState().firebase.auth.email).get()
        .then(user => {
            dispatch({ type: 'FETCH_DETAILS_SUCCESS', user })
            return true
        }).catch(err => {
            dispatch({type: 'FETCH_DETAILS_FAILED', err})
            return false
        })
}
export const logIn = (creds) => (dispatch, getState, { getFirebase }) => {

    dispatch({ type: 'LOGIN_INIT' })

    const firebase = getFirebase()
    firebase.auth().signInWithEmailAndPassword(
        creds.email,
        creds.password
    ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' })
    }).catch((err) => {
        dispatch({ type: 'LOGIN_FAILED', err })
    })
}


export const logOut = () => (dispatch, getState, { getFirebase }) => {

    const firebase = getFirebase()
    firebase.auth().signOut(
    ).then(() => {
        dispatch({ type: 'LOGOUT_SUCCESSS' })
    }).catch((err) => {
        dispatch({ type: 'LOGOUT_FAILED', err })
    })
}


export const addUser = (creds) => (dispatch, getState, { getFirebase, getFirestore }) => {

    dispatch({ type: 'LOGIN_INIT' })

    const firebase = getFirebase()
    const firestore = getFirestore()

    firebase.auth().createUserWithEmailAndPassword(
        creds.email,
        creds.password
    ).then(resp => {
        return firestore.collection('users').doc(creds.email).set({
            name: creds.name,
            uid: resp.user.uid,
            date: new Date()
        })
    }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' })
    }).catch(err => {
        dispatch({ type: 'SIGNUP_FAILED', err })
    })
}

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

// for signing up users
export const addUser = (creds) => (dispatch, getState, { getFirebase, getFirestore }) => {

    dispatch({ type: 'LOGIN_INIT' })

    const firebase = getFirebase()
    const firestore = getFirestore()

    firebase.auth().createUserWithEmailAndPassword(
        creds.email,
        creds.password
    ).then(resp => {
        // creating user object in firestore
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


export const logInWithGoogleStart = () => (dispatch, getState, { getFirebase }) => {

    const firebase = getFirebase()

    const provider = new firebase.auth.GoogleAuthProvider()

    dispatch({ type: 'GOOGLE_INIT' })

    firebase.auth().signInWithRedirect(
        provider
    ).catch(err => {
        console.log(err);
        dispatch({ type: 'SIGNUP_FAILED', err })
    })
}

export const logInWithGoogleEnd = () => (dispatch, getState, { getFirebase, getFirestore }) => {

    const firebase = getFirebase()
    const firestore = getFirestore()

    firebase.auth().getRedirectResult()
        .then(resp => {
            if (resp.user.metadata.creationTime === resp.user.metadata.lastSignInTime) {        // to check if user in new
                return firestore.collection('users').doc(resp.user.email).set({
                    name: resp.user.displayName,
                    uid: resp.user.uid,
                    date: resp.user.metadata.creationTime
                })
            }
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            console.log(err);
        })
}
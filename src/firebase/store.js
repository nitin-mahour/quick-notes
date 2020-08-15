import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'
import firebase from './firebaseConfig'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase)
    )
)

const rrfConfig = { 
    userProfile: 'users',
    useFirestoreForProfile: true
}

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

export default store

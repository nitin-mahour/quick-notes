import authReducer from './authReducer'
import dbReducer from './dbReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    db: dbReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer
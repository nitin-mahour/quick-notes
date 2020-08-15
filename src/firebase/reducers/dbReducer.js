const initState = {
    notes: null,
    user: null,
    error: null,
}

const dbReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_NOTES_SUCCESS':
            return {
                ...state,
                notes: action.notes.docs
            }

        case 'FETCH_DETAILS_SUCCESS':
            return {
                ...state,
                user: action.user
            }

        case 'ADD_NOTE_SUCCESS':
        case 'DEL_NOTE_SUCCESS':
        case 'EDIT_NOTE_SUCCESS':
            return state

        case 'FETCH_NOTES_FAILED':
        case 'ADD_NOTE_FAILED':
        case 'DEL_NOTE_FAILED':
        case 'EDIT_NOTE_FAILED':
        case 'FETCH_DETAILS_FAILED':
            return {
                ...state,
                error: action.err
            }

        default:
            return state
    }
}

export default dbReducer
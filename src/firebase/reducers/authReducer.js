const initState = {
    authError: null,
    loading: false,
    loading_google: false,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_INIT':
            return {
                ...state,
                loading: true
            }
        
        case 'GOOGLE_INIT':
            return {
                ...state,
                loading_google: true
            }

        case 'LOGIN_SUCCESS':
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null,
                loading: false,
                loading_google: false
            }

        case 'LOGIN_FAILED':
        case 'SIGNUP_FAILED':
            return {
                ...state,
                authError: action.err.message,
                loading: false,
                loading_google: false
            }

        default:
            return state
    }
}

export default authReducer

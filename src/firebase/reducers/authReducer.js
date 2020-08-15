const initState = {
    authError: null,
    loading: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_INIT':
            return {
                ...state,
                loading: true
            }

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null,
                loading: false
            }

        case 'LOGIN_FAILED':
            return {
                ...state,
                authError: action.err.message,
                loading: false
            }

        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null,
                loading: false
            }

        case 'SIGNUP_FAILED':
            return {
                ...state,
                authError: action.err.message,
                loading: false
            }
        default:
            return state
    }
}

export default authReducer

import { LOGIN_SUCCESS, LOGIN_FAIL } from "./actions";


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    count: 0,
    isLoggedIn: false,
    loginToken: 'none'
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loginToken: action.payload,
                isLoggedIn: true
            }
        }

        case LOGIN_FAIL: {
            return {
                ...state,
                loginToken: action.payload
            }
        }

        default:
            return state;
    }
}

export default loginReducer;
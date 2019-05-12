// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    isLoggedIn: false,
    loginToken: 'none'
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default loginReducer; 
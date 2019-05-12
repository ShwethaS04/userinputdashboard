import loginRequest from './loginRequest';
import { loginSuccess, loginFail } from '../session/actions';

//Function to mock async login
const loginAsync = (username, password) => {
    return async (dispatch, getState) => {
        let loginToken = await loginRequest(username, password);

        if (loginToken !== 'invalid') {
            dispatch(loginSuccess(loginToken))
        } else {
            dispatch(loginFail(loginToken))
        }
    }
}

export default loginAsync;
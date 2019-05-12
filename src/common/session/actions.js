// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

// ------------------------------------
// Actions
// ------------------------------------
export const loginSuccess = value => {
  return {
    type    : LOGIN_SUCCESS,
    payload : value
  }
}

export const loginFail = value => {
  return {
    type    : LOGIN_FAIL,
    payload : value
  }
}
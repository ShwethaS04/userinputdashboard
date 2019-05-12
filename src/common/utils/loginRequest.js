import loginAsync from "./loginAsync";

const loginRequest = async (login, password) => {

    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 200)
    }).then(() => {
      if (login === 'hruday@gmail.com' && password === 'hruday123') {
        return 'success'; // Mocked Success Token
      } else {
        return 'invalid'; // Mocked Failure Token
      }
    })
  } 

  export default loginRequest;
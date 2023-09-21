import {validateUserName, validateEmail, validatePassword, userName, email, password, validateLoginEmail, emailLogin, loginPassword } from "./components/form-validate.js";
import { registerUrl, loginUrl } from "./components/api-fetch.js";
const createAccButton = document.querySelector("#createAcc-btn");
const loginButton = document.querySelector("#login-btn");
// Create account
createAccButton.onclick = function validateRegister(event) {
    event.preventDefault();
    validateUserName(userName);
    validateEmail(email);
    validatePassword(password);
   

    if (validateUserName(userName) &&  validateEmail(email) && validatePassword(password)) {
     
        const userRegisterInfo = {
            "name": userName.value,
            "email": email.value,
            "password": password.value,
        };
        console.log(userRegisterInfo);
        async function registerUser(url, data) {
            try {
              const postData = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              };
          
              const response = await fetch(url, postData);
              const json = await response.json();
              return json;
            } catch (error) {
              console.log(error);
            }
        }
        registerUser(registerUrl, userRegisterInfo);
    }
   
}

// Login
loginButton.onclick = function validateLogin(event) {
    event.preventDefault();
    validateLoginEmail(emailLogin);

    if (validateLoginEmail(emailLogin)) {
        const userLoginInfo = {
            "email": emailLogin.value,
            "password": loginPassword.value,
        };
        console.log(userLoginInfo);
        async function loginUser(url, data) {
            try {
              const postData = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              };
              const response = await fetch(url, postData);
              const json = await response.json();
              const accessToken = json.accessToken;
              localStorage.setItem('accessToken', accessToken);
              return json;
            } catch (error) {
              console.log(error);
            }
          }
          loginUser(loginUrl, userLoginInfo);
    }
   
}
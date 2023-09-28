import {validateUserName, validateEmail, validatePassword, userName, email, password, emailLogin, loginPassword } from "./components/form-validate.js";
import { registerUrl, loginUrl } from "./components/api-fetch.js";


// switch forms between create account and login
const loginForm = document.querySelector(".login");
const createAccountForm = document.querySelector(".create-acc");
const switchToCreateAccBtn = document.querySelector(".switch-create-acc-btn");
const swithToLoginBtn = document.querySelector(".switch-login-btn");
loginForm.classList.add("d-none");
switchToCreateAccBtn.onclick = function switchToCreateAcc() {
    loginForm.classList.add("d-none");
    createAccountForm.classList.remove("d-none");
};
swithToLoginBtn.onclick = function () {
    loginForm.classList.remove("d-none");
    createAccountForm.classList.add("d-none");
}

// Create account
const createAccButton = document.querySelector("#createAcc-btn");

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
const loginButton = document.querySelector("#login-btn");

// Fetch post login data
const userLoginInfo = {
    "email": emailLogin.value,
    "password": loginPassword.value,
};

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

// Log in process
loginButton.onclick = function validateLogin(event) {
    event.preventDefault();
    loginUser(loginUrl, userLoginInfo);
    checkToken();
}


// Redirect to feed page after login successful
function checkToken() {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        window.location.href = "./feed/index.html"
    }
}

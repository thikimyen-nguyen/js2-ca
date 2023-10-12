import {validateUserName, validateEmail, validatePassword, userName, email, password, emailLogin, loginPassword } from "./components/form-validate.mjs";
import { registerUrl, loginUrl } from "./components/api-url.mjs";


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


const createAccButton = document.querySelector("#createAcc-btn");

/**
 * Register new account
 * @date 2023-10-13
 * Get form input value and create userRegisterInfo object
 * Pass userRegisterInfo as param data in registerUser(url, data) 
 */
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
        
        /**
         * 描述
         * @date 2023-10-13
         * @param {string} url This is link to  post to API
         * @param {object} data This is user register info
         * @returns {object} Return an object with successful registered info of new user
         * 
         */
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
              if (response.ok) {
                alert("Your account was registered successfully!")
                loginForm.classList.remove("d-none");
                createAccountForm.classList.add("d-none");
              }
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



/**
 * Fetch post login data
 * @date 2023-10-13
 * @param {string} url This is link to  post to API
 * @param {object} data This is user info to login
 * @returns {object} Return an object with current login user profile
 */
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
        const {accessToken, name, avatar} = json;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem("user", name);
        localStorage.setItem("avatar", avatar);
        // Redirect to feed page
        if (response.ok) {
                window.location.href = "./feed/index.html"
            } else {
                alert("Please log in again with correct email or password")
            }
        return json;
    } catch (error) {
        console.log(error);
    }
    }

// Log in process

loginButton.addEventListener("click", getLoginUser);
function getLoginUser(event) {
    event.preventDefault();
    const userLoginInfo = {
        "email": emailLogin.value,
        "password": loginPassword.value,
    };
    loginUser(loginUrl, userLoginInfo);
}


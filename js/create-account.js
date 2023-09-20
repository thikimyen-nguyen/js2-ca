import {validateUserName, validateEmail, validatePassword, userName, email, password } from "./components/form-validate.js";
import { registerUrl } from "./components/api-fetch.js";
const submitButton = document.querySelector("#createAcc-btn");


submitButton.onclick = function validateRegisterForm(event) {
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
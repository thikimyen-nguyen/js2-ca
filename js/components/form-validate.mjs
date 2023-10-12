// Create account form
const userName = document.querySelector("#username");
const nameError = document.querySelector("#name_error");
const email = document.querySelector("#email-register");
const emailError = document.querySelector("#email_error");
const password = document.querySelector("#password-register");
const passwordError = document.querySelector("#password_error");
const emailLogin = document.querySelector("#email-login");
const emailLoginError = document.querySelector("#email-login-error");
const loginPassword = document.querySelector("#login-password");
// Create accoutn form
// Validate username
function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}
function validateUserName(userName) {
    const regEx = /^[\w]+$/;
    const patternMatches = regEx.test(email.value);
    if (checkLength(userName.value, 20) === true || patternMatches !== true) {
        nameError.style.display = "block";
        return false;
    } else {
        
        nameError.style.display = "none";
        return true;
    }
}
// Validate register email
function validateEmail(email) {
    const regEx = /^[\w\-.]+@(stud\.)?noroff\.no$/;
    const patternMatches = regEx.test(email.value);
 
    if (patternMatches === true) {
       
        emailError.style.display = "none";
        return true;
    } else {
        emailError.style.display = "block";
        return false;
    }
}

// Validate password

function validatePassword(password) {
  
    if (checkLength(password.value, 7) === true) {
        passwordError.style.display = "none";
        return true;
    } else {
        passwordError.style.display = "block";
        return false;
    }
}

// log in form

// validate email login
// function validateLoginEmail(emailLogin) {
//     const regEx = /\S+@stud.noroff\.no$/;
//     const patternMatches = regEx.test(emailLogin.value);
 
//     if (patternMatches === true) {
       
//         emailLoginError.style.display = "none";
//         return true;
//     } else {
//         emailLoginError.style.display = "block";
//         return false;
//     }
// }

export {validateUserName, validateEmail, validatePassword, userName, email, password, emailLogin, loginPassword }

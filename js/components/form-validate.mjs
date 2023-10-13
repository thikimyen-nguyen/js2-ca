
const userName = document.querySelector("#username");
const nameError = document.querySelector("#name_error");
const email = document.querySelector("#email-register");
const emailError = document.querySelector("#email_error");
const password = document.querySelector("#password-register");
const passwordError = document.querySelector("#password_error");
const emailLogin = document.querySelector("#email-login");
const emailLoginError = document.querySelector("#email-login-error");
const loginPassword = document.querySelector("#login-password");

// Validate register form

/**
 * To check length of username and password
 * @date 2023-10-12
 * @param {string} value This is a value from the form input
 * @param {number} len This is a number to check the length of the value
 * @returns {boolean} Return a true/false of comparison
 */
// function checkLength(value, len) {
//     if (value.trim().length > len) {
//         return true;
//     } else {
//         return false;
//     }
// }
const checkLength = (value, len) => value.trim().length > len;

/**
 * Validate username input whether is has max 20 characters and contain punctuation symbols apart from underscore (_) 
 * @param {string} userName This is input from username
 * @returns {boolean} Return true and set error shown as none, return false and set error shown as block
 */
function validateUserName(userName) {
    const regEx = /^[\w]+$/;
    const patternMatches = regEx.test(userName.value);
    if (checkLength(userName.value, 20) !== true && patternMatches === true) {
        nameError.style.display = "none";
        return true;
       
    } else {
        nameError.style.display = "block";
        return false;
       
    }
}


/**
 * Validate email with @stud.noroff.no or @noroff.no can register
 * @date 2023-10-12
 * @param {string} email This is input from email form
 * @returns {boolean} Return true and set error shown as none, return false and set error shown as block
 */
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



/**
 * Validate password to has minimum 08 characters
 * @date 2023-10-12
 * @param {string} password This is input from password form
 * @returns {boolean} Return true and set error shown as none, return false and set error shown as block
 */
function validatePassword(password) {
  
    if (checkLength(password.value, 7) === true) {
        passwordError.style.display = "none";
        return true;
    } else {
        passwordError.style.display = "block";
        return false;
    }
}



export {validateUserName, validateEmail, validatePassword, userName, email, password, emailLogin, loginPassword }

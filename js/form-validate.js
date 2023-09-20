// Create account form
const userName = document.querySelector("#username");
const nameError = document.querySelector("#name_error");
const email = document.querySelector("#email-register");
const emailError = document.querySelector("#email_error");
const password = document.querySelector("#password-register");
const passwordError = document.querySelector("#password_error");
const submitButton = document.querySelector("#createAcc-btn");


submitButton.onclick = function validateRegisterForm(event) {
    event.preventDefault();
    validateUserName(userName);
    validateEmail(email);
    validatePassword(password);
   

    if (validateUserName(userName) &&  validateEmail(email) && validatePassword(password)) {
     
        const userRegisterInfo = {
            userName: userName.value,
            email: email.value,
            password: password.value,
       };
       return userRegisterInfo;
    }
}

// Validate username
function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}
function validateUserName(userName) {
    
    if (checkLength(userName.value, 4) === true) {
        nameError.style.display = "none";
        return true;
    } else {
        nameError.style.display = "block";
        return false;
    }
}
// Validate email
function validateEmail(email) {
    const regEx = /\S+@noroff\.no$/;
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
// landing page
// switch forms
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

// Create Account
const baseUrl = " https://api.noroff.dev";
const registerEndpoint = "/api/v1/social/auth/register";

// get input information

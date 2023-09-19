// landing page

const loginForm = document.querySelector(".login");
const createAccountForm = document.querySelector(".create-acc");
const switchToCreateAccBtn = document.querySelector(".switch-create-acc-btn");
const swithToLoginBtn = document.querySelector(".switch-login-btn");
createAccountForm.classList.add("d-none");
switchToCreateAccBtn.onclick = function switchToCreateAcc() {
    loginForm.classList.add("d-none");
    createAccountForm.classList.remove("d-none");
};
swithToLoginBtn.onclick = function () {
    loginForm.classList.remove("d-none");
    createAccountForm.classList.add("d-none");
}

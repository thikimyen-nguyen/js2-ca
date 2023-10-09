const currentUserNameContainer = document.querySelector(".user-name");
const currentUserName = localStorage.getItem("user");
const userTitle = document.querySelector("title");

// show current user name
function showUserName() {
  currentUserNameContainer.innerHTML = currentUserName;
}
// show title for current user
function showTitle() {
  userTitle.innerText = `bingme |${currentUserName}  Profile`;
}
export {showUserName, showTitle}
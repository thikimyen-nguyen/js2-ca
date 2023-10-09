
const currentUserName = localStorage.getItem("user");
const currentUserAvatar = JSON.parse(localStorage.getItem("avatar"));


// show current user name
const currentUserNameContainer = document.querySelector(".user-name");
function showUserName() {
  currentUserNameContainer.innerHTML = currentUserName;
}
// show title for current user
const userTitle = document.querySelector("title");
function showTitle() {
  userTitle.innerText = `bingme |${currentUserName}  Profile`;
}

// show user profile avatar
const avatarContainer = document.querySelector(".custom-avatar");

function showAvatar() {
  const userAvatar = document.createElement("img");
  try {
    if (currentUserAvatar === null) {
      // photo from https://www.pexels.com/photo/road-among-trees-against-snowy-mountains-4993220/

      userAvatar.src = "../asset/images/pexels-rachel-claire-4993220.jpg";
    } else {
      userAvatar.src = currentUserAvatar;
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
  userAvatar.alt = "user avatar";
  avatarContainer.append(userAvatar);
}

export {showUserName, showTitle, showAvatar, currentUserName}


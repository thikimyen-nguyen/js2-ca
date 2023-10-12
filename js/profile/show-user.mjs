
const currentUserName = localStorage.getItem("user");
const currentUserAvatar = JSON.parse(localStorage.getItem("avatar"));



const currentUserNameContainer = document.querySelector(".user-name");
/**
 * Get current username from local storage and Show in UI
 * 
 */
function showUserName() {
  currentUserNameContainer.innerHTML = currentUserName;
}

const userTitle = document.querySelector("title");
/**
 * show title of profile page with current username
 */
function showTitle() {
  userTitle.innerText = `bingme |${currentUserName}  Profile`;
}


const avatarContainer = document.querySelector(".custom-avatar");

/**
 * Get avatar from current user profile and Show user profile avatar
 * There will be fix avatar if value = null
 */
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


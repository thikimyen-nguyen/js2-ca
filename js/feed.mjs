import { showPosts, postsContentContainer } from "./posts/view-feed-posts.mjs";
import { newFeedsHtml} from "./posts/filter.mjs";
import { getFeedPostsUrl, getFoodPostsUrl, getGamePostsUrl } from "./components/api-url.mjs";

// Show new feeds area UI
newFeedsHtml();

// filter and show posts
const selectFilter = document.querySelector("select");

async function showFeedHtml() {
    await showPosts(getFeedPostsUrl);
    selectFilter.addEventListener("change", function() {
        const selectedValue = selectFilter.value;
        if (selectedValue === "food" ) {
            postsContentContainer.innerHTML = "";
            showPosts(getFoodPostsUrl);
        } else if (selectedValue === "game" ) {
            postsContentContainer.innerHTML = "";
            showPosts(getGamePostsUrl);
        } else if (selectedValue === "all" ) {
            postsContentContainer.innerHTML = "";
            showPosts(getFeedPostsUrl);
        };
    })
}
showFeedHtml();

// UI for create post form
const addPostButton = document.querySelector(".add-post-button");
const postForm = document.querySelector(".create-post-form");
const cancelFormButton = document.querySelector("#cancel-form-button");


postForm.classList.add("d-none");

addPostButton.addEventListener("click", function showForm() {
  postForm.classList.remove("d-none");
  postForm.classList.add("d-block");
  addPostButton.classList.add("d-none");
})

cancelFormButton.addEventListener("click", function hideForm() {
  addPostButton.classList.remove("d-none");
  addPostButton.classList.add("d-block");
  postForm.classList.add("d-none");
  
})
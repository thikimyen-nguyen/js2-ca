import { showPosts, postsContentContainer } from "./posts/view-feed-posts.mjs";
import { newFeedsHtml} from "./posts/filter.mjs";
import { getFeedPostsUrl, getFoodPostsUrl, getGamePostsUrl, createPostUrl } from "./components/api-url.mjs";
import { createPostForm, postForm} from "./posts/create-new-post.mjs";
import { createPost } from "./components/fetch-token.mjs";
import { showUserName, showAvatar } from "./profile/show-user.mjs";
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

// show form to create post
createPostForm();

// get form input and post data to API
postForm.addEventListener("submit", function getFormValue(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Convert the "tags" value to an array
    const tags = formData.get("tags");
    const tagsArray = tags.split(',').map(tag => tag.trim());

    const post = Object.fromEntries(formData.entries());
    post.tags = tagsArray;
    console.log(post);
    createPost(createPostUrl, post);
    alert("Your post was created!");
    window.location.reload();
  })
  
// show current user
showUserName();
showAvatar();
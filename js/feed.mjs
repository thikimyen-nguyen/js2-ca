import { showPosts, postsContentContainer} from "./posts/view-feed-posts.mjs";
import { newFeedsHtml} from "./posts/filter.mjs";
import { getFeedPostsUrl, getFoodPostsUrl, getGamePostsUrl, createPostUrl } from "./components/api-url.mjs";
import { createPostForm, postForm} from "./posts/create-new-post.mjs";
import { createPost } from "./components/fetch-token.mjs";
import { showUserName, showAvatar } from "./profile/show-user.mjs";
import { getSearchResults } from "./posts/search.mjs";
import { loader, message } from "./components/message.mjs";
// Show new feeds area UI
newFeedsHtml();

// filter and show posts
const selectFilter = document.querySelector("select");

/**
 * Show posts on feed page
 * @date 2023-10-12
 * Get all feed posts
 * Show posts as filter options
 */
async function showFeedHtml() {
    loader.innerHTML = "";
    try {
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
    } catch (error) {
        loader.classList.add("text-danger");
        loader.innerHTML = message("error", error);
    }
    
}
showFeedHtml();

// show form to create post
createPostForm();


/**
 * Get input from new post form and pass as param data to createPost(url, data)
 * @date 2023-10-12
 * 
 */
postForm.addEventListener("submit", function createNewPost(event) {
    try {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
    
        // Convert the "tags" value to an array
        const tags = formData.get("tags");
        const tagsArray = tags.split(',').map(tag => tag.trim());
    
        const post = Object.fromEntries(formData.entries());
        post.tags = tagsArray;
        createPost(createPostUrl, post);
        alert("Your post was created!");
        window.location.reload();
    } catch (error) {
        loader.classList.add("text-danger");
        loader.innerHTML = message("error", error);
    }
   
  })
  
// show current user
showUserName();
showAvatar();



// search funtion
getSearchResults();
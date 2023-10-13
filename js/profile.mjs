import { showUserName, showTitle, showAvatar, currentUserName } from "./profile/show-user.mjs";
import { createPostForm, postForm} from "./posts/create-new-post.mjs";
import { createPost } from "./components/fetch-token.mjs";
import { showPosts, postsContentContainer,postsHtml} from "./posts/view-feed-posts.mjs";
import { profileUrl, authorParam, createPostUrl} from "./components/api-url.mjs";
import { getSearchResults } from "./posts/search.mjs";
import { loader, message } from "./components/message.mjs";
// show current user
showUserName();
showTitle();
showAvatar();

// show form to create post
createPostForm();



/**
 * Get input from new post form and pass as param data to createPost(url, data)
 * @date 2023-10-13
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

// show user posts only
async function showUserPosts() {
  loader.innerHTML = "";
  try {
    const currentUserUrl = `${profileUrl}/${currentUserName}/posts${authorParam}`;
    await showPosts(currentUserUrl);
   
  } catch (error) {
    loader.classList.add("text-danger");
    loader.innerHTML = message("error", error);
  }
}
showUserPosts();


// search funtion
getSearchResults();
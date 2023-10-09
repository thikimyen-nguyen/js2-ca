import { showUserName, showTitle, showAvatar, currentUserName } from "./profile/show-user.mjs";
import { createPostForm, postForm} from "./posts/create-new-post.mjs";
import { createPost } from "./components/fetch-token.mjs";
import { showPosts, postsContentContainer } from "./posts/view-feed-posts.mjs";
import { profileUrl, authorParam, createPostUrl} from "./components/api-url.mjs";
// show current user
showUserName();
showTitle();
showAvatar();

// show form to create post
createPostForm();

// get form input and post data to API
postForm.addEventListener("submit", function getFormValue(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries())
    createPost(createPostUrl, post);
    alert("Your post was created!");
    window.location.reload();
  })

// show user posts only
const currentUserUrl = `${profileUrl}/${currentUserName}/posts${authorParam}`;
showPosts(currentUserUrl);
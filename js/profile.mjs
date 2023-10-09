import { showUserName, showTitle, showAvatar, currentUserName } from "./profile/show-user.mjs";
import { createPostForm, postForm} from "./posts/create-new-post.mjs";
import { createPost } from "./components/fetch-token.mjs";
import { showPosts, postsContentContainer } from "./posts/view-feed-posts.mjs";
import { profileUrl, authorParam} from "./components/api-url.mjs";
// show current user
showUserName();
showTitle();
showAvatar();

// create new post not yet
createPostForm();

// show user posts only
const currentUserUrl = `${profileUrl}/${currentUserName}/posts${authorParam}`;
showPosts(currentUserUrl);
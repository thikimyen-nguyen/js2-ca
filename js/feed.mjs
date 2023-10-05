import { showPosts, getPosts } from "./posts/view-feed-posts.mjs";
import {  getFeedPostsUrl} from "./components/api-url.mjs";
 showPosts(getFeedPostsUrl);

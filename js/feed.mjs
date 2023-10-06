import { showPosts, postsContentContainer } from "./posts/view-feed-posts.mjs";
import { newFeedsHtml} from "./posts/filter.mjs";
import { getFeedPostsUrl, getFoodPostsUrl, getGamePostsUrl } from "./components/api-url.mjs";

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

 
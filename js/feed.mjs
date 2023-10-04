import { showPosts } from "./posts/view-feed-posts.mjs";
import { newFeedsHtml} from "./posts/filter.mjs";
import { getFeedPostsUrl, getActivePostsUrl } from "./components/api-url.mjs";


showPosts(getFeedPostsUrl);
newFeedsHtml();

const filterOption = document.querySelector("select");
console.log(filterOption.value )
function filterActive() {
    if (filterOption.value === "1") {
        console.log(filterOption.value )

    }

}



filterOption.addEventListener("change", filterActive())
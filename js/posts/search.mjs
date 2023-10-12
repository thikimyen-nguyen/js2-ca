/**
 * get source of posts to be searched
 * create function to filter posts with param
 * get input search and pass as param
 */
 import { feedContainer} from "./filter.mjs";
 import { postsHtml, postsContentContainer } from "./view-feed-posts.mjs";

// get source of posts to be searched
const posts = JSON.parse(localStorage.getItem("currentPosts"));
console.log(posts);
// create function to filter posts with param
function search(param) {
  const filteredPosts = posts.filter((post) => {
   
    if (post.body !== null && post.title !== null) {
      if (post.title.toLowerCase().includes(param) || post.body.toLowerCase().includes(param) || post.tags.join(" ").toLowerCase().includes(param)) {
        return post
      }
    }
  });
  return filteredPosts
}

// get input search and pass as param
const searchInput = document.querySelector(".search-form");
function getSearchResults() {
    searchInput.addEventListener("submit", function (event) {
        event.preventDefault();
        const searchValue = event.target.search.value.toLowerCase();
        const results = search(searchValue);
        const numberOfResults = results.length;
        searchInput.reset();
      //   display in html
        postsContentContainer.innerHTML = "";
        feedContainer.classList.add("text-primary", "fs-3");
        feedContainer.innerHTML = `${numberOfResults} results were found.`;
          postsHtml(results);
        
      
      })
}
export {search, getSearchResults}

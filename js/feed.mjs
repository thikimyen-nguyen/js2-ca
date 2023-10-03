import { getFeedPostsUrl } from "./components/api-fetch.mjs";
import { getData } from "./components/fetch-token.mjs";


// fetch posts to show on feed page
const posts = document.querySelector(".posts");

async function getPosts(url) {
    try {
        getData;
        const response = await fetch(url, getData);
        console.log(response);
        const posts = await response.json();
        console.log(posts);
        return posts;
    } catch (error) {
        console.log(error);
    }
  }
  getPosts(getFeedPostsUrl);

// display posts

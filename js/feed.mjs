import { getFeedPostsUrl } from "./components/api-fetch.mjs";
import { getData } from "./components/fetch-token.mjs";


// fetch posts to show on feed page
const postsContainer = document.querySelector(".posts");

async function getPosts(url) {
    try {
        getData;
        const response = await fetch(url, getData);
        // console.log(response);
        const posts = await response.json();
       
        return posts;
    } catch (error) {
        console.log(error);
    }
  }

  async function showPosts() {
    const posts = await getPosts(getFeedPostsUrl);
    console.log(posts)
    for (let i = 0; i < posts.length; i++) {
        const {title, body, author} = posts[i];
        const {name} = author;
        console.log(name);
        postsContainer.classList.add("pt-3")
        const content = document.createElement("div");
        const postTitle = document.createElement("h5");
        const postBody = document.createElement("p")
        postTitle.innerText = title;
        postBody.innerText = body;
        postsContainer.append(content);
        content.append(postTitle, postBody);
      
    }
  }
 showPosts();
// display posts
// function postContent(posts) {
//     postsContainer.classList.add("pt-3")
//     const content = document.createElement("div");
//     content.innerText = title;
//     postsContainer.append(content);
//     console.log(postsContainer)
// }

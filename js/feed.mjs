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
        // console.log(name);
        // post header
        const postHeadContainer = document.createElement("div");
        postHeadContainer.classList.add("d-flex", "flex-row", "align-items-center");
        // post header - avatar
        const postAvatar = document.createElement("div");
        postAvatar.classList.add("custom-avatar-shape", "col-1");
        const authorAvatar = document.createElement("div");
        authorAvatar.classList.add("custom-avatar");
        const authorImage = document.createElement("img");
        authorImage.src = "../asset/images/pexels-rachel-claire-4993220.jpg";
        authorImage.alt = "sample avatar";
        authorAvatar.append(authorImage);
        postAvatar.append(authorAvatar);
        postHeadContainer.append(postAvatar);

       

        // post content
        postsContainer.classList.add("pt-3")
        const content = document.createElement("div");
        const postTitle = document.createElement("h5");
        const postBody = document.createElement("p")
        postTitle.innerText = title;
        postBody.innerText = body;
        postsContainer.append(content);

        // show full post
        content.append(postHeadContainer,postTitle, postBody);
      
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

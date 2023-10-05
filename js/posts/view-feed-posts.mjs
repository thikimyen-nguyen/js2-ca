
import { getData } from "../components/fetch-token.mjs";
import { timeAgo } from "../components/time-calculator.mjs";

// fetch posts to show on feed page
const postsContentContainer = document.querySelector(".posts");

async function getPosts(url) {
    try {
        getData;
        const response = await fetch(url, getData);
        // console.log(response);
        const posts = await response.json();
       console.log(posts)
        return posts;
    } catch (error) {
        console.log(error);
    }
  }

  async function showPosts(url) {
    const posts = await getPosts(url);
    console.log(posts)
    for (let i = 0; i < posts.length; i++) {
        const {title, body, author, created, _count, media} = posts[i];
        const {name, avatar} = author;
        const {comments, reactions} = _count;
        // post header
        const postHeadContainer = document.createElement("div");
        postHeadContainer.classList.add("d-flex", "flex-row", "align-items-center");
        // post header - avatar
        const postAvatar = document.createElement("div");
        postAvatar.classList.add("custom-avatar-shape", "col-1");
        const authorAvatar = document.createElement("div");
        authorAvatar.classList.add("custom-avatar");
        const authorImage = document.createElement("img");
        if (avatar === null || !avatar) {
            authorImage.src = "../asset/images/pexels-rachel-claire-4993220.jpg";
        } else {
            authorImage.src = avatar;
        }
        authorImage.alt = "User avatar";
        authorAvatar.append(authorImage);
        postAvatar.append(authorAvatar);
        // post header - author content  
        const authorContainer = document.createElement("div");
        authorContainer.classList.add("ps-2");
        const authorName = document.createElement("h4");
        authorName.classList.add("m-0", "font-weight-bold");
        const createdDate = document.createElement("p");
        createdDate.classList.add("m-0", "text-muted");
        authorName.innerText = name;
        // get time ago and show html
        createdDate.innerText = timeAgo(created);
        authorContainer.append(authorName, createdDate);
        // append for post header
        postHeadContainer.append(postAvatar, authorContainer);

        // post content
        
        const content = document.createElement("div");
        content.classList.add("p-3", "bg-white", "mb-2");
        const postTitle = document.createElement("h5");
        const postBody = document.createElement("p");
        const postMedia = document.createElement("img");
        postMedia.classList.add("w-100", "w-md-50")
        postTitle.innerText = title;
        postBody.innerText = body;
        if (media === null || !media) {
            postMedia.style.display = "none";
        } else {
            postMedia.src = media;
        }
        postMedia.alt = "user post image";
        

        //  post reaction - show like/comments
        const showReaction = document.createElement("div");
        showReaction.classList.add("d-flex", "flex-row", "justify-content-between");
        const reactionIcon = document.createElement("i");
        reactionIcon.classList.add("bi", "bi-heart-fill");
        reactionIcon.innerText = reactions;
        const showComments = document.createElement("p");
        showComments.innerText = `${comments} Comments`;
        showReaction.append(reactionIcon, showComments);
        //  post reaction - action
        const breakLine = document.createElement("hr");
        const reactionsContainer = document.createElement("div");
        reactionsContainer.classList.add("d-flex", "flex-row", "justify-content-evenly");
        const likeIcon = document.createElement("i");
        likeIcon.classList.add("bi", "bi-hand-thumbs-up");
        likeIcon.innerText = "Like";
        const commentIcon = document.createElement("i");
        commentIcon.classList.add("bi", "bi-chat-left-text");
        commentIcon.innerText = "Comment";
        const shareIcon = document.createElement("i");
        shareIcon.classList.add("bi", "bi-share");
        shareIcon.innerText = "Share";
        reactionsContainer.append(likeIcon, commentIcon, shareIcon);
        // show full post
        
        content.append(postHeadContainer,postTitle, postBody, postMedia, showReaction, breakLine, reactionsContainer);
        postsContentContainer.append(content);
    }
  }
  export {showPosts, postsContentContainer}
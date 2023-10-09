import {authorParam, createPostUrl  } from "./components/api-url.mjs";
import { getPosts } from "./components/fetch-token.mjs";
import { timeAgo } from "./components/time-calculator.mjs";
import { showUserName } from "./profile/show-user.mjs";

// get id post and create single post id
const querryString = document.location.search;
const param = new URLSearchParams(querryString);
const id = param.get("id");

const postUrl = createPostUrl + "/" +id + authorParam;
// show a single post
const postContentContainer = document.querySelector(".post");
async function showSinglePost(url) {
  const post = await getPosts(url);
  console.log(post)
  const {title, body, author, created, _count, media, id} = post;
  const {name, avatar} = author;
  const {comments, reactions} = _count;
  // post header
  const postHead = document.createElement("div");
  postHead.classList.add("d-flex", "flex-row", "align-items-center", "col-8", "col-lg-10");

  // add delete/edit functions html
  const headContainer = document.createElement("div");
  const postOptions = document.createElement("select");
  headContainer.classList.add("d-flex", "flex-row", "col-12");
  postOptions.classList.add("form-select", "custom-sort");
  postOptions.ariaLabel = "filter options";

  // options to filter
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Options";
  defaultOption.value = "";
  const optionOne = document.createElement("option");
  optionOne.value = "delete";
  optionOne.textContent = "Edit";
  const optionTwo = document.createElement("option");
  optionTwo.value = "delete";
  optionTwo.textContent = "Delete";

  postOptions.append(defaultOption, optionOne, optionTwo);

  headContainer.append(postHead, postOptions);
  
  // post header - avatar
  const postAvatar = document.createElement("div");
  postAvatar.classList.add("custom-avatar-shape", "col-2", "col-lg-1");
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
  authorContainer.classList.add("ps-2", "col-12");
  const authorName = document.createElement("h4");
  authorName.classList.add("m-0", "font-weight-bold");
  const createdDate = document.createElement("p");
  createdDate.classList.add("m-0", "text-muted");
  authorName.innerText = name;
  // get time ago and show html
  createdDate.innerText = timeAgo(created);
  authorContainer.append(authorName, createdDate);
  // append for post header
  postHead.append(postAvatar, authorContainer);

  // post content
  
  const content = document.createElement("div");
  content.classList.add("p-3", "bg-white", "mb-2");
  
  // add post content
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
  
  content.append(headContainer, postTitle, postBody, postMedia, showReaction, breakLine, reactionsContainer);
  postContentContainer.append(content);
}
showSinglePost(postUrl);

// show current user
showUserName();
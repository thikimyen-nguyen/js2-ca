import { getFoodPostsUrl } from "../components/api-url.mjs";
import { getData } from "../components/fetch-token.mjs";

// Create HTML for newfeeds filter
const feedContainer = document.querySelector(".feeds");
feedContainer.classList.add("d-flex", "flex-row", "justify-content-between", "bg-white", "p-3");
const newFeeds = document.createElement("h1");
newFeeds.classList.add("col-6", "col-md-7", "col-lg-8", "col-xl-10", "text-primary");
newFeeds.innerText = "New Feeds";
const filterCoontainer = document.createElement("select");
filterCoontainer.classList.add("form-select", "custom-sort");
filterCoontainer.ariaLabel = "filter options";

// options to filter
const defaultOption = document.createElement("option");
defaultOption.textContent = "All Posts";
defaultOption.value = "all";
const optionOne = document.createElement("option");
optionOne.value = "food";
optionOne.textContent = "Food Posts";
const optionTwo = document.createElement("option");
optionTwo.value = "game";
optionTwo.textContent = "Game Posts";


function newFeedsHtml() {
    filterCoontainer.append(defaultOption, optionOne, optionTwo);

    feedContainer.append(newFeeds, filterCoontainer);
}

export {newFeedsHtml}

// get active posts


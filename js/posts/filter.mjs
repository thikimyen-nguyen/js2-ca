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
defaultOption.textContent = '--Filter';
defaultOption.setAttribute('selected', 'true');

const option1 = document.createElement("option");
option1.classList.add("option1");
option1.value = "1";
option1.textContent = "Food Posts";



function newFeedsHtml() {
    filterCoontainer.append(defaultOption, option1);

    feedContainer.append(newFeeds, filterCoontainer);
}

export {newFeedsHtml, option1}

// get active posts


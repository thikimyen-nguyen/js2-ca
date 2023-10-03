import { getFeedPostsUrl } from "./components/api-fetch.mjs";
import { fetchWithToken } from "./components/fetch-token.mjs";
console.log(getFeedPostsUrl);
fetchWithToken(getFeedPostsUrl);



const baseUrl = "https://api.noroff.dev/api/v1";
const registerEndpoint = "/social/auth/register";
const loginEndpoint = "/social/auth/login";
const feedPostsEndpoint = "/social/posts?_author=true";
const registerUrl = baseUrl + registerEndpoint;
const loginUrl = baseUrl + loginEndpoint;
const getFeedPostsUrl = baseUrl + feedPostsEndpoint;
export {registerUrl, loginUrl, getFeedPostsUrl}

const baseUrl = "https://api.noroff.dev/api/v1";
const registerEndpoint = "/social/auth/register";
const loginEndpoint = "/social/auth/login";
const feedPostsEndpoint = "/social/posts?_author=true";
const registerUrl = baseUrl + registerEndpoint;
const loginUrl = baseUrl + loginEndpoint;
const getFeedPostsUrl = baseUrl + feedPostsEndpoint;
const foodPostsEndpoint = "/social/posts?_author=true&_active=true&_tag=food";
const getFoodPostsUrl = baseUrl + foodPostsEndpoint;
const lifePostsEndpoint = "/social/posts?_author=true&_active=true&_tag=life";
const getLifePostsUrl = baseUrl + lifePostsEndpoint;
export {registerUrl, loginUrl, getFeedPostsUrl, getFoodPostsUrl, getLifePostsUrl}

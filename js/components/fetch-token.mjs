const givenToken = localStorage.getItem("accessToken");
// get data with token
const getData = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${givenToken}`,
    },
   
  };
// get all posts
async function getPosts(url) {
try {
    getData;
    const response = await fetch(url, getData);
    const posts = await response.json();
    
    return posts;
} catch (error) {
    console.log(error);
}
}
  
export {givenToken, getData, getPosts}
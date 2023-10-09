const givenToken = localStorage.getItem("accessToken");
// get method with token
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

// post method data with token

async function createPost(url, data) {
  try {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${givenToken}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

// delete method with token
async function deletePost(url, data) {
  try {
    const postData = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${givenToken}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export {givenToken, getData, getPosts, createPost, deletePost}

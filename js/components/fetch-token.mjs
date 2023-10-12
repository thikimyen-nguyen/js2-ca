/** 
 * Get accessToken from local storage
 * Create functions to API with header included token
 */
const givenToken = localStorage.getItem("accessToken");

// GET header
const getData = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${givenToken}`,
    },
  };



/**
 * Get all Feed posts
 * @date 2023-10-12
 * @param {string} url This is an API link to get posts
 * @returns {Array} This is an array of post objects. Later using these as param in showPosts function
 */
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



/**
 * A login user can create a new post with this function
 * @date 2023-10-12
 * @param {string} url This is a link to POST a new post to API
 * @param {object} data This is an object with data required for a new post
 * @returns {object} Return a new object
 * ```js
 * // Example of return object
 * {
  "id": 0,
  "title": "string",
  "body": "string",
  "tags": ["string"],
  "media": "https://url.com/image.jpg",
  "created": "2022-09-04T16:21:02.042Z",
  "updated": "2022-09-04T16:21:02.042Z",
  "_count": {
    "comments": 0,
    "reactions": 0
  }
}
 * ```
 */
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


/**
 * Login user can delete a post which belongs to his/her
 * @date 2023-10-12
 * @param {string} url This is a link to DELETE a post to API
 * @returns {} Return nothing
 */
async function deletePost(url) {
  try {
    const postData = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${givenToken}`,
      },
    };
    const response = await fetch(url, postData);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}


/**
 * Login user can update a post which belongs to his/her
 * @date 2023-10-12
 * @param {string} url This is a link to UPDATE a post to API
 * @param {object} data This is an object with data required for a updated post
 * @returns {object} Return an updated object post
 * ```js
 * // Example of return object
 * {
  "id": 0,
  "created": "2022-09-04T16:21:02.044Z",
  "updated": "2022-09-04T16:21:02.044Z",
  "title": "string",
  "body": "string",
  "tags": ["string"],
  "media": "https://url.com/image.jpg",
  "_count": {
    "comments": 0,
    "reactions": 0
  }
}
 * ```
 */
async function updatePost(url, data) {
  try {
    const postData = {
      method: 'PUT',
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
export {givenToken, getData, getPosts, createPost, deletePost, updatePost}

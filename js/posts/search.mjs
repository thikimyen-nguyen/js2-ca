/**
 * get source of posts to be searched
 * create function to filter posts with param
 * get input search and pass as param
 */

// get source of posts to be searched
const posts = JSON.parse(localStorage.getItem("currentPosts"));
console.log(posts);
// create function to filter posts with param
function search(param) {
  const filteredPosts = posts.filter((post) => {
   
    if (post.body !== null && post.title !== null) {
      if (post.title.includes(param) || post.body.includes(param) || post.tags.join(" ").includes(param)) {
        return post
      }
    }
  });
  return filteredPosts
}


export {search}

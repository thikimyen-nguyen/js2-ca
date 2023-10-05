
const addPostButton = document.querySelector(".add-post-button");
const postForm = document.querySelector(".create-post-form");
const cancelFormButton = document.querySelector("#cancel-form-button");


postForm.classList.add("d-none");

addPostButton.addEventListener("click", function showForm() {
  postForm.classList.remove("d-none");
  postForm.classList.add("d-block");
  addPostButton.classList.add("d-none");
})

cancelFormButton.addEventListener("click", function hideForm() {
  addPostButton.classList.remove("d-none");
  addPostButton.classList.add("d-block");
  postForm.classList.add("d-none");
  
})



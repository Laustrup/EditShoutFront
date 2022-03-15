
// Deletes user from id
async function deleteUser() {
    let userId = sessionStorage.getItem("user_id");
    await fetch("http://localhost:8090/delete_user/:"+userId,{method: 'DELETE'});
    document.location.href = "http://localhost:8080/";
    alert("User have been deleted");
}

async function deletePost(id) {
    await fetch("http://localhost:8090/delete_post/:" + id,{method: 'DELETE'});
    renderPosts();
}

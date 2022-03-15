
async function createUser() {

    // Attributes from form
    const username = document.getElementById("new_user_username").value;
    const password = document.getElementById("new_user_password").value;
    const description = document.getElementById("new_user_description").value;
    const gender = document.getElementById("new_user_gender").value;

    const user = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            description: description,
            gender: gender,
        })
    }

    await fetch("http://localhost:8090/user", user);

    const response = await fetch("http://localhost:8090/user/username/:" + username);
    const fetchedUser = await response.json();

    sessionStorage.setItem("user_id",fetchedUser.id);
    sessionStorage.setItem("username",fetchedUser.username);
    document.location.href = 'http://localhost:8080/dashboard/';
}

async function createPost() {

    // Attributes from form
    const title = document.getElementById("new_post_title").value;
    const content = document.getElementById("new_post_content").value;
    const hashtag = document.getElementById("new_post_hashtags").value;
    const isPoliticalCorrect = document.getElementById("new_post_political_correct").value;

    const response = await fetch("http://localhost:8090/user/:"+sessionStorage.getItem("user_id"));
    const author = await response.json();

    console.log(author)

    const post = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author: author,
            title: title,
            content: content,
            hashtag: hashtag,
            isPoliticalCorrect: isPoliticalCorrect,
            date: new Date().toISOString(),
        })
    }

    await fetch("http://localhost:8090/post", post);
    renderPosts();
}

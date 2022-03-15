
async function editPost(id) {

    const title = document.getElementById("new_post_title_"+id).value;
    const content = document.getElementById("new_post_content_"+id).value;

    const response = await fetch("http://localhost:8090/post/:"+id);
    const post = await response.json();

    const edited = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: post.id,
            author: post.author,
            title: title,
            content: content,
            hashtag: post.hashtag,
            isPoliticalCorrect: post.isPoliticalCorrect,
            date: post.date
        })
    }
    await fetch("http://localhost:8090/post",edited);
    renderPosts();
}
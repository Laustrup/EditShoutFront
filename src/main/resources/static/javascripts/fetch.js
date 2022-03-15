
userInfo();
renderPosts();

async function renderPosts() {

    const response = await fetch("http://localhost:8090/posts");
    const posts = await response.json();
    renderHTML(posts);
}

async function userInfo() {
    let username = sessionStorage.getItem("username");
    document.getElementById("user_info_content").innerHTML += `<h2>Welcome ${username}</h2>`
}

async function filterPosts() {

    const response = await fetch("http://localhost:8090/posts");
    const posts = await response.json();

    const hashtag = document.getElementById("hashtag_filter").value;

    renderHTML(posts.filter(function(post) {return post.hashtag == hashtag;}));
}

function renderHTML(posts) {
    document.getElementById("dashboard_content").innerHTML = '';
    for (let i = 0; i < posts.length;i++) {

        // Post section, will add delete button, if user is creator
        if (posts[i].author.id == sessionStorage.getItem("user_id")) {
            document.getElementById("dashboard_content").innerHTML += `
               <div><p>---------------------------------------------------------------------------------------------</p></div>
               <tr><h3>${posts[i].title}</h3></tr>
               <th><p>Written: ${posts[i].date}</p></th>
               <th><p>By ${posts[i].author.username}</p></th>
               <th><h4>${posts[i].content}</h4></th>
               <th><p>#tag = ${posts[i].hashtag}</p></th>
               <th>
                    <input type="text" id="new_post_title_${posts[i].id}" value="${posts[i].title}" placeholder="Change title">
                    <input type="text" id="new_post_content_${posts[i].id}"  value="${posts[i].content}" placeholder="Change content">
                    <button onclick="editPost(${posts[i].id})">Edit</button>
               </th>
               
               <th><button class="negative_button" onclick="deletePost(${posts[i].id})">Delete</button></th>
               `
        }
        else {
            document.getElementById("dashboard_content").innerHTML += `
               <div><p>---------------------------------------------------------------------------------------------</p></div>
               <tr><h3>${posts[i].title}</h3></tr>
               <th><p>Written: ${posts[i].date}</p></th>
               <th><p>By ${posts[i].author.username}</p></th>
               <th><h4>${posts[i].content}</h4></th>
               <th><p>#tag = ${posts[i].hashtag}</p></th>
               `
        }

    }
}



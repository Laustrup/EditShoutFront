
// Can now check typed inputs
async function validateLogin() {

    let username = document.getElementById("username_login").value;
    let password = document.getElementById("password_login").value;

    const response = await fetch("http://localhost:8090/user/username/:" + username);
    const user = await response.json();

    if (user.password==password) {
        sessionStorage.setItem("user_id",user.id);
        sessionStorage.setItem("username",user.username);
        document.location.href = 'http://localhost:8080/dashboard/';
    }
}
function logout() {
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("username");
    document.location.href = 'http://localhost:8080/';
    alert("You have logged out...");
}


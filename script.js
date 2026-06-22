function registerUser()
{
    let username =
        document.getElementById("username").value;

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    let user =
    {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem(
        email,
        JSON.stringify(user)
    );

    alert("Registration Successful");

    window.location.href = "index.html";
}

function loginUser()
{
    let email =
        document.getElementById("loginEmail").value;

    let password =
        document.getElementById("loginPassword").value;

    let data =
        localStorage.getItem(email);

    if(data == null)
    {
        alert("User Not Found");
        return;
    }

    let user = JSON.parse(data);

    if(user.password === password)
    {
        localStorage.setItem(
            "loggedIn",
            "true"
        );

        window.location.href =
            "dashboard.html";
    }
    else
    {
        alert("Invalid Password");
    }
}
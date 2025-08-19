// login

let regForm = document.getElementById('signIn');

if (regForm) {
    regForm.addEventListener('submit', function (e) {
        e.preventDefault()
        let email = regForm.querySelector('#email').value.trim();
        let password = regForm.querySelector('#password').value.trim();
        signIn({ email, password });

    });
}


function signIn(userCredentials) {
    let user = JSON.parse(localStorage.getItem('user')) || [];
    let userRes = user.find((item) => item.email === userCredentials.email || item.password === userCredentials.password)
    if ((userCredentials.email === userRes.email) && (userCredentials.password === userRes.password)) {
        window.location.href = "http://127.0.0.1:5500/DSA/loginApp/dashboard.html";
    } else {
        alert("Invalid Credentials, Please try again!");
    }
}



// signUp
let form = document.querySelector('#signUp');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let username = form.querySelector('#username').value.trim();
        let email = form.querySelector('#email').value.trim();
        let password = form.querySelector('#password').value.trim();

        signUp({ username, email, password });
        // form.reset();

    });
}

function signUp(user) {
    let existingData = JSON.parse(localStorage.getItem('user')) || [];
    existingData.push(user);
    localStorage.setItem('user', JSON.stringify(existingData));
}


function edit(email) {

    let profiles = JSON.parse(localStorage.getItem('user')) || [];
    let user = profiles.find((item) => item.email === email);

    if (user) {
        // Store user temporarily
        localStorage.setItem('editUser', JSON.stringify(user));
        window.location.href = "http://127.0.0.1:5500/DSA/loginApp/singup.html";
        // window.location.href = "http://127.0.0.1:5500/DSA/loginApp/singup.html";
        // let form = document.querySelector('#signUp');
        // form.querySelector('#username').value = user.username;
        // form.querySelector('#email').value = user.email;
        // form.querySelector('#password').value = user.password;
    }


}

function users() {
    let usersProfile = JSON.parse(localStorage.getItem('user')) || [];

    usersProfile.forEach((item, idx) => {
        let newRow = document.createElement('tr');
        newRow.innerHTML =
            `
                    <td>${idx + 1}</td>
                    <td>${item.username}</td>
                    <td>${item.email}</td>
                    <td>${item.password}</td>
                    <td>
                        <label onclick="edit('${item.email}')">Edit</label> |
                        <label>Delete</label>
                        </td>
                    `;

        let profileTable = document.getElementById('tbody');

        profileTable.appendChild(newRow)
    });



}

window.addEventListener('DOMContentLoaded', () => {
    users();
})
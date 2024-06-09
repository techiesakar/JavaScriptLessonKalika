// selecting HTML Elements
let form = document.getElementById("form");
let userName = document.getElementById("username");
let userEmail = document.getElementById("useremail");
let userPassword = document.getElementById("userpswd");
let confirmPassword = document.getElementById("confirmPswd");
let submitBtn = document.getElementById("submitBtn");
let errorMessageEle = document.getElementById("error-message");

const signUpELe = document.querySelector(".signUp-page")
const loggedInMessageEle = document.querySelector(".logged-in")


// regex exp
let userRegex = /^[A-Za-z]+[A-Za-z0-9_]{7,29}$/
let emailRegex = /^[\w._-]+@[\w.-]+\.[\w]{2,4}$/

// Function to toggle password visibility
function togglePasswordVisibility(inputField, eyeIcon) {
    let type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
    inputField.setAttribute('type', type);
    eyeIcon.setAttribute('name', type === 'password' ? 'eye-off' : 'eye');
}

// Event listeners for toggling password visibility
document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', () => {
        let inputId = icon.dataset.target;
        console.log(inputId);
        let inputField = document.getElementById(inputId);
        togglePasswordVisibility(inputField, icon);
    });
});

submitBtn.addEventListener('click', (e) => {

    document.getElementById("userPasswordError").textContent = "";

    // storing messages
    let message;
    let messages = [];

    if (userRegex.test(userName.value)) {
        console.log("Username is valid")
    }
    if (emailRegex.test(userEmail.value)) {
        console.log("Useremail is valid")
    }

    // check password length
    if (userPassword.value.length < 6) {
        message = "Password must be at least 6 characters";
        document.getElementById("userPasswordError").textContent = message;
        userPassword.style.border = "1px solid red"
        messages.push(message);
    }
    if (userPassword.value.length >= 16) {
        message = "Password must not be more than 16 characters";
        document.getElementById("userPasswordError").textContent = message;
        messages.push(message);
    }
    // if (userPassword.value != confirmPassword.value) {
    //     message = "Password didn't matched";
    //     messages.push(message);
    // }

    if (messages.length > 0) {
        errorMessageEle.innerHTML = "";
        e.preventDefault();
        messages.map((mssg) => {
            errorMessageEle.innerHTML += `
			<ul>
				<li class="list-disc text-red-500">${mssg}</li>
			</ul>`;
        })
    }



    //fetch 
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            username: userName.value,
            password: userPassword.value,
            expiresInMins: 30, // optional, defaults to 60
        })
    })
        .then(res => {
            if (res.status == 200) {
                loggedInMessageEle.classList.remove("hidden")
                loggedInMessageEle.textContent = "Logged In"
                signUpELe.classList.add("hidden")
            }
            return res.json()
        })
        .then((data) => {
            console.log(data)

        }).catch((err) => {
            console.log(err)
        })
});


const whoAmI = async () => {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MTc4MTk4NDUsImV4cCI6MTcxNzgyMzQ0NX0.BwJSZxtDcTMLRC9APdBdhHXT4bRUdyxT6wkrexB7-i4"
    /* providing token in bearer */
    fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })
        .then(res => {
            if (res.status == 200) {
                loggedInMessageEle.classList.remove("hidden")
                loggedInMessageEle.textContent = "Logged In"
                signUpELe.classList.add("hidden")
            }
            return res.json()
        })
        .then(console.log);
}

whoAmI()

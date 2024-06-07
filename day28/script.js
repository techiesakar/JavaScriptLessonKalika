const handleSubmit = () => {
    // e.preventDefault()
    const email = document.forms["signup"]["email"].value;
    const password = document.forms["signup"]["password"].value;
    const confirmPassword = document.forms["signup"]["confirmPassword"].value;

    validatePassword(password, confirmPassword)
    validateEmail(email)
    return false
}


const validateEmail = (email) => {
    const emailEle = document.forms["signup"]["email"]
    const emailErrorEle = document.getElementById("email-error")

    if (email.length < 10) {
        // if false
        emailEle.style.borderColor = "red"
        emailErrorEle.classList.remove("hidden")
        emailErrorEle.textContent = "Email must be at least 10 characters"
    }
    else {
        emailErrorEle.classList.add("hidden")
        emailErrorEle.textContent = ""

    }

}

const validatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {

    }

}
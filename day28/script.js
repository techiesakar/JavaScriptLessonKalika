const handleSubmit = () => {
    const email = document.forms["signup"]["email"].value;
    alert(email)
    const password = document.forms["signup"]["password"].value;
    const confirmPassword = document.forms["signup"]["confirmPassword"].value;

    validatePassword(password, confirmPassword)
    validateEmail(email)
    return false
}


const validateEmail = (email) => {
    if (email.length < 10) {
        alert("Email must be at least 10 characters")
        return false
    }
}

const validatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
        alert("Passwords do not match")
        return false
    }
}
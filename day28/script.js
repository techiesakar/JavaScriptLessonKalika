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
    const emailRegex = /[A-Za-z0-9]+(?:[.][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[a-zA-Z]{2,3}/

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
    const phoneRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    if (password !== confirmPassword) {

    }
}

//              /[abc]/                   /^[abc]$/
const stringRegex = /[abc]/ // a or b or c - only
// console.log(stringRegex.test("hellboworld"))



// const hellBoi = "hellboi"
// console.log(hellBoi.match(stringRegex), "helloboi matched or not")

const phoneNumber = "9867710444"

const phoneRegex1 = /[0-9]/
const phoneRegex2 = /\d/

console.log(phoneRegex1.test(phoneNumber), "regx 1"
)

console.log(phoneRegex2.test(phoneNumber), "regx 2")

// for mobile numbers

const phoneRegex = /^[9][87][0-9]{8}$/

const newPhone = prompt("enter phone number")
if (phoneRegex.test(newPhone)) {
    alert("Phone number is matched")
}
else {
    alert("Phone number is not matched")
}



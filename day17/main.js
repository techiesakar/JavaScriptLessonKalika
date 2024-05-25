
const passwordField = document.getElementById("passwordField")
const generateBtn = document.getElementById("generateBtn")

const lengthInput = document.getElementById("length")

let mySring = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_?:<>0123456789"


function generatePassword() {
    let randomPassword = ""
    const lengthValue = parseInt(lengthInput.value)

    for (i = 0; i < lengthValue; i++) {
        const indexForString = Math.floor(Math.random() * mySring.length)
        const currentRandomString = mySring[indexForString]
        randomPassword += currentRandomString
    }
    passwordField.innerText = randomPassword
}


generatePassword()




generateBtn.addEventListener("click", generatePassword)

lengthInput.addEventListener("change", generatePassword)



















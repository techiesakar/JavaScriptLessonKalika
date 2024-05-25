
const passwordField = document.getElementById("passwordField")
const generateBtn = document.getElementById("generateBtn")



let mySring = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_?:<>0123456789"



let random5String = ""

function generatePassword() {
    for (i = 0; i < 10; i++) {
        const indexForString = Math.floor(Math.random() * mySring.length)
        const currentRandomString = mySring[indexForString]
        random5String += currentRandomString
    }
    return random5String
}


passwordField.innerText = generatePassword()


generateBtn.onclick = function () {
    random5String = ""
    passwordField.innerText = generatePassword()
}



















const showHideBtns = document.querySelectorAll(".showHide") // 2 buttons


function validate() {
    alert("validating")
}


for (i = 0; i < showHideBtns.length; i++) {
    showHideBtns[i].addEventListener("click", function () {
        showHidePassword(this.name)
    })
}


function showHidePassword(buttonName) {
    let inputFieldName

    if (buttonName === "confirmPassButton") {
        inputFieldName = "confirmPassword"
    }

    else if (buttonName === "showPassBtn") {
        inputFieldName = "password"
    }

    const inputField = document.forms["signUpForm"][inputFieldName]

    let inputFieldType = inputField.type // text or password

    inputField.type = inputFieldType === "password" ? "text" : "password"

}

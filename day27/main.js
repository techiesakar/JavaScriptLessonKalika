const showHideBtns = document.querySelectorAll(".showHide")


function validate() {
    alert("validating")
}


for (i = 0; i < showHideBtns.length; i++) {
    // showHideBtns[i].addEventListener("click", function () {
    //     console.log(this.name, "hey this")
    // })

    showHideBtns[i].addEventListener("click", function () {
        // console.log(this.name)
        showHidePassword(this.name)
    })




}


function showHidePassword(buttonName) {
    let inputField
    if (buttonName === "confirmPassButton") {
        inputField = "confirmPassword"
    }

    else if (buttonName === "showPassBtn") {
        inputField = "password"
    }
    document.forms["signUpForm"][inputField].type = document.forms["signUpForm"][inputField].type === "password" ? "text" : "password"

}

const principalInputEle = document.getElementById("principalInput")

const timeEle = document.getElementById("timeInput")

const rateEle = document.getElementById("rateInput")


const simpleInterestEle = document.getElementById("simpleInterest")

const calculateBtn = document.getElementById("calculateBtn")



// calculateBtn.addEventListener("click", () => {
//     alert("Button is clicked")
// })



// calculateBtn.onclick = () => {
//     alert("clicked")
// }


// calculateBtn.onclick = function () {

// }

/**
 * This function will calculate the simple interest
 */
function calculateInterest() {
    const principal = parseFloat(principalInputEle.value)
    const time = parseFloat(timeEle.value)
    const rate = parseFloat(rateEle.value)

    const simpleInterest = (principal * time * rate) / 100
    simpleInterestEle.textContent = simpleInterest
}


// calculateBtn.onclick = function () {
//     calculateInterest()
// }
principalInputEle.oninput = function () {
    calculateInterest()
}
timeEle.oninput = function () {
    calculateInterest()
}
rateEle.oninput = function () {
    calculateInterest()
}

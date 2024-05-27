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
    const principal = principalInputEle.value
    const time = timeEle.value
    const rate = rateEle.value

    console.log(typeof principal, "is type of principal")

}

calculateBtn.onclick = function () {
    calculateInterest()
}
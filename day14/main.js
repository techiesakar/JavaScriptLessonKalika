const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")
const amPMElement = document.getElementById("am_pm")
const changeFormatElement = document.getElementById("changeFormat")

let format = "24"

function Timer() {
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if (format === "12") {
        if (hours >= 12) {
            if (hours > 12) {
                hours = hours - 12
            }
            amPMElement.textContent = "PM"
        }
        else {
            amPMElement.textContent = "AM"
        }
    }



    hoursElement.textContent = hours
    minutesElement.textContent = minutes
    secondsElement.textContent = seconds
}

changeFormatElement.onclick = function () {
    format = format === "12" ? "24" : "12"
    amPMElement.classList.toggle("hidden")
}

setInterval(Timer, 1000)
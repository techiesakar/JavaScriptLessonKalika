const hoursElement = document.getElementById("hour")
const minutesElement = document.getElementById("minute")
const secondsElement = document.getElementById("second")

setInterval(() => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const milliseconds = date.getMilliseconds()

    const hRotation = 30 * hours + minutes / 2
    const mRotation = 6 * minutes
    const sRotation = 6 * seconds

    hoursElement.style.transform = `rotate(${hRotation}deg)`
    minutesElement.style.transform = `rotate(${mRotation}deg)`
    secondsElement.style.transform = `rotate(${sRotation}deg)`
}, 1)
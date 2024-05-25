const lengthInput = document.getElementById("length")

function hello() {
    const date = new Date()
    const second = date.getSeconds()
    console.log("Current Second", second)
}

lengthInput.addEventListener("change", hello)
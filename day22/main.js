// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

async function fetchData() {
    // await delay(1000 * 5); // Delay for 10 seconds
    const data = await fetch("http://api.quotable.io/random")

    const result = await data.json()
    console.log(result.content)
    console.log(result.author)
}

fetchData()

document.querySelector("button").addEventListener("click", () => {
    fetchData()
})


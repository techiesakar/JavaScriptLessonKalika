


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

async function fetchData() {
    // await delay(1000 * 5); // Delay for 10 seconds
    const data = await fetch("http://api.quotable.io/random")

    const { content, author } = await data.json()
    console.log(content)
    console.log(author)
}

fetchData()

document.querySelector("button").addEventListener("click", () => {
    fetchData()
})


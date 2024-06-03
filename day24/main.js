const skipInput = document.querySelector("#skipInput")
const limitInput = document.querySelector("#limitInput")
const productBody = document.querySelector("#productBody")

let limit = 2
let skip = 0


const fetchData = async () => {
    productBody.innerHTML = ""
    const data = await fetch(`https://dummyjson.com/comments?limit=${limit}&skip=${skip}`)
    const { comments } = await data.json()
    comments.map((item) => {
        productBody.innerHTML = productBody.innerHTML + `           
         <tr class="bg-white border-b ">

        <td>${item.id}</td>
        <td>${item.body}</td>
        <td>${item.user.fullName}</td>
      </tr>`
    })
}

fetchData()

skipInput.addEventListener("input", (e) => {
    skip = e.target.value
    fetchData()
})

limitInput.addEventListener("input", (e) => {
    console.clear()
    limit = e.target.value
    fetchData()
})
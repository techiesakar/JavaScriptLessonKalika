console.log(country_list, "accessing country list");

let selectElement = document.querySelectorAll("select")

let fromSelect = document.querySelector('.from select')
let fromImg = document.querySelector('.from img')
let toSelect = document.querySelector('.to select')

for (let i = 0; i < selectElement.length; i++) {
    for (let currencyCode in country_list) {
        let option = document.createElement("option")
        option.className = "p-4 w-full text-sm"
        option.value = currencyCode

        option.innerHTML = ` ${currencyCode}`
        selectElement[i].append(option)
        if (i === 0) {
            if (currencyCode === "NPR") {
                option.selected = true
            }
        }
    }


}



fromSelect.addEventListener("change", async () => {
    let currencyCode = fromSelect.value
    console.log(currencyCode, "currency code");

    const hey = await fetchData(currencyCode)
    console.log(hey, "hey data")
    fromImg.src = `https://flagcdn.com/48x36/${country_list[fromSelect.value].toLowerCase()}.png`


    // fetch data
    // https://v6.exchangerate-api.com/v6/API_KEY/latest/${currencyCode}
})

const fetchData = async (currencyCode) => {
    try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/04eca69ca6f67666d7753c1e/latest/${currencyCode}`)

        if (!res.ok) {

            console.log("Data not found")
        }
        else {
            const data = await res.json()
            console.log(data, "consoling here")
            return data
        }
    }
    catch (error) {
        console.log(error)
    }
}
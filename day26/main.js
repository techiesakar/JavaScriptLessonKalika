console.log(country_list, "accessing country list");

let selectElement = document.querySelectorAll("select")

let fromSelect = document.querySelector('.from select')
let toSelect = document.querySelector('.to select')

for (let i = 0; i < selectElement.length; i++) {
    for (let currencyCode in country_list) {
        let option = document.createElement("option")
        option.value = currencyCode
        option.textContent = currencyCode
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



    // fetch data
    // https://v6.exchangerate-api.com/v6/API_KEY/latest/${currencyCode}
})

const fetchData = async (currencyCode) => {
    try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/API_KEY/latest/${currencyCode}`, {
            mode: 'no-cors'
        })

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
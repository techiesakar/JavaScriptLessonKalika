const tableBody = document.querySelector('tbody')
const tdClass = "border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"

const payload = {
    currency: "USD",
    sort: "rank",
    order: "ascending",
    offset: 0,
    limit: 5,
    meta: true
}

const fetchData = async () => {
    tableBody.innerHTML = ""
    const res = await fetch("https://api.livecoinwatch.com/coins/list", {
        method: 'POST',
        body: JSON.stringify(payload),

        headers: new Headers({
            'content-type': 'application/json',
            'x-api-key': '5acdda65-ebe6-430c-9858-ad4552cba141'
        })
    })

    const data = await res.json()

    data.map((item, i) => {
        // for sn
        let tr = document.createElement('tr')
        let tdSN = document.createElement('td')
        tdSN.className = tdClass
        tdSN.textContent = i + 1

        // for image
        let tdImage = document.createElement('td')
        tdImage.className = tdClass
        let imgEle = document.createElement('img')
        imgEle.src = item.png64
        imgEle.classList.add("size-6")
        tdImage.append(imgEle)

        // for coin name
        let tdName = document.createElement("td")
        tdName.className = tdClass
        tdName.textContent = item.name

        // for rate
        let tdRate = document.createElement("td")
        tdRate.className = tdClass
        tdRate.textContent = `$ ${parseFloat(item.rate).toFixed(2)}`


        // const tdIcon = document.createElement('td')
        // const tdCoin = document.createElement('td')
        // const tdPrice = document.createElement('td')

        tr.append(tdSN, tdImage, tdName, tdRate)
        tableBody.append(tr)
    })

}

fetchData()

setInterval(fetchData, 10 * 1000)


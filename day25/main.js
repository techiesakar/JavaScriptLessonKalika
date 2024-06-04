const payload = {
    currency: "USD",
    sort: "rank",
    order: "ascending",
    offset: 0,
    limit: 5,
    meta: false
}

const fetchData = async () => {
    const res = await fetch(new Request('https://api.livecoinwatch.com/coins/list'), {
        method: 'POST',
        body: JSON.stringify(payload),

        headers: new Headers({
            'content-type': 'application/json',
            'x-api-key': 'put your api'
        })
    })

    const data = await res.json()
    console.log(data)
}

fetchData()


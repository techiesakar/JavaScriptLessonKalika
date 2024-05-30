let p = new Promise((resolve, reject) => {
    let a = 12
    if (a == 1) {
        resolve("Passed")
    }
    else {
        reject({
            message: "Error fetching data"
        })
    }
})
p.then((data) => {
    console.log("This is in the then", data)
}).catch((err) => {
    console.log("This is in the catch", err.message)
})
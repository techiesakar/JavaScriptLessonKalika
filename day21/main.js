const gender = ["male", "female"]

const [boy, girl] = gender // destructuring in array
console.log(girl)

const User = {
    name: "sakar aryal",
    password: "nepal123",
    job: "frontend developer",
    address: "manigram",
    email: "techiesakar@gmail.com"
}


function fetchData() {
    // this is backend
    const { password, ...filteredData } = User // destructuring object and spread
    return filteredData
}

console.log(fetchData())
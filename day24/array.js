// const phones = ['iphone x', 'iphone 11', 'iphone 12', 'samsung s20', 'iphone x', 'samsung s21', 'iphone 13', "huawei mate 10"]
// console.log(phones)

// const selectedPhone = phones.find((phone) => phone === "iphone x")
// const selectedAllPhones = phones.filter((phone) => phone.includes("a"))



// console.log("I selected ", selectedPhone)
// console.log("I selected theses phones", selectedAllPhones)

// let cateory = "sports"

const brands = [
    {
        id: 1,
        name: "apple",
        products: [
            {
                id: 1,
                name: "iphone x"
            },
            {
                id: 2,
                name: "iphone 11"
            }
            ,
            {
                id: 3,
                name: "iphone 12"
            }
        ]
    }
    ,
    {
        id: 2,
        name: "samsung",
        products: [
            {
                id: 1,
                name: "samsung s20"
            },
            {
                id: 2,
                name: "samsung s21"
            }
            ,
            {
                id: 3,
                name: "samsung s22"
            }
        ]
    }
]

console.log(brands.find((brand) => brand.name === "apple").products)
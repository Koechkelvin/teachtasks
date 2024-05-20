const availableFoods = [
    {id: "qwe234dfh", name: "Burger", image:"🍔🍔", price: 234},
    {id: "qwe2356dxh", name: "pizza", image:"🍕🍕", price: 400},
    {id: "qwe2456yh", name: "meat", image:"🍖🍖", price: 500},
    {id: "qwe2785yh", name: "chicken", image:"🍗🍗", price: 1200},
] 
const foodPrice = availableFoods.filter((availableFoods) =>{
    return availableFoods.price >= 450
})
const foodPriceArray = foodPrice.map((foodPrice) =>{
    return foodPrice.price
})
const totalBill = foodPriceArray.reduce((prev,next) =>{
    return prev + next
})
console.log(`my total bill for items above 450 is:{totalBill}` );
//my total bill for items above 450 is 1700

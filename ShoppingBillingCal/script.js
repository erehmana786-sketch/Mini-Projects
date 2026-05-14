
let calculateTotal=(price, quantity) =>{
    return (price * quantity) 
}

let applyDiscount=(total, discountPercent)=> {
    return total - (total * discountPercent / 100)
}

let printBill=(itemName, price, quantity, discount) =>{
    let total = calculateTotal(price, quantity)
    let finalPrice = applyDiscount(total, discount)
   console.log(`Item:${itemName}, Price:${price}, Quantity:${quantity}, Total:${total}, Discount:${discount}%, FinalPrice:${finalPrice}`);
}
printBill("Shirt", 500, 2, 10)
printBill("Shoes", 2000, 1, 20)
printBill("Book", 300, 3, 0)
 
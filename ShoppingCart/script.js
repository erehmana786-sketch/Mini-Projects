let cart = [
  { item: "Shirt",  price: 500,  qty: 2 },
  { item: "Shoes",  price: 2000, qty: 1 },
  { item: "Book",   price: 300,  qty: 3 },
  { item: "Watch",  price: 5000, qty: 1 }
];

// Subtotal of items  
let subtotal=cart.map(val=>({
    item:val.item,
     subtotal :val.price*val.qty
    }))
    console.log(`Subtotal `, subtotal);
// total bill 
let total=0
cart.forEach(val=>{
    total=total+(val.price*val.qty)
})
console.log(`Total:`, total);

// find 1000+ price items 
let subtotals=0
let subitems =cart.filter(val=>(val.price*val.qty)>1000)
console.log(subitems);

// Print bill
let Total =0 
let bill = cart.forEach(val=>{
    let subtotal=val.price*val.qty
    Total=Total+subtotal
    console.log(`${val.item}: ${subtotal}`);
})
console.log("Total:",total);

// 10% discount on total 
let totalBill = 0
cart.forEach(val=>totalBill+=val.price*val.qty)
let discount = totalBill*10/100
let finalPrice = totalBill-discount
console.log("Total: ",totalBill);
console.log("Discount: ",discount);
console.log("Final price: ",finalPrice);
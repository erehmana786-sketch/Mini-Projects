// LIBRARY MANAGEMENT SYSTEM

let books = [
  { title: "Harry Potter",    author: "Rowling",  price: 800,  genre: "Fiction",  available: true  },
  { title: "Clean Code",      author: "Martin",   price: 2000, genre: "Tech",     available: false },
  { title: "Atomic Habits",   author: "Clear",    price: 1200, genre: "Self Help",available: true  },
  { title: "Dune",            author: "Herbert",  price: 900,  genre: "Fiction",  available: true  },
  { title: "Deep Work",       author: "Newport",  price: 1500, genre: "Self Help",available: false },
  { title: "JavaScript Info", author: "Kantor",   price: 0,    genre: "Tech",     available: true  }
];

// Available books 
let availableBooks=books.filter(val=>val.available===true)

// Tech books  
let techBooks = books.filter(val=>val.genre=="Tech")

// upto 1000 price books 
let expensiveBooks=books.filter(val=>val.price>1000)

// 15% discount on every book
let discountPrice=books.map(val=>{
   let calDiscount= Math.floor(val.price*0.15)
  let newPrice = val.price-calDiscount
   return{title:val.title,newPrice} 
  })

// Expensive book 
let expensiveBook=books.reduce((lowPrice , highPrice)=>{
     return highPrice.price > lowPrice.price ? highPrice : lowPrice 
})

// Book titles
let toString=books
.filter(val=>val.available===true)
.map(val=>val.title)

// genre wise count 
let genreCount = {}
books.forEach(val=>{
if (genreCount[val.genre]) {
  genreCount[val.genre]++
} else {
  genreCount[val.genre]=1
}
})

// Get catogery by price 
let getCatogery =books.map(val=>{
let catogeryName=""
if (val.price===0) {catogeryName ="Free"} 
else if (val.price>=1 && val.price<=999) catogeryName= "Budget"
else if(val.price>=1000) catogeryName= "Premium"
else catogeryName= "UNKNOWN"
return { title:val.title, catogeryName }
})

// Print summary
console.log("Available books: ",availableBooks);
console.log("Tech books: ",techBooks);
console.log("Upto 1000 price books: ",expensiveBooks);
console.log("15% discount on every book: ",discountPrice);
console.log("Expensive book",expensiveBook);
console.log("Available books: ",toString);
console.log("Genre wise count: ",genreCount);
console.log("Get catogery by price: ",getCatogery);
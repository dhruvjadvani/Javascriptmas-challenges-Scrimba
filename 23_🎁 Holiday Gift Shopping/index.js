import products from "./data.js";

/*
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/

function sortProducts(data){
    let resArr = data.map(val => { 
            return {
                product: val.product,
                price: val.price
            }
    });
    
    console.log(resArr);
    
    for(let i = 0; i < resArr.length; i++) {
        for(let j = i + 1; j < resArr.length; j++) {
            let pointerOne = i;
            let pointerTwo = j;
            // if(resArr[pointerTwo] >= resArr.length) {
            //     break;
            // }
            // console.log(`before ${resArr[pointerOne]}, ${resArr[pointerTwo]}`)
            
            if(resArr[pointerOne]["price"] > resArr[pointerTwo]["price"]) {
                let tempPrice = resArr[pointerOne]["price"];
                let tempProduct = resArr[pointerOne]["product"];
                
                resArr[pointerOne]["price"] = resArr[pointerTwo]["price"];
                resArr[pointerTwo]["price"] = tempPrice;
                
                 resArr[pointerOne]["product"] = resArr[pointerTwo]["product"];
                resArr[pointerTwo]["product"] = tempProduct;
            }
            
            // console.log(`after ${resArr[pointerOne]}, ${resArr[pointerTwo]}`)
            
        }
    }
    
    
    return resArr;
  
}

const listByCheapest = sortProducts(products);
console.log(listByCheapest);




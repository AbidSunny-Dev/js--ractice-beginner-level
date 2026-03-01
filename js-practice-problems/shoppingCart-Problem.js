let cart = [


    { name:'shampoo' , price:300 , quantity:4} ,
    { name:'Oil' , price:400 , quantity:4} ,
    { name:'soap' , price:200 , quantity:5} ,
    { name:'chips' , price:20 , quantity:7} ,
    { name:'vinegar' , price:1000 , quantity:1} ,



]

function totalCartCost(cart){

    let total = 0 ;

    for(const val of cart){

        total+=(val.price*val.quantity);
    }

    return total;





}



const result = totalCartCost(cart);

console.log(result);
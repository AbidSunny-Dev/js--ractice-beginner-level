let books =['bangla' , ' english', 'chemistry' , ' physics' ,'javaScript'];

// let fruits=['mango' ,'litchi', 'watermelon' , 'guava' , 'dragon'] ;


// if(books.includes('javaScript')){
//     console.log('Yes,there is!');
    
// }else{
// console.log('NO,There isnt any!');
// }




// let a = books.concat(fruits);

// console.log(a);


for (let i= 0 ; i<books.length ; i++){

    if(i%2 == 0){

        console.log(books[i]);
    }else{
        console.log("No");
    }
}
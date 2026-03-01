
function noDuplicate(name){

    let uniqueArray = [];

for (const val of name){

 if(uniqueArray.includes(val)==false){
    uniqueArray.push(val);
 }



}

return uniqueArray ;




}



let name =  ['abid' ,'sabid','gabid' , 'nabid' , 'dabid' , 'abid' , 'dabid' , 'gabid'];


let result = noDuplicate(name);

console.log(result);

console.log('-----------------------');

let numbers=[5,2,3,4,5,4,3,2,34,55,5,5,5,5];
result  = noDuplicate(numbers);
console.log(result);







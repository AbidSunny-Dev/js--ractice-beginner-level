function  sumOfOdds(numbers){

 let count = 0 ;
 let sum =0;

 for(const val of numbers){
    if(val%2 == 1){
      
     sum+=val;

     count++;
    }
 }

 return (sum/count);




}

let numbers=[2,3,4,5,6,7,8,9,10,11];


let result = sumOfOdds(numbers);
console.log(result);
function totalSum(numbers){


    let sum = 0 ; 
    for(const val of numbers){

        sum+=val ;
    }

    return sum ;




}

let numbers=[5,10,15,12,23,45];

const result = totalSum(numbers);

console.log(result);
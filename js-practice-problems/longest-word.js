


function findLongestWord(sentence) {


let arr = sentence.split(" ") ;

// console.log(arr) ;

let long_word = arr[0] ;



for(let i = 1 ; i<arr.length ; i++){

  if (arr[i].length > long_word.length){
    long_word = arr[i];
  }


}

return long_word ;





}


let sentence = 'I am Learning Programming to become a programmer' ;



const result = findLongestWord(sentence);

console.log(result);




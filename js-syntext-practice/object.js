// const person ={

//  name:'Abid',
//  id:'242-115-285',
//  section:61,

//  income : 9000

// };

// const keys = Object.keys(person).length;

// console.log(keys);

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};


for(const val in myObject){
    console.log(`key : ${val} | type : ${typeof myObject[val]}`);
}
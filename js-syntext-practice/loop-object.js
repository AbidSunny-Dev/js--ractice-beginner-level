const person={
    name:'Abid Ahmed Sunny',
    age:23,
    gender:'male',
    institution:'Metropolitan University' ,


}

// console.log(person.name);

// for(let prop in person){
//     console.log(prop);

//     console.log(person[prop]);

// }

const keys = Object.keys(person);
console.log(keys);
for (const val of keys){
    console.log(val ,':' ,person[val] );
}
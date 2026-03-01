const phone =[


    { name:'Samsung' , price:10000 , camera:'12mp' , storage:256},
    { name:'Xiaomi' , price:20000 , camera:'12mp' , storage:256},
    { name:'Iphone' , price:100000 , camera:'12mp' , storage:256},
    { name:'Oppo' , price:7000 , camera:'12mp' , storage:256},
    { name:'realme' , price:12000 , camera:'12mp' , storage:256},
    { name:'honor' , price:34000, camera:'12mp' , storage:256},




]

function geCheapestPhone(phones){

 let min  = phones[0];

for (const val of phones){

    
    if(val.price<min.price){
        min = val;
    }
}

return min.name ;

}



const result = geCheapestPhone(phone);

console.log(result);
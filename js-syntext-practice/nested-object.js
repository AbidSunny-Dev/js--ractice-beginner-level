const university={

 name:"MetroPolitan University",

 dept:['cse','bba' , 'english' , 'economics','eee'],

 cse_dept:{
    student:1500,
    faculty:150,
    faculty_name:{
        name1:'pulok',
        name2:'Mujammil',
    }
 }


}

console.log(university.cse_dept.student);
console.log(university.cse_dept.faculty_name.name1);

university.dept[0] = 'law';

console.log(university.dept[0]);
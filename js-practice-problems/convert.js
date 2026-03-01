function convertInch(inch){

  const feetFraction = inch /12 ;

  const feetNumber = parseInt(feetFraction);

  const remainingFeetnumber = inch % 12 ;

  const result  = feetNumber + ' fit ' + remainingFeetnumber  + ' inch' ;

  return result;





}


console.log(convertInch(75));
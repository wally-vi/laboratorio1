

function addTwoDigits(numbers) {
    if (numbers >=10) {
     res = 0;
     
    while (numbers >0.9) {
        res += numbers % 10;

        numbers = numbers / 10;
    
        
    }
   
    return  Math.trunc(res);
}

else{console.log('error')}

}
console.log(addTwoDigits(11))
module.exports = addTwoDigits

//funciona con pruebas puntuales
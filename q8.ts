// convert the temerature array of celcius to temerature array of fahrenheit

function arrayofDegreeCelciusToArrayOfFahrenheit(givenArray: number[]){
    let resultArray: number[] = [];
    for (let i=0; i<givenArray.length; i++){
        resultArray.push(((givenArray[i]*9)/5)+ 32);
    }
    return resultArray;
}

console.log(`Array containing temperatures in fahrenheit: [${arrayofDegreeCelciusToArrayOfFahrenheit([0, 37, 100])}]`);
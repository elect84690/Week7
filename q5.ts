// Factorial of positive numbers

function poitveNumbersFactorial(x: number){
    if (x > 0){
        let result = 1;
        for (let i = x; i >= 1; i--){
            result *= i; 
        }
        return result;
    }
}

console.log(poitveNumbersFactorial(5));
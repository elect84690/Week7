// calculate the sum of all elements of a given array

function sumOfElementsOfAnArray(givenArray: number[]){
    let result = 0;
    for (let i=0; i<givenArray.length; i++){
        result += givenArray[i];
    }
    return result;
}

console.log(sumOfElementsOfAnArray([1, 5, 8, -10]));
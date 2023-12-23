// given an array with integers generates an array with only positive integers 

function onlyPositveNumbersArray(givenArray: number[]){
    for (let i = 0; i < givenArray.length; i++){
        if (givenArray[i] < 0){
            givenArray.splice(i, 1);
            i--;
        }
    }
    return givenArray;
}

console.log(onlyPositveNumbersArray([-1, 2, -3, 0, -4, -5, 6]));
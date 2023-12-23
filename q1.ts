// function that returns an array with addition of a specified value at a specific index

function addNewValueInArrayAtGivenIndex(givenString: number[], givenValue: number, givenIndex: number){
    console.log(`Given Array: [${givenString}] 
    Given Value: ${givenValue};
    Given Index: ${givenIndex}`);
    givenString.splice(givenIndex, 0, givenValue);
    return givenString;
}

console.log(`New Array: [${addNewValueInArrayAtGivenIndex([1, 3, 4, 6], 5, 3)}]`);
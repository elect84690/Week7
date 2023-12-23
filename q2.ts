let shoppingCart: string[] = [];

function addItem(itemNumber: number, itemName: string){
    shoppingCart.splice(itemNumber, 0, itemName);
    return shoppingCart;
}

console.log(addItem(0, "Butter"));
console.log(addItem(1, "Bread"));
console.log(addItem(2, "Juice"));

function removeItem(itemNumber: number){
    shoppingCart.splice(itemNumber, 1);
    return shoppingCart;
}

console.log(removeItem(1));

function editItem(itemNumber: number, itemName: string){
    shoppingCart.splice(itemNumber, 1, itemName);
    return shoppingCart;
}

console.log(editItem(1, "Milk"));
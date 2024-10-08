const groceries = ["milk", "bread", "rise", "eggs", "salt", "vegetables"];

console.log(groceries);

console.log(groceries[1]);

console.log(groceries.length);

console.log(groceries[groceries.length - 1]);

console.log(groceries.pop());

groceries.push("chocolet", "candy");
console.log(groceries, groceries.length);

//const firstThreeItems = [groceries[0], groceries[1], groceries[2]];
const firstThreeItems = groceries.slice(0, 3);
console.log(firstThreeItems);

groceries.splice(2, 1);
groceries.unshift("rise");
groceries.splice(0, 2, "ketchup", "chili");
console.log(groceries);

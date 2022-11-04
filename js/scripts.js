//Business Logic

// Test1: "It should return a Pizza object with properties for sizeSelect, cheeseBoolean, meatArray, nonMeatArray, sauceSelect"
// Code: 
// const pizza1 = new Pizza("medium", true, ["sausage", "pepperoni"], ["jalapeno", "onion"], "marinara");
// Expected Output: 
// pizza1 /w {
//   size: "medium",
//   cheese: true,
//   meat: ["sausage", "pepperoni"],
//   non-meat: ["jalapeno", "onion"],
//   sauce: "marinara"
//   cost: 0
// }

function Pizza (sizeSelect, cheeseBoolean, meatArray, nonMeatArray, sauceSelect) {
  this.size = sizeSelect;
  this.cheese = cheeseBoolean;
  this.meat = meatArray;
  this.nonMeat = nonMeatArray;
  this.sauce = sauceSelect;
  this.cost = 0;
}







//UI Logic
const pizza1 = new Pizza("medium", true, ["sausage", "pepperoni"], ["jalapeno", "onion"], "marinara");


// Don't forget to add window.addEventListener("load", function);
//Business Logic

function Pizza (sizeSelect, cheeseBoolean, meatArray, nonMeatArray, sauceSelect) {
  this.size = sizeSelect;
  this.cheese = cheeseBoolean;
  this.meat = meatArray;
  this.nonMeat = nonMeatArray;
  this.sauce = sauceSelect;
  this.cost = 0;
}

// Test1: "It should check for 'medium' and add 13 to pizza1 cost"
// Code: 
// const pizza1 = new Pizza("medium", true, ["sausage", "pepperoni"], ["jalapeno", "onion"], "marinara");
// pizza1.totalCost();
// Expected Output:
// pizza1.cost === 13

Pizza.prototype.totalCost = function () {
  switch (this.size) {
    case ("small"):
      this.cost += 11;
      break;
    case ("medium"):
      this.cost += 13;
      break;
    case ("large"):
      this.cost += 15;
      break;
    default:
      this.cost += 0;
  }
  
  return this.cost
}




//UI Logic
const pizza1 = new Pizza("medium", true, ["sausage", "pepperoni"], ["jalapeno", "onion"], "marinara");


// Don't forget to add window.addEventListener("load", function);
//Business Logic

function Pizza (sizeSelect, cheeseBoolean, meatArray, nonMeatArray, sauceSelect) {
  this.size = sizeSelect;
  this.cheese = cheeseBoolean;
  this.meats = meatArray;
  this.nonMeats = nonMeatArray;
  this.sauce = sauceSelect;
  this.cost = 0;
}

// Test4: "It should check for ["jalapeno", "onion"] and add 1 to pizza1 cost"
// Code: 
// const pizza1 = new Pizza("medium", true, ["sausage", "pepperoni"], ["jalapeno", "onion"], "marinara");
// pizza1.totalCost();
// Expected Output:
// pizza1.cost === 17

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

  if (this.cheese) {
    this.cost += 1;
  }

  for (const meat of this.meats) {
    switch (meat) {
      case ("chicken"):
      this.cost += 2;
      break;
      case ("ham"):
      this.cost += 1;
      break; 
      case ("pepperoni"):
      this.cost += 1;
      break; 
      case ("sausage"):
      this.cost += 1;
      break; 
      default: 
      this.cost += 0;
    }
  }

  for (const nonMeat of this.nonMeats) {
    switch (nonMeat) {
      case ("pineapple"):
        this.cost += 1;
        break; 
      case ("jalapeno"):
        this.cost += 1;
        break;  
      case ("onion"):
        this.cost += 0;
        break; 
      case ("spinach"):
        this.cost += 1;
        break; 
      case ("mushroom"):
        this.cost += 1;
        break; 
      case ("olive"):
        this.cost += 1;
        break; 
      default:
        this.cost += 0;      
    }
  }
  
  return this.cost
}




//UI Logic
const pizza1 = new Pizza("medium", true, ["sausage", "pepperoni"], ["jalapeno", "onion"], "marinara");


// Don't forget to add window.addEventListener("load", function);
<!-- pseusdo code -->
Prompt: Create a website where a user can make a pizza. Have the options to choose individual toppings and size then give a total. 

define a Pizza function constructor (sizeSelect, cheeseBoolean, meatArray, non-meatArray, sauceSelect)
{
  this.size = sizeSelect;
  this.cheese = cheeseBoolean;
  this.meat = meatArray;
  this.non-meat = non-meatArray;
  this.sauce = sauceSelect;
  this.cost = 0;
}
  test if it makes a pizza obj pizza1

define Pizza.prototype.totalCost()
  define object prices = {
    size: {
      small: 11,
      medium: 13,
      large: 15
    }
    cheese: 1
    meat: {
      chicken: 2,  
      ham: 1,
      pepperoni: 1,
      sausage: 1
    }
    non-meat: {
      pineapple: 1,
      jalapeno: 1,
      onion: 0,
      spinach: 0,
      mushroom: 1,
      olive: 1
    }
  }

  loop through Pizza object keys, add values to get total?
  return total




      make this dynamic? as users select toppings, everytime call totalCost() to print updated cost

have a checkout() function attached with a button element type="submit" to print final pizza properties and cost

UI pseudocode:
radio form of images for size small, medium, large 
  put into 3 columns?

checkbox form for cheese (if checked, add cheese, if not checked, dont add cheese to final pizza output)

radio form for choice of sauce input that will go into final pizza output
  marinara, honey bbq, garlic parmesan, alfredo, ranch
    NON-MVP: make this a checkbox that when checked, will reveal radio form for sauces

checkbox form for choice of meat input: chicken, ham, pepperoni, sausage

checkbox form for choice of non-meat input: pineapple, jalapeno, onion, spinach, mushroom, olive

"checkout" button element with type="submit"

area below to show final pizza properties and price after hitting submit



NON-MVP: add pictures for each option, and a final pizza picture with all
add option to add another Pizza object to their order
  this can be a let checkout = {each pizza obj} which prints all pizzas and totals each cost





<!-- TDD -->

Describe: Pizza()

Test1: "It should return a Pizza object with properties for sizeSelect, cheeseBoolean, meatArray, non-meatArray, sauceSelect"
Code: 
const pizza1 = new Pizza("medium", true, ["sausage", "pepperoni"], ["jalapeno", "onion"], "marinara");
Expected Output: 
pizza1 /w {
  size: "medium",
  cheese: true,
  meat: ["sausage", "pepperoni"],
  non-meat: ["jalapeno", "onion"],
  sauce: "marinara"
  cost: 0
}

  
Describe: Pizza.prototype.totalCost()

Test1: "It should check for 'medium' and add 13 to pizza1 cost"
Code: 
const pizza1 = new Pizza("medium", true, ["sausage", "pepperoni"], ["jalapeno", "onion"], "marinara");
pizza1.totalCost();
Expected Output:
pizza1.cost === 13

Test2: "It should check for true and add 1 to pizza1 cost"
Code: 
const pizza1 = new Pizza("medium", true, ["sausage", "pepperoni"], ["jalapeno", "onion"], "marinara");
pizza1.totalCost();
Expected Output:
pizza1.cost === 14

Test3: "It should check for ["sausage", "pepperoni"] and add 2 to pizza1 cost"
Code: 
const pizza1 = new Pizza("medium", true, ["sausage", "pepperoni"], ["jalapeno", "onion"], "marinara");
pizza1.totalCost();
Expected Output:
pizza1.cost === 16

Test4: "It should check for ["jalapeno", "onion"] and add 1 to pizza1 cost"
Code: 
const pizza1 = new Pizza("medium", true, ["sausage", "pepperoni"], ["jalapeno", "onion"], "marinara");
pizza1.totalCost();
Expected Output:
pizza1.cost === 17
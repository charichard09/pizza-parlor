<!-- pseusdo code -->
Prompt: Create a website where a user can make a pizza. Have the options to choose individual toppings and size then give a total. 

define a Pizza function constructor
{
  this.toppings = {function to add selected pepperoni, cheeseType, artichoke, chicken}
  this.size = size;
  this.cost = cost (or base cost)
}
  test if it makes a pizza obj pizza1

define Pizza.prototype.totalCost()
  define a toppings = {
    cheese: 1,
    meat: {
      chicken:   
    }
    sauce: {
      marinara: 0,
      honey bbq: 0,
      garlic parmesan: 0,
      alfredo: 0,
      ranch: 0
    }
  }

  define a size = {
    small: 11,
    medium: 13,
    large: 15
  }

      make this dynamic? as users select toppings, everytime call totalCost() to print updated cost

have a checkout() function attached with a button element type="submit" to print final pizza properties and cost

UI pseudocode:
checkbox form for cheese (if checked, add cheese, if not checked, dont add cheese to final pizza output)

radio form for choice of sauce input that will go into final pizza output
  marinara, honey bbq, garlic parmesan, alfredo, ranch
    NON-MVP: make this a checkbox that when checked, will reveal radio form for sauces

checkbox form for choice of meat


NON-MVP: add pictures for each option, and a final pizza picture with all
add option to add another Pizza object to their order
  this can be a let checkout = {each pizza obj} which prints all pizzas and totals each cost





























<!-- TDD -->
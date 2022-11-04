//Business Logic
function Pizza (sizeSelect, cheeseBoolean, meatArray, nonMeatArray, sauceSelect) {
  this.size = sizeSelect;
  this.cheese = cheeseBoolean;
  this.meats = meatArray;
  this.nonMeats = nonMeatArray;
  this.sauce = sauceSelect;
  this.cost = 0;
}

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

  if (this.cheese === "yes") {
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
  
  return this.cost;
}




//UI Logic
function displayPizza(pizza) {
  const pizzaUl = document.createElement("ul");

  pizza.totalCost();

  for (const key of Object.keys(pizza)) {
    let pizzaLi = document.createElement("li");

    pizzaLi.append(key + ": " + pizza[key].toString());
    pizzaUl.append(pizzaLi);
  }
  // pizzaUl.setAttribute("value", "pizza");
  document.getElementById("pizza-output").after(pizzaUl);
}

function handleFormSubmission (event) {
  event.preventDefault();
  const pizzaSizeInput = document.querySelector("input[name='pizzaSizes']:checked").value;
  const pizzaMeatInputArray = Array.from(document.querySelectorAll("input[name='meat-box']:checked")).map(element => element.value);
  const pizzaNonMeatInputArray = Array.from(document.querySelectorAll("input[name='non-meat-box']:checked")).map(element => element.value)
  let pizzaCheeseInput;
  if (event.target.contains(document.querySelector("input[name='cheese-box']:checked"))) {
    pizzaCheeseInput = "yes";
  } else {
    pizzaCheeseInput = "no";
  }
  

  let newPizza = new Pizza(pizzaSizeInput, pizzaCheeseInput, pizzaMeatInputArray, pizzaNonMeatInputArray, "marinara");
  console.log(newPizza);

  displayPizza(newPizza);
}

//add checkout button and function that when pressed will remove form "form-div", change h3 "Your Cart" to "Final Order"
// add a total printed at the bottom of pizza displays, and a "pay button" that returns "ERROR: Still learning how to steal credit card info"

// Don't forget to add window.addEventListener("load", function);
window.addEventListener("load", function() {
  document.getElementById("pizza-form").addEventListener("submit", handleFormSubmission);
});
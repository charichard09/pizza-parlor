//Business Logic
function Pizza (sizeSelect, cheeseSelect, meatArray, otherArray, sauceSelect) {
  this.size = sizeSelect;
  this.cheese = cheeseSelect;
  this.meats = meatArray;
  this.others = otherArray;
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
      case (" chicken"):
      this.cost += 2;
      break;
      case (" ham"):
      this.cost += 1;
      break; 
      case (" pepperoni"):
      this.cost += 1;
      break; 
      case (" sausage"):
      this.cost += 1;
      break; 
      default: 
      this.cost += 0;
    }
  }

  for (const other of this.others) {
    switch (other) {
      case (" pineapple"):
        this.cost += 1;
        break; 
      case (" jalapeno"):
        this.cost += 1;
        break;  
      case (" onion"):
        this.cost += 0;
        break; 
      case (" spinach"):
        this.cost += 1;
        break; 
      case (" mushroom"):
        this.cost += 1;
        break; 
      case (" olive"):
        this.cost += 1;
        break; 
      default:
        this.cost += 0;      
    }
  }
  
  return this.cost;
}

function sumOfAllPizzas(costsArray) {
  total = 0;
  for (const cost of costsArray) {
    total += cost; 
  }

  return total;
}


//UI Logic
function highlightPizza () {
  document.getElementById("small-pizza").addEventListener("click", function(event) {
    event.target.setAttribute("style", "filter: drop-shadow(2px 0px 0 red) drop-shadow(0px 2px 0 red) drop-shadow(-2px -0px 0 red) drop-shadow(-0px -2px 0 red);");
    document.getElementById("medium-pizza").removeAttribute("style");
    document.getElementById("large-pizza").removeAttribute("style");
  });
  document.getElementById("medium-pizza").addEventListener("click", function(event) {
    document.getElementById("small-pizza").removeAttribute("style");
    event.target.setAttribute("style", "filter: drop-shadow(2px 0px 0 red) drop-shadow(0px 2px 0 red) drop-shadow(-2px -0px 0 red) drop-shadow(-0px -2px 0 red);");
    document.getElementById("large-pizza").removeAttribute("style");
  });
  document.getElementById("large-pizza").addEventListener("click", function(event) {
    document.getElementById("small-pizza").removeAttribute("style");
    document.getElementById("medium-pizza").removeAttribute("style");
    event.target.setAttribute("style", 
    "filter: drop-shadow(2px 0px 0 red) drop-shadow(0px 2px 0 red) drop-shadow(-2px -0px 0 red) drop-shadow(-0px -2px 0 red);");
  });
}

function handleRestartButton () {
  for (const pizzaUl of Array.from(document.querySelectorAll("ul"))) {
    pizzaUl.remove();
  }

  for (const pizzaName of Array.from(document.querySelectorAll("h6"))) {
    pizzaName.remove();
  }

  for (const pizzaImg of Array.from(document.querySelectorAll("img[src='./img/pizza.png']"))) {
    pizzaImg.removeAttribute("style");
  }

  document.getElementById("total").remove();
  document.getElementById("restart").setAttribute("class", "hidden");
}

function displayTotal(pizzaCosts) {
  let total = sumOfAllPizzas(pizzaCosts);
  let totalElement = document.createElement("h5");

  if (document.body.contains(document.getElementById("total"))) {
    document.getElementById("total").remove();
  }

  totalElement.append("Total: $" + total.toString());
  totalElement.setAttribute("id", "total")
  document.getElementById("output-div").after(totalElement);
}

function displayPizza(pizza) {
  const pizzaUl = document.createElement("ul");
  const pizzaName = document.createElement("h6");
  pizza.totalCost();

  for (const key of Object.keys(pizza)) {
    let pizzaLi = document.createElement("li");

    if (key === "cost") {
      pizzaLi.setAttribute("value", pizza["cost"]);
    }
    pizzaLi.append(key + ": " + pizza[key].toString());
    pizzaUl.append(pizzaLi);
  }
  pizzaName.append(pizza.size + " pizza:");
  document.getElementById("pizza-output").after(pizzaUl);
  document.getElementById("pizza-output").after(pizzaName);
  document.getElementById("restart").removeAttribute("class");
}

function handleFormSubmission (event) {
  event.preventDefault();
  const pizzaSizeInput = document.querySelector("input[name='pizza-sizes']:checked").value;
  const pizzaMeatInputArray = Array.from(document.querySelectorAll("input[name='meat-box']:checked")).map(element => element.value);
  const pizzaOtherInputArray = Array.from(document.querySelectorAll("input[name='other-box']:checked")).map(element => element.value)
  const pizzaSauceInput = document.querySelector("input[name='pizza-sauces']:checked").value;
  let pizzaCheeseInput;

  if (event.target.contains(document.querySelector("input[name='cheese-box']:checked"))) {
    pizzaCheeseInput = "yes";
  } else {
    pizzaCheeseInput = "no";
  }

  let newPizza = new Pizza(pizzaSizeInput, pizzaCheeseInput, pizzaMeatInputArray, pizzaOtherInputArray, pizzaSauceInput);
  displayPizza(newPizza);

  const pizzaCostsArray = Array.from(document.querySelectorAll("li[value]")).map(element => parseInt(element.getAttribute("value")));
  displayTotal(pizzaCostsArray);
}


window.addEventListener("load", function() {
  document.getElementById("pizza-form").addEventListener("submit", handleFormSubmission);
  document.getElementById("restart").addEventListener("click", handleRestartButton);
  highlightPizza();
});
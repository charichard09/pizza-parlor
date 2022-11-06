# _Pizza Parlor_

#### By _**Richard Cha**_

#### _A web application that allows users to pick from options to create multiple pizzas and get a total._

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_

## Description

_A web application that gives users options for pizza size, cheese, meats, other toppings, and sauces to create a pizza. Once a user is satisfied they may click "Add Pizza" and their choices will be tallied to create a total. If a user would like to add another pizza they may and once added to cart will update the total. Once a user is finished they may restart the process hitting the "Restart Order" button._

## Setup/Installation Requirements

* _Go to link:_
* [Pizza Parlor](https://charichard09.github.io/pizza-parlor)
* _Select your toppings and hit Add Pizza to get a total_

* _Alternatively:_
* _Clone repo to a local directory_
* _Open Index.html in your default browser_

## Tests

```
Describe: Pizza()

Test1: "It should return a Pizza object with properties for sizeSelect, cheeseBoolean, meatArray, nonMeatArray, sauceSelect"
Code: 
const newPizza = new Pizza("medium", true, ["sausage", "pepperoni"], ["jalapeno", "onion"], "marinara");
Expected Output: 
newPizza /w {
  size: "medium",
  cheese: true,
  meat: ["sausage", "pepperoni"],
  non-meat: ["jalapeno", "onion"],
  sauce: "marinara"
  cost: 0
}

  
Describe: Pizza.prototype.totalCost()

Test1: "It should check for 'medium' input and add 13 to newPizza cost"
Code: 
const newPizza = new Pizza("medium", true, [" sausage", " pepperoni"], [" jalapeno", " onion"], "marinara");
newPizza.totalCost();
Expected Output:
newPizza.cost === 13

Test2: "It should check for 'yes' input and add 1 to newPizza cost"
Code: 
const newPizza = new Pizza("medium", "yes", [" sausage", " pepperoni"], [" jalapeno", " onion"], "marinara");
newPizza.totalCost();
Expected Output:
newPizza.cost === 14

Test3: "It should check for ["sausage", "pepperoni"] input and add 2 to newPizza cost"
Code: 
const newPizza = new Pizza("medium", true, [" sausage", " pepperoni"], [" jalapeno", " onion"], "marinara");
newPizza.totalCost();
Expected Output:
newPizza.cost === 16

Test4: "It should check for ["jalapeno", "onion"] input and add 1 to newPizza cost"
Code: 
const newPizza = new Pizza("medium", true, [" sausage", " pepperoni"], [" jalapeno", " onion"], "marinara");
newPizza.totalCost();
Expected Output:
newPizza.cost === 17

Test5: "It should check for "marinara" input and "marinara" as the value for newPizza.sauce"
Code: 
const newPizza = new Pizza("medium", true, [" sausage", " pepperoni"], [" jalapeno", " onion"], "marinara");
newPizza.totalCost();
Expected Output:
newPizza.sauce === "marinara"


Describe: sumOfAllPizzas(costsArray)

Test1: "It should take a lrg chz pizza with 'cost' $16 and a medium chicken cheese jalapeno and pineapple pizza wtih 'costs' $18 and 
add them for a 'Total: $33'"
Code:
sumOfAllPizzas(costsArray)
Expected Output:
"Total: $33" 

```

## Known Bugs

* _None_

## License

_If you have any issues or have questions, ideas or concerns please contact me at [charichard09@gmail.com](mailto:charichard09@gmail.com)_

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _11-4-22_ _Richard Cha_
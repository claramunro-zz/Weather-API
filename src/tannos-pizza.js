// Business Logic for Multiple Pizzas

import $ from 'jquery';

export function ExtraPizzas() {
  this.multiplePizzas = [],
  this.currentId = 0,
  this.price = 0,
  this.fullPrice = 0;
}

ExtraPizzas.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

ExtraPizzas.prototype.addPizza = function(pizza) {
  var multiplePizzas = [];
  pizza.id = this.assignId();
  multiplePizzas.push(pizza);
};

export const ExtraPizzasPrototype = ExtraPizzas.prototype;

export function displayPizzaOrder() {
  var multiplePizzas = [];
  var pizzaList = $("ol#allPizzas");
  var htmlForAllPizzas = "";
  multiplePizzas.forEach(function (pizza) {
    htmlForAllPizzas += "<li id=" + pizza.id + "> Size: " + pizza.size + ".<br/> Toppings: " + pizza.toppings + ".<br/> Price: " + pizza.price + "$ </li>";
  });
  pizzaList.html(htmlForAllPizzas);
}

ExtraPizzas.prototype.showOrderPrice = function () {
  return "Your order total is $" + ExtraPizzasPrototype.fullPrice;
};

// Business Logic for Pizza Object
export function Pizza(size) {
  this.size = size,
  this.toppings = [],
  this.price = 0,
  this.toppingsPrice = 0;
}

Pizza.prototype.addToppings = function (topping) {
  this.toppings.push(topping);
};

Pizza.prototype.sizeLogic = function () {
  if (this.size === "Medium") {
    this.price = 7;
  } else if (this.size === "Large") {
    this.price = 9;
  } else if (this.size === "Grand") {
    this.price = 11;
  }
};

Pizza.prototype.toppingsCost = function () {
  if (document.getElementById("id_2").checked) {
    this.toppingsPrice += 1;
  } if (document.getElementById("id_3").checked) {
    this.toppingsPrice += 1;
  } if (document.getElementById("id_4").checked) {
    this.toppingsPrice += 1;
  } if (document.getElementById("id_5").checked) {
    this.toppingsPrice += 1;
  } if (document.getElementById("id_6").checked) {
    this.toppingsPrice += 1;
  } if (document.getElementById("id_7").checked) {
    this.toppingsPrice += 1;
  }
};

Pizza.prototype.pizzaCost = function () {
  this.price += this.toppingsPrice;
};

Pizza.prototype.showFullPrice = function () {
  return "This pizza will cost $" + this.price + ". Add another pizza above or click here to see current pizza details";
};

import { Pizza, ExtraPizzas, displayPizzaOrder, ExtraPizzasPrototype } from './tannos-pizza.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {
  $("form#pizzaOrder").submit(function (event) {
    event.preventDefault();
    var inputtedSize = $("input:radio[name=size]:checked").val();
    var inputtedToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function () {
      inputtedToppings.push($(this).val());
    });
    var newPizza = new Pizza(inputtedSize, inputtedToppings);
    ExtraPizzasPrototype.addPizza(newPizza);
    newPizza.addToppings(inputtedToppings);
    newPizza.sizeLogic();
    newPizza.toppingsCost();
    newPizza.pizzaCost();
    if (!inputtedSize) {
      alert("Please select your pizza size");
    } else {
      ExtraPizzas.fullPrice += newPizza.price;
      $("#output").text(newPizza.showFullPrice());
      $("#output")[0].scrollIntoView({ behavior: 'smooth' });
    }
    $("#output").click(function () {
      $("#output").html("Current Pizza: <br/> Size: " + newPizza.size + "<br/>" + "Toppings: " + newPizza.toppings + "<br/> Price: $" + newPizza.price + "<br/>");
      $("#output")[0].scrollIntoView({ behavior: 'smooth' });
      $("#output").removeClass("clickable");
    });
    $("#seeAllPizzas").click(function () {
      displayPizzaOrder(ExtraPizzas);
      $("#fullOrderPrice").text(ExtraPizzasPrototype.showOrderPrice());
      $("#fullOrderPrice")[0].scrollIntoView({ behavior: 'smooth' });
    });
  });
});
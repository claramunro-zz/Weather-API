// Business Logic for Multiple Pizzas

function extraPizzas() {
    this.multiplePizzas = [],
    this.currentId = 0,
    this.price = 0,
    this.fullPrice = 0
}

extraPizzas.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
}

extraPizzas.prototype.addPizza = function(pizza) {
    pizza.id = this.assignId();
    this.multiplePizzas.push(pizza);
}

function displayPizzaOrder(pizzaDisplay) {
    var pizzaList = $("ol#allPizzas");
    var htmlForAllPizzas = "";
    pizzaDisplay.multiplePizzas.forEach(function(pizza) {
        htmlForAllPizzas += "<li id=" + pizza.id + "> Size: " + pizza.size + ".<br/> Toppings: " + pizza.toppings + ".<br/> Price: " + pizza.price + "$ </li>";
    });
    pizzaList.html(htmlForAllPizzas);
};

extraPizzas.prototype.showOrderPrice = function () {
    return "Your order total is $" + extraPizzas.fullPrice;
}

// Business Logic for Pizza Object
function Pizza(size, toppings, price) {
    this.size = size,
    this.toppings = [],
    this.price = 0,
    this.toppingsPrice = 0
} 

Pizza.prototype.addToppings = function (topping) {
    this.toppings.push(topping);
}

Pizza.prototype.sizeLogic = function () {
    if (this.size === "Medium") {
        this.price = 7;
    } else if (this.size === "Large") {
        this.price = 9;
    } else if (this.size === "Grand") {
        this.price = 11;
    };
}

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
}

Pizza.prototype.pizzaCost = function () {
    this.price += this.toppingsPrice;
}

Pizza.prototype.showFullPrice = function () {
    return "This pizza will cost $" + this.price + ". Add another pizza above or click here to see current pizza details";
}

// User Interface Logic 
var extraPizzas = new extraPizzas();

$(document).ready(function() {
    $("form#pizzaOrder").submit(function(event) {
        event.preventDefault();
        var inputtedSize = $("input:radio[name=size]:checked").val();
        var inputtedToppings = [];
        $("input:checkbox[name=toppings]:checked").each(function () {
            inputtedToppings.push($(this).val());
        });
        var newPizza = new Pizza(inputtedSize, inputtedToppings);
        extraPizzas.addPizza(newPizza);
        newPizza.addToppings(inputtedToppings);
        newPizza.sizeLogic();
        newPizza.toppingsCost();
        newPizza.pizzaCost();
        if (!inputtedSize) {
            alert("Please select your pizza size");
        } else {
            extraPizzas.fullPrice += newPizza.price;  
            $("#output").text(newPizza.showFullPrice());
            $("#output")[0].scrollIntoView({ behavior: 'smooth' });
        }
        $("#output").click(function () {
            $("#output").html("Current Pizza: <br/> Size: " + newPizza.size + "<br/>" + "Toppings: " + newPizza.toppings + "<br/> Price: $" + newPizza.price + "<br/>");
            $("#output")[0].scrollIntoView({ behavior: 'smooth' });
            $("#output").removeClass("clickable");
        });
        $("#seeAllPizzas").click(function () {
            displayPizzaOrder(extraPizzas);
            $("#fullOrderPrice").text(extraPizzas.showOrderPrice());
            $("#fullOrderPrice")[0].scrollIntoView({ behavior: 'smooth' });
        });
    });
});

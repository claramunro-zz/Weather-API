// Business Logic for Multiple Pizzas

function extraPizzas() {
    this.multiplePizzas = []
}

extraPizzas.prototype.addPizza = function(newPizza) {
    this.multiplePizzas.push(newPizza);
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
    return "Your order came to $" + this.price + ". Click here to see order";
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
        console.log(extraPizzas);
        newPizza.addToppings(inputtedToppings);
        newPizza.sizeLogic();
        newPizza.toppingsCost();
        newPizza.pizzaCost();
        if (!inputtedSize) {
            alert("Please select your pizza size");
        } else {
            $("#output").text(newPizza.showFullPrice());
        }
        $("#output").click(function () {
            $("#output").html("Size: " + newPizza.size + "<br/>" + "Toppings: " + newPizza.toppings + "<br/> Price: $" + newPizza.price);
            $("#output").removeClass("clickable");
        });
    });
});

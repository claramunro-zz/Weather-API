// Business Logic
function Pizza(size, toppings, price) {
    this.size = size,
    this.toppings = [],
    this.price = 0
}

Pizza.prototype.addToppings = function (topping) {
    this.toppings.push(topping);
}

Pizza.prototype.pizzaLogic = function () {
    if (this.size === "medium") {
        this.price = 7;
    } else if (this.size === "large") {
        this.price = 9;
    } else if (this.size === "grand") {
        this.price = 11;
    };
}


// User Interface Logic 
$(document).ready(function() {
    $("form#pizzaOrder").submit(function(event) {
        event.preventDefault();
        var inputtedSize = $("input:radio[name=size]:checked").val();
        var inputtedToppings = [];
        $("input:checkbox[name=toppings]:checked").each(function () {
            inputtedToppings.push($(this).val());
        });
        var newPizza = new Pizza(inputtedSize, inputtedToppings);
        newPizza.addToppings(inputtedToppings);
        newPizza.pizzaLogic();
        console.log(newPizza);
    });

});

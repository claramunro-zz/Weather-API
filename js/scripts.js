// Business Logic
function Pizza(size, toppings) {
    this.size = size,
    this.toppings = []
}

Pizza.prototype.addToppings = function (topping) {
    this.toppings.push(topping);
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
        console.log(newPizza);
    });

});

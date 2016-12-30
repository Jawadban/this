function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  };
}

var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");
 
//pbj.describe();

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
};

salad.describe = pbj.describe.bind(salad);

salad.describe(); 

function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

var carlMichael = new Customer ('carl Michael', 2);

var service = visitTable.bind(carlMichael);

setTimeout(service, 4000);
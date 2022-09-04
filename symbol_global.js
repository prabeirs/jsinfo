let id = Symbol.for("id");

let idAgain = Symbol.for("id");

//alert(id === idAgain);

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert(Symbol.keyFor(sym));
alert(Symbol.keyFor(sym2));
alert(idAgain.description);
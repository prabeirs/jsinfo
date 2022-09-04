let id = Symbol("id");
let user = {
    [id]: 1234,
    id: 123
};

let clone = Object.assign({}, user);

alert(clone[id]); // "[]" only works for accessing the symbol but not via "."
alert(clone.id); // for accessing the specifically string id do it via "." when both co-exists
// There’s no paradox here. That’s by design.
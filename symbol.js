//let id1 = Symbol("id1");
//let id2 = Symbol("id2");
//alert(id1.toString() == id2.toString());

let user  = {
    name: "John"
};

let id = Symbol("id");
let user2 = {
    name: "John",
    id: 1234,
    [id]: 123
};
//user[id] = 1;
//alert(user2.id);
//console.log(user2);

let user3 = {
    name: "John",
    age: 30,
    [id]: 123
};
for (let key  in user3) {
    alert(key);
}
alert("Direct: " + user3[id]);
var toDos = ["gym", "tan", "laundry"];

var chore = prompt("What would you like to do?");

while (chore != "quit") {
    if (chore == "new") {
        var add = prompt("Add new to do?");
        toDos.push(add);
    } else if (chore == "list") {
        console.log(toDos);

    }
    var chore = prompt("What would you like to do?");
}

console.log("You have quit the app");
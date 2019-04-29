import "./index.css";

var items = [];
var addButton = document.getElementById("add-button");

function add() {
    var item = document.getElementById("input-field");
    var itemValue = item.value;
    var list = document.getElementById("td-list");
    var listItem = document.createElement("LI");

    items.push(itemValue);
    listItem.appendChild(document.createTextNode(itemValue));
    list.appendChild(listItem);
}
addButton.addEventListener("click", add);

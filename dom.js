// EXAMINE THE DOM OBJECST

// console.log(document.title);
// console.log(document.URL);
// console.log(document.domain);

// document.title = 123;
// console.log(document.doctype);
// console.log(document.all[10]);

// document.all[13].textContent = "Hello";

// console.log(document.links);
// console.log(document.images);

// GET ELEMENT BY ID

// console.log(document.getElementById("header-title"));

// HeaderTitle = document.getElementById("header-title");
// HeaderTitle = document.getElementById("main-header");

// console.log(HeaderTitle);
// HeaderTitle.textContent = "Hello";
// HeaderTitle.innerHTML = "<h2>Hello2</h2>";

// HeaderTitle.style.borderBottom = "solid 2px #000";

// GET ELEMENT BY CLASS NAME

// var Items = document.getElementsByClassName("list-group-item");
// console.log(Items);
// console.log(Items[2]);
// Items[2].style.fontWeight = "bold";

// changing one item background color
// Items[3].style.backgroundColor = "skyblue";

// changing all the items bckground color
// for(var i=0;i<Items.length;i++){
//     Items[i].style.backgroundColor = 'skyblue';
// }

// GET ELEMENT BY TAG NAME

// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[2]);
// li[2].style.fontWeight = "bold";

// // changing one item background color
// li[3].style.backgroundColor = "skyblue";

// // changing all the items bckground color
// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "skyblue";
// }

// QUERY SELECTORS

// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #000";

// var input = document.querySelector("input");
// input.value = "Hello";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "green";

//QUERY SELECTOR ALL

// var titles = document.querySelectorAll(".title");
// console.log(titles);

// // titles[0].textContent = "Hellow";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "skyblue";
// }

// var even = document.querySelectorAll("li:nth-child(even)");
// for(var i=0;i<even.length;i++){
//     even[i].style.backgroundColor = "pink";
// }

// TRAVERSING THE DOM
// Parent Node
// var ItemList = document.querySelector("#items");
// console.log(ItemList.parentNode);
// ItemList.parentNode.style.backgroundColor = "skyblue";

// console.log(ItemList.parentNode.parentNode.parentNode);

// parent Element
// var ItemList = document.querySelector("#items");
// ItemList.parentElement.style.backgroundColor = "pink";

// CREATE ELEMENTS

// Creating a new div

// var newDiv = document.createElement("div");

// add class name
// newDiv.className = "Hello";

// add id
// newDiv.id = "Hi";

// add title/ add attr
// newDiv.setAttribute("Hey", "dev");

// create a text node and add a text
// var newDivText = document.createTextNode("Hello DOM");

// newDiv.appendChild(newDivText);
// console.log(newDiv);

// CREATING A NEW ITEMS/DELETE BTN

var Form = document.getElementById("addForm");
var ItemList = document.getElementById("items");
var filter = document.getElementById("filter");

// form submit event
Form.addEventListener("submit", additem);

// delete event
ItemList.addEventListener("click", removeItem);

// filter event
filter.addEventListener("keyup", filterItems);

//Add item
function additem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;

  // create new li element
  var li = document.createElement("li");

  // add class
  li.className = "list-group-item";

  // add text node with input values
  li.appendChild(document.createTextNode(newItem));

  // create delete button
  var deleteBtn = document.createElement("button");

  // add class name
  deleteBtn.className = "btn btn-danger btn-sm fload-right delete";

  // append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // append li to list 
  ItemList.appendChild(li);
}

  //append button to li 
  li.appendChild(deleteBtn);

// remove item

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      ItemList.removeChild(li);
    }
  }
}

// filter item
function filterItems(e) {
  // convert text to lowercases
  var text = e.target.value.toLowerCase();

  // get li's 
  var items = ItemList.getElementsByTagName("li");

  // convert an array 
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    // console.log(itemName)
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

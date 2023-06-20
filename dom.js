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

var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[2]);
li[2].style.fontWeight = "bold";

// changing one item background color
li[3].style.backgroundColor = "skyblue";

// changing all the items bckground color
for (var i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "skyblue";
}

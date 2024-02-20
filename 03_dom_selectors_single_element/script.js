// document.getElementById()

console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").class); // will be undefined
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

// Set Attributes
document.getElementById("app-title").title = "Shopping List";

document.getElementById("app-title").setAttribute("class", "title");

const title = document.getElementById("app-title");

console.log(title);

// get/change content
console.log(title.textContent);
title.textContent = "Hello";
title.innerText = "Hello Again";
title.innerHTML = "<strong>Shopping List </strong>";

// Change Styles
title.style.color = "red";
// title.style.background-color = "red"; // you cant type CSS elements with - like that instead you can use camelCase
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";

// Query Selector - document.querySelector()
console.log(document.querySelector("h1")); // this only selects single elements - only first one if there are multiple ones
console.log(document.querySelector("#app-title")); // you can pick ids
console.log(document.querySelector(".container")); // you can pick classes
console.log(document.querySelector('input[type="text"]'));

console.log(document.querySelector("li:nth-child(2)")).innerText;

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Appel Juice";
secondItem.style.color = "red";

// User these methods on other elements
const list = document.querySelector("ul");
console.log(list);

const firstItem = list.querySelector("li");
firstItem.style.color = "blue";

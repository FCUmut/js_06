const div = document.createElement("div");

// you can create and add whatever you want to it
div.className = "my-element";
div.id = "my-element";

div.setAttribute("title", "My Element");

// div.innerText = "Hello";
// innerText usually for get and change the text, it is better to create text node
const text = document.createTextNode("Hello");

div.appendChild(text);

// document.body.appendChild(div); // it will add to the bottom

document.querySelector("ul").appendChild(div);

console.log(div);

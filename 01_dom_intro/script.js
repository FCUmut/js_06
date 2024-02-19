//console.log(window);

// it will show elements
// console.log(window.document);

// to see properties and methods and doesnt need to prefix with window. since window is top level object
// console.dir(document);
// console.log(document.body.innerText); // will show the texts only
// console.log(document.body.innerHTML); // will show the html tags either

// console.log(document.links); // it will show how many links are there
// console.log(document.links[0]); // like arrays, you can target link from index

// document.body.innerHTML = "<h1> Hello World </h1>"; // it will replace whole body with this html line

// document.write("Hello from JS");

console.log(document.getElementById("main"));

const main = document.getElementById("main");

// main.innerHTML = "<h1> Hello from main </h1>";

// document.querySelector("#main h1").innerText = "Hello";

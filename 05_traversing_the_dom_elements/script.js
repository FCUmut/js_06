// Get child elements
let output;

const parent = document.querySelector(".parent");

output = parent.children; // it will give element structure which are all 3 divs

output = parent.children[1].innerText; // Child 2
output = parent.children[1].className; // child
output = parent.children[1].nodeName; // DIV

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

parent.firstElementChild.innerText = "Child One";

// firstElementChild
// lastElementChild

// Get parent elements

// parentElement

const child = document.querySelector(".child");

output = child.parentElement;

child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "1rem";

// Get sibling elements

// previousElementSibling
// nextElementSibling

const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem;

secondItem.nextElementSibling.innerText = "Child Three";

output = secondItem.nextElementSibling;

console.log(output);

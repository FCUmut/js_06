let output;

const parent = document.querySelector(".parent");

output = parent.childNodes; // instead of html collection we will get node list

// even if there is no text before the comment node actually there is a white-space which is counted as text node on html part

output = parent.childNodes[0];
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = "Child One";
output = parent.childNodes[5].style.color = "red";

output = parent.firstChild;
output = parent.lastChild;

// Parent node

const child = document.querySelector(".child");

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = "#ccc";

// Siblings

const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem.nextSibling; // next node is white-space

console.log(output);

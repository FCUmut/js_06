let output;

output = document.all; // it will show all tags, classes and ids
output = document.all[5]; // you can access elements by index like an array element

output = document.all.length; // you can also get length

output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.charset;
output = document.contentType;

output = document.forms;
output = document.forms[0];

output = document.forms[0].method; // forms method is 'get' as default but you can change it like method="post" etc.

output = document.forms[0].action;

document.forms[0].id = "new-id"; // you can change id of form

output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].href = "https://facebook.com";
output = document.links[0].id = "google-link";
output = document.links[0].className = "google-class";
output = document.links[0].classList; // DOMTokenList

output = document.images; // HTMLCollection img
output = document.images[0];
output = document.images[0].src;

console.log(output);

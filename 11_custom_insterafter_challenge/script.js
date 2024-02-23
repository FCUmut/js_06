const li = document.createElement("li");
li.textContent = "Insert me After!";

const firstItem = document.querySelector("li:first-child");

insertAfter(li, firstItem);

// Solution - 1
// function insertAfter(insertItem, child) {
//   const parent = child.parentElement;

//   const nextChild = child.nextElementSibling;

//   parent.insertBefore(insertItem, nextChild);
// }

// insertAfter(li, firstItem);

// Solution - 2
function insertAfter(newEl, existingEl) {
  //console.log(existingEl.parentNode); // <ul>........
  //console.log(existingEl.parentElement); // <ul>........

  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

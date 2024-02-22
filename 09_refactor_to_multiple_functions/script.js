function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  // Call of button creating function
  const button = createButton("remove-item btn-link text-red");

  li.appendChild(button);

  document.querySelector(".items").appendChild(li);
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  // Call of icon creating function
  const i = createIcon("fa-solid fa-xmark");
  button.appendChild(i);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

createNewItem("Cheese");
createNewItem("Sauce");

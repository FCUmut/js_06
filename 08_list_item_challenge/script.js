// Quick & Dirty

// const li = document.createElement("li");

// li.innerHTML = `Banana <button class="remove-item btn-link text-red">
// <i class="fa-solid fa-xmark"></i>
// </button>`;

// document.querySelector("ul").appendChild(li);

function createListItem(item) {
  // const li = `<li>${item}</li>`; //Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'. Because it is string not a node.

  const li = document.createElement("li");

  li.innerHTML = `Banana <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
    </button>`;

  document.querySelector(".items").appendChild(li);
}

createListItem("Eggs");

// Clean & Performant

function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const i = document.createElement("i");
  i.className = "fa-solid fa-xmark";

  button.appendChild(i);
  li.appendChild(button);

  document.querySelector(".items").appendChild(li);
}

createNewItem("Cheese");

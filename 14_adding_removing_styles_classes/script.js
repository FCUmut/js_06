const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run() {
  // className
  //console.log(itemList.className);

  //text.className = "dark"; // it will apply 'dark' class but took away the "card" class, it will overwrite it
  //text.className = "card dark"; // so you better type as this

  //classList
  //console.log(itemList.classList);

  //itemList.classList.forEach((c) => console.log(c));

  //text.classList.add("dark"); // another way for 'card dark' class

  //text.classList.toggle("dark"); // add and removes the class which is good for taggle themes

  //text.classList.replace("card", "dark");

  // Change Style
  //itemList.style.lineHeight = "3";

  items.forEach((item, index) => {
    item.style.color = "red";
    if (index === 2) {
      item.style.color = "blue";
    }
  });
}

document.querySelector("button").onclick = run; // if you put parentheses () it will execute automatically which we dont want now

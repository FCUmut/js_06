function removeClearBtn() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

removeClearBtn();

function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

//removeFirstItem();

function removeItem(itemNumber) {
  // First Way
  // const ul = document.querySelector("ul");
  // const li = document.querySelector(`li:nth-child(${itemNumber})`);
  // ul.removeChild(li);
  // Second Way
  // const ul = document.querySelector("ul");
  // const li = document.querySelectorAll("li")[itemNumber - 1]; // this is zero-based so take 1 from it
  // ul.removeChild(li);
  // Third Way
  // const li = document.querySelectorAll("li");
  // li[itemNumber - 1].remove();
}

//removeItem(1);

// Fourth Way
const removeItem4 = (itemNumber) =>
  document.querySelectorAll("li")[itemNumber - 1].remove();

removeItem4(1);

// querySelectorAll()

const listItems = document.querySelectorAll(".item"); // this will select all instead of first one

console.log(listItems[1].innerText); // this will give second element of these li items

// listItems.style.color = "red"; // style is for spesific element so it will not work

listItems[1].style.color = "red"; // this will work

listItems.forEach((item, index) => {
  // you can pass index param
  item.style.color = "red";

  if (index === 1) {
    item.remove();
  }

  if (index === 0) {
    // item.innerText = 'Oranges'; // this will change text but also it can remove other elements

    item.innerHTML = ` Oranges
        <button class ="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
        </button>`; // you can use innerHTML
  }
});

const listItems2 = document.getElementsByClassName("item"); // you can also get elements by class name

console.log(listItems2[2].innerText);

listItems2.forEach((item) => {
  console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName("li"); // you can also get elements by tag name

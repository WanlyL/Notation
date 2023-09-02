var containerElement = document.getElementById("container");

var containerElement2 = document.querySelector("#container");

var secondItems = document.querySelectorAll(".second");

var thirdItem = document.querySelector("ol > .third");

containerElement.textContent = "Hello!";

var footerElement = document.querySelector(".foot");

footerElement.classList.add("main");

footerElement.classList.remove("main");

var newLiElement = document.createElement("li");

newLiElement.textContent = "four";

let list = document.querySelector("ul");

list.appendChild(newLi);

var olListItems = document.querySelectorAll("ol li");


for (var i = 0; i < olListItems.length; i++){
    olListItems[i].style.backgroundColor = "green";
}

var footerElement = document.querySelector(".footer");

footerElement.remove();




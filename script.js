const container = document.querySelector("div");

const text = "Hello World";
const limit = text.length;
const interval = 400;
let index = 0;

const idInterval = setInterval(function () {
  if (index <= limit) {
    container.innerText = text.slice(0, index++);
  } else {
    clearInterval(idInterval);
  }
}, interval);

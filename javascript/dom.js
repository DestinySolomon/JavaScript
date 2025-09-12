// DOM is a programming interface for HTML and XML documents(elements) that the browser renders when a web page loads.
//

const text = document.getElementById("change");
const mee = document.getElementById("mee");
const btn = document.getElementById("btn");
const remove = document.getElementById("remove");

const newFoto = document.createElement("img");
const eventBtn = document.getElementById("event");
const box = document.getElementById("box");
const closeBtn = document.getElementById("close");

box.addEventListener("click", function () {
  box.remove();
});
newFoto.src = "./img/bot.jpg";
newFoto.alt = "bot";
newFoto.style.width = "280px";
document.body.appendChild(newFoto);

btn.addEventListener("click", function () {
  text.innerHTML = "Text has been changed!";
  text.style.color = "red";
  text.style.fontSize = "40px";
  text.style.backgroundColor = "black";
});

btn.addEventListener("mouseover", function () {
  btn.innerHTML = "Mouse Over Me";
});

btn.addEventListener("mouseout", function () {
  btn.innerHTML = "Click Me";
}); // The DOM represents the document as nodes and objects; that way, programming languages can interact with the page's content, structure, and styles.
// The DOM is not part of the JavaScript language, but it is commonly used with JavaScript to create dynamic web pages.
// The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure where each node is an object representing a part of the document.

btn.addEventListener("click", function () {
  mee.src = "./img/dee.jpg";
});

remove.addEventListener("click", function () {
  mee.remove();
});

eventBtn.addEventListener("click", function () {
  alert("I am an alert box!");
}); // The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page's content, structure, and styles.
// The DOM is not part of the JavaScript language, but it is commonly used with JavaScript to create dynamic web pages.
// The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure where each node is an object representing a part of the document.

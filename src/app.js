import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", () => {
  let main = document.querySelector("#main");

  let divs = `  
    <div id="cardPoker">
      <div id="typeStart"></div>
      <div id="value"></div>
      <div id="typeFinal"></div>
    </div>`;
  main.innerHTML = divs;

  let cardPoker = document.querySelector("#cardPoker");
  cardPoker.style.width = "250px";
  cardPoker.style.height = "350px";
  cardPoker.style.borderRadius = "20px";
  cardPoker.style.position = "relative";
  cardPoker.classList.add("mx-auto", "bg-white", "mt-5", "shadow");

  let typeStart = document.querySelector("#typeStart");
  typeStart.style.fontSize = "50px";
  typeStart.style.position = "absolute";
  typeStart.style.top = "10px";
  typeStart.style.left = "10px";

  let value = document.querySelector("#value");
  value.style.fontSize = "100px";
  value.style.position = "absolute";
  value.style.top = "50%";
  value.style.left = "50%";
  value.style.transform = "translate(-50%, -50%)";

  let typeFinal = document.querySelector("#typeFinal");
  typeFinal.style.fontSize = "50px";
  typeFinal.style.position = "absolute";
  typeFinal.style.bottom = "10px";
  typeFinal.style.right = "10px";

  let symbols = ["♦", "♥", "♠", "♣"];
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  function randomGenerator(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let symbol = randomGenerator(symbols);
  let valueCard = randomGenerator(numbers);

  typeStart.innerText = symbol;
  value.innerText = valueCard;
  typeFinal.innerText = symbol;

  if (symbol === "♦" || symbol === "♥") {
    typeStart.style.color = "red";
    typeFinal.style.color = "red";
    value.style.color = "red";
  } else {
    typeStart.style.color = "black";
    typeFinal.style.color = "black";
    value.style.color = "black";
  }
});

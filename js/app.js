import messageSecret from "./message.js";

const compteur = document.querySelector("#compteur");
const message = document.querySelector("#message");

let number = 5;

const interval = setInterval(() => {
  compteur.innerHTML = number;
  number -= 1;
  if (number < 0) {
    clearInterval(interval);
    compteur.style.display = "none";
    message.innerHTML = messageSecret;
    message.style.display = "block";
  }
}, 1000);

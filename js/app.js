import messageSecret from "./message.js";

const compteur = document.querySelector("#compteur");
const message = document.querySelector("#message");

let count = 5;

const countDown = setInterval(() => {
  compteur.textContent = count;
  count -= 1;
  if (count < 0) {
    clearInterval(countDown);
    message.innerHTML = messageSecret;
    compteur.style.display = "none";
    message.style.display = "block";
  }
}, 1000);

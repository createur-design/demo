const message =
  "<p><b>Simplon vous remercie</b> d'avoir participer à notre atelier 😍</p>";
let countDown = 5;

const body = document.querySelector("body");
const compteur = document.querySelector("#compteur");
const divMessage = document.querySelector("#message");

const count = setInterval(() => {
  compteur.textContent = countDown;
  countDown -= 1;
  if (countDown < 0) {
    clearInterval(count);
    divMessage.innerHTML = message;
    body.classList.add("final");
  }
}, 1000);

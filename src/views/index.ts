import { buttonComponent } from "./../components/button";
const tijerasIMG = require("url:./../img/tijeras.png");
const piedraIMG = require("url:./../img/piedra.png");
const papelIMG = require("url:./../img/papel.png");

export function initIndex(params) {
  const el = document.createElement("div");
  el.innerHTML = `
  <div class="title-index__container">
      <h1 class="title-index">
        Piedra <br />
        Papel
        <span class="title-o">o</span>
        <br />
        Tijera
      </h1>
    </div>
  
    ${buttonComponent("Empezar")}

    <div class="hands_container">
      <div class="hands">
        <img src="${tijerasIMG}" alt="" class="img-hand__tijeras" />
        <img src="${piedraIMG}" alt="" class="img-hand__piedra" />
        <img src="${papelIMG}" alt="" class="img-hand__papel" />
      </div>
    </div>
  `;

  // window.addEventListener("DOMContentLoaded", () => {
  const btnComp = el.querySelector(".button-component");

  btnComp.addEventListener("click", (e) => {
    // e.preventDefault();
    if (location.host.includes("github.io")) {
      params.goTo("/dwf-m5-desafio/empezar");
    } else {
      params.goTo("/empezar");
    }
  });
  // });

  return el;
}

// <button-component value="Jugar"></button-component>;

import { buttonComponent } from "./../components/button";
const tijerasIMG = require("url:./../img/tijeras.png");
const piedraIMG = require("url:./../img/piedra.png");
const papelIMG = require("url:./../img/papel.png");

export function initEmpezarPage(params) {
  const el = document.createElement("div");
  el.innerHTML = `
  <div class="description-empezar">
      <p>
        Presioná jugar <br />
        y elegí: piedra,<br />
        papel o tijera<br />
        antes de que <br />pasen los 3<br />
        segundos.
      </p>
    </div>
    
    ${buttonComponent("Jugar")}
    
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
      params.goTo("/dwf-m5-desafio/juego");
    } else {
      params.goTo("/juego");
    }
  });
  // });

  return el;
}

// <div class="con-button-empezar">${buttonComponent("Jugar")}</div>

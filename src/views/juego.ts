import { state } from "./../state";
import { buttonComponent } from "./../components/button";
const tijerasIMG = require("url:./../img/tijeras.png");
const piedraIMG = require("url:./../img/piedra.png");
const papelIMG = require("url:./../img/papel.png");
const three = require("url:./../img/three.png");
const two = require("url:./../img/two.png");
const loseSign = require("url:./../img/lose-sign.png");
const successSign = require("url:./../img/success-sign.png");

export function initJuego(params) {
  const el = document.createElement("div");
  el.innerHTML = `
  <div class="cron_container"></div>
  <div class="hands_container">
      <div class="hands">
        <img src="${tijerasIMG}" alt="" class="img-hand__tijeras" />
        <img src="${piedraIMG}" alt="" class="img-hand__piedra" />
        <img src="${papelIMG}" alt="" class="img-hand__papel" />
      </div>
    </div>
    `;

  // window.addEventListener("DOMContentLoaded", () => {
  const tijeras = el.querySelector(".img-hand__tijeras");
  const piedra = el.querySelector(".img-hand__piedra");
  const papel = el.querySelector(".img-hand__papel");

  function tijerasListeners() {
    tijeras.classList.add("selected");
    tijeras.classList.remove("deselected");
    piedra.classList.add("deselected");
    piedra.classList.remove("selected");
    papel.classList.add("deselected");
    papel.classList.remove("selected");
  }

  function piedraListeners() {
    tijeras.classList.add("deselected");
    tijeras.classList.remove("selected");
    piedra.classList.add("selected");
    piedra.classList.remove("deselected");
    papel.classList.add("deselected");
    papel.classList.remove("selected");
  }

  function papelListeners() {
    tijeras.classList.add("deselected");
    tijeras.classList.remove("selected");
    piedra.classList.add("deselected");
    piedra.classList.remove("selected");
    papel.classList.add("selected");
    papel.classList.remove("deselected");
  }

  tijeras.addEventListener("click", tijerasListeners);
  piedra.addEventListener("click", piedraListeners);
  papel.addEventListener("click", papelListeners);

  state.setState({ time: 0, moment: "waiting" });

  setTimeout(() => {
    const container = document.querySelector(".cron_container");
    const div = document.createElement("div");
    div.innerHTML = `<img src="${three}" class="cron-item" />`;
    container.appendChild(div);
  }, 1000);

  setTimeout(() => {
    const container = document.querySelector(".cron_container");
    container.removeChild(container.firstChild);
    const div = document.createElement("div");
    div.innerHTML = `<img src="${two}" class="cron-item" />`;
    container.appendChild(div);
  }, 2000);

  setTimeout(() => {
    const container = document.querySelector(".cron_container");
    container.innerHTML = `<h1 class="ready-sign">Ready!</h1>`;

    state.setState({ time: 3, moment: "result" });
  }, 3000);

  setTimeout(() => {
    const lastState = state.getState();

    if (lastState.time == 3 && lastState.moment == "result") {
      const handSelected = document.querySelector(".selected");
      const handsContainer = document.querySelector(".hands_container");
      let arrayHands = [tijeras, piedra, papel];
      let handsNoSelected = [];

      for (let i = 0; i < arrayHands.length; i++) {
        if (arrayHands[i] != handSelected) {
          handsNoSelected.push(arrayHands[i]);
        }
      }

      let zeroOrOne = Math.floor(Math.random() * 2);
      let handOponent = handsNoSelected[zeroOrOne];

      handsContainer.appendChild(handOponent);
      handsContainer.appendChild(handSelected);
      // No se porque, pero con la forma que esta comentada abajo no me funcionaba
      // handsContainer.removeChild(handsContainer.firstChild);
      let containerToRemove = document.querySelector(".hands");
      containerToRemove.parentNode.removeChild(containerToRemove);

      handOponent.classList.remove("deselected");
      handOponent.classList.add("hand-oponent");
      handSelected.classList.remove("selected");
      handSelected.classList.add("hand-selected");

      handsContainer.parentNode.removeChild(
        document.querySelector(".cron_container")
      );
      handsContainer.classList.remove("hands_container");
      handsContainer.classList.add("hands_result");

      tijeras.removeEventListener("click", tijerasListeners);
      piedra.removeEventListener("click", piedraListeners);
      papel.removeEventListener("click", papelListeners);
    }
  }, 4000);

  setTimeout(() => {
    const handSelected = document.querySelector(".hand-selected");
    const root = document.querySelector(".root");
    const TheResultDiv = document.createElement("div");
    TheResultDiv.classList.add("result");
    root.appendChild(TheResultDiv);
    const resultDiv = document.querySelector(".result");

    if (
      !sessionStorage.getItem("pcScore") &&
      !sessionStorage.getItem("userScore")
    ) {
      sessionStorage.setItem("pcScore", "0");
      sessionStorage.setItem("userScore", "0");
    }

    if (!handSelected) {
      const message = document.createElement("div");
      message.innerHTML = `<h1 class="message-title">No has elegido una mano para jugar<h1> ${buttonComponent(
        "Volver a jugar"
      )}`;
      resultDiv.appendChild(message);
      resultDiv.classList.add("err-bg");
    } else {
      const handOponent = document.querySelector(".hand-oponent");

      if (
        (handSelected.classList.value.includes("tijeras") &&
          handOponent.classList.value.includes("papel")) ||
        (handSelected.classList.value.includes("papel") &&
          handOponent.classList.value.includes("piedra")) ||
        (handSelected.classList.value.includes("piedra") &&
          handOponent.classList.value.includes("tijeras"))
      ) {
        state.setState({ ...state.getState(), winner: "user" });
        let userScore = parseInt(sessionStorage.getItem("userScore")) + 1;
        sessionStorage.setItem("userScore", userScore.toString());
      } else {
        state.setState({ ...state.getState(), winner: "pc" });
        let pcScore = parseInt(sessionStorage.getItem("pcScore")) + 1;
        sessionStorage.setItem("pcScore", pcScore.toString());
      }

      if (state.getState().winner == "pc") {
        // const resultDiv = document.querySelector(".result");
        const message = document.createElement("div");
        message.innerHTML = `
          <img src="${loseSign}" class="sign-result" /> 
            <div class="score-container">
              <h2>Score</h2>
              <h3>Vos: ${sessionStorage.getItem("userScore")}</h3>
              <h3>Maquina: ${sessionStorage.getItem("pcScore")}</h3>
            </div> 

            ${buttonComponent("Volver a jugar")}`;
        resultDiv.appendChild(message);
        resultDiv.classList.add("err-bg");

        // const buttonComp = document.querySelector(".button-component");
        // buttonComp.addEventListener("click", () => params.goTo("./empezar"));
      } else {
        const message = document.createElement("div");
        message.innerHTML = `
          <img src="${successSign}" class="sign-result" /> 
            <div class="score-container">
              <h2>Score</h2>
              <h3>Vos: ${sessionStorage.getItem("userScore")}</h3>
              <h3>Maquina: ${sessionStorage.getItem("pcScore")}</h3>
            </div> 
            ${buttonComponent("Volver a jugar")}`;
        resultDiv.appendChild(message);
        resultDiv.classList.add("success-bg");
      }
    }
    const buttonComp = document.querySelector(".button-component");
    buttonComp.addEventListener("click", (e) => {
      // e.preventDefault();
      if (location.host.includes("github.io")) {
        params.goTo("/dwf-m5-desafio/empezar");
      } else {
        params.goTo("/empezar");
      }
    });
  }, 4500);
  // });

  return el;
}

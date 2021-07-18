export function buttonComponent(text: string) {
  const button = `
    <div class="button-component__container">
      <button class="button-component">${text}</button>
    </div>
    `;
  return button;
}

// // <a href="">
// //       <div class="button-component__container">
// //         <button class="button-component">${text}</button>
// //       </div>
// //     </a>

// // <div class="button-component__container">
// //       <p class="button-component">${text}</p>
// //     </div>

// // <div class="button-component__container">

// customElements.define(
//   "button-component",
//   class extends HTMLElement {
//     shadow: ShadowRoot;
//     value: string;
//     constructor() {
//       super();
//       this.shadow = this.attachShadow({ mode: "open" });
//       this.render();
//     }
//     render() {
//       this.value = this.getAttribute("value");

//       const style = document.createElement("style");
//       style.innerHTML = `
//       .button-component__container {
//         display: flex;
//         justify-content: center;
//       }
//       .button-component {
//         font-family: "Odibee Sans", cursive;
//         width: 332px;
//         height: 87px;
//         font-size: 45px;
//         background: #006cfc;
//         color: white;
//         border: 10px solid #001997;
//         border-radius: 10px;
//         margin-top: 50px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//       }
//       .button-component:hover {
//         background: #009efc;
//         cursor: pointer;
//       }

//       `;

//       const div = document.createElement("div");
//       div.className = "button-component__container";
//       div.innerHTML = `
//       <button class="button-component">${this.value}</button>
//       `;

//       this.shadow.appendChild(style);
//       this.shadow.appendChild(div);
//     }
//   }
// );

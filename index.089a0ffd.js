var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequire6bbe;function a(e){return`\n    <a href="">\n      <div class="button-component__container">\n        <button class="button-component">${e}</button>\n      </div>\n    </a>\n    `}null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){let s=n[e];delete n[e];let a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequire6bbe=s);var c;s.register("vNK0r",(function(e,t){var n,s,a,c,o;n=e.exports,s="getBundleURL",a=()=>o,c=e=>o=e,Object.defineProperty(n,s,{get:a,set:c,enumerable:!0,configurable:!0});var r=null;function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(){return r||(r=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[0])}return"/"}()),r}})),c=s("vNK0r").getBundleURL()+"tijeras.ee552c74.png";var o;o=s("vNK0r").getBundleURL()+"piedra.a1d1490f.png";var r;function i(e){const t=document.createElement("div");return t.innerHTML='\n  <div class="title-index__container">\n      <h1 class="title-index">\n        Piedra <br />\n        Papel\n        <span class="title-o">o</span>\n        <br />\n        Tijera\n      </h1>\n    </div>\n  '+a("Empezar")+`\n    <div class="hands_container">\n      <div class="hands">\n        <img src="${c}" alt="" class="img-hand__tijeras" />\n        <img src="${o}" alt="" class="img-hand__piedra" />\n        <img src="${r}" alt="" class="img-hand__papel" />\n      </div>\n    </div>\n  `,document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".button-component").addEventListener("click",(()=>{location.host.includes("github.io")?e.goTo("/dwf-m5-desafio/empezar"):e.goTo("/empezar")}))})),t}function d(e){const t=document.createElement("div");return t.innerHTML='\n  <div class="description-empezar">\n      <p>\n        Presioná jugar <br />\n        y elegí: piedra,<br />\n        papel o tijera<br />\n        antes de que <br />pasen los 3<br />\n        segundos.\n      </p>\n    </div>\n    '+a("Jugar")+`\n    <div class="hands_container">\n      <div class="hands">\n        <img src="${c}" alt="" class="img-hand__tijeras" />\n        <img src="${o}" alt="" class="img-hand__piedra" />\n        <img src="${r}" alt="" class="img-hand__papel" />\n      </div>\n    </div>\n  `,document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".button-component").addEventListener("click",(()=>{location.host.includes("github.io")?e.goTo("/dwf-m5-desafio/juego"):e.goTo("/juego")}))})),t}r=s("vNK0r").getBundleURL()+"papel.7267ae59.png";const l={data:{},getState(){return this.data},setState(e){this.data=e}};var u;u=s("vNK0r").getBundleURL()+"three.761ffe6d.png";var m;m=s("vNK0r").getBundleURL()+"two.9f1ff18c.png";var p;p=s("vNK0r").getBundleURL()+"lose-sign.1996e6ad.png";var g;function h(e){const t=document.createElement("div");return t.innerHTML=`\n  <div class="cron_container"></div>\n  <div class="hands_container">\n      <div class="hands">\n        <img src="${c}" alt="" class="img-hand__tijeras" />\n        <img src="${o}" alt="" class="img-hand__piedra" />\n        <img src="${r}" alt="" class="img-hand__papel" />\n      </div>\n    </div>\n    `,document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".img-hand__tijeras"),n=document.querySelector(".img-hand__piedra"),s=document.querySelector(".img-hand__papel");function c(){t.classList.add("selected"),t.classList.remove("deselected"),n.classList.add("deselected"),n.classList.remove("selected"),s.classList.add("deselected"),s.classList.remove("selected")}function o(){t.classList.add("deselected"),t.classList.remove("selected"),n.classList.add("selected"),n.classList.remove("deselected"),s.classList.add("deselected"),s.classList.remove("selected")}function r(){t.classList.add("deselected"),t.classList.remove("selected"),n.classList.add("deselected"),n.classList.remove("selected"),s.classList.add("selected"),s.classList.remove("deselected")}t.addEventListener("click",c),n.addEventListener("click",o),s.addEventListener("click",r),l.setState({time:0,moment:"waiting"}),setTimeout((()=>{const e=document.querySelector(".cron_container"),t=document.createElement("div");t.innerHTML=`<img src="${u}" class="cron-item" />`,e.appendChild(t)}),1e3),setTimeout((()=>{const e=document.querySelector(".cron_container");e.removeChild(e.firstChild);const t=document.createElement("div");t.innerHTML=`<img src="${m}" class="cron-item" />`,e.appendChild(t)}),2e3),setTimeout((()=>{document.querySelector(".cron_container").innerHTML='<h1 class="ready-sign">Ready!</h1>',l.setState({time:3,moment:"result"})}),3e3),setTimeout((()=>{const e=l.getState();if(3==e.time&&"result"==e.moment){const e=document.querySelector(".selected"),a=document.querySelector(".hands_container");let i=[t,n,s],d=[];for(let t=0;t<i.length;t++)i[t]!=e&&d.push(i[t]);let l=d[Math.floor(2*Math.random())];a.appendChild(l),a.appendChild(e);let u=document.querySelector(".hands");u.parentNode.removeChild(u),l.classList.remove("deselected"),l.classList.add("hand-oponent"),e.classList.remove("selected"),e.classList.add("hand-selected"),a.parentNode.removeChild(document.querySelector(".cron_container")),a.classList.remove("hands_container"),a.classList.add("hands_result"),t.removeEventListener("click",c),n.removeEventListener("click",o),s.removeEventListener("click",r)}}),4e3),setTimeout((()=>{const t=document.querySelector(".hand-selected"),n=document.querySelector(".root"),s=document.createElement("div");s.classList.add("result"),n.appendChild(s);const c=document.querySelector(".result");if(sessionStorage.getItem("pcScore")||sessionStorage.getItem("userScore")||(sessionStorage.setItem("pcScore","0"),sessionStorage.setItem("userScore","0")),t){const e=document.querySelector(".hand-oponent");if(t.classList.value.includes("tijeras")&&e.classList.value.includes("papel")||t.classList.value.includes("papel")&&e.classList.value.includes("piedra")||t.classList.value.includes("piedra")&&e.classList.value.includes("tijeras")){l.setState({...l.getState(),winner:"user"});let e=parseInt(sessionStorage.getItem("userScore"))+1;sessionStorage.setItem("userScore",e.toString())}else{l.setState({...l.getState(),winner:"pc"});let e=parseInt(sessionStorage.getItem("pcScore"))+1;sessionStorage.setItem("pcScore",e.toString())}if("pc"==l.getState().winner){const e=document.createElement("div");e.innerHTML=`\n          <img src="${p}" class="sign-result" /> \n            <div class="score-container">\n              <h2>Score</h2>\n              <h3>Vos: ${sessionStorage.getItem("userScore")}</h3>\n              <h3>Maquina: ${sessionStorage.getItem("pcScore")}</h3>\n            </div> \n            ${a("Volver a jugar")}`,c.appendChild(e),c.classList.add("err-bg")}else{const e=document.createElement("div");e.innerHTML=`\n          <img src="${g}" class="sign-result" /> \n            <div class="score-container">\n              <h2>Score</h2>\n              <h3>Vos: ${sessionStorage.getItem("userScore")}</h3>\n              <h3>Maquina: ${sessionStorage.getItem("pcScore")}</h3>\n            </div> \n            ${a("Volver a jugar")}`,c.appendChild(e),c.classList.add("success-bg")}}else{const t=document.createElement("div");t.innerHTML=`<h1 class="message-title">No has elegido una mano para jugar<h1> ${a("Volver a jugar")}`,c.appendChild(t),c.classList.add("err-bg");document.querySelector(".button-component").addEventListener("click",(()=>{location.host.includes("github.io")?e.goTo("/dwf-m5-desafio/empezar"):e.goTo("/empezar")}))}}),4500)})),t}g=s("vNK0r").getBundleURL()+"success-sign.d47d044a.png",function(e){function t(e){history.pushState({},"",e),n(e)}function n(n){let s=[];s=location.host.includes("github.io")?[{path:"/dwf-m5-desafio/",component:i},{path:"/dwf-m5-desafio/empezar",component:d},{path:"/dwf-m5-desafio/juego",component:h}]:[{path:"/",component:i},{path:"/empezar",component:d},{path:"/juego",component:h}];for(const a of s)if(a.path==n){const n=a.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(n)}}n(location.pathname)}(document.querySelector(".root"));
//# sourceMappingURL=index.089a0ffd.js.map
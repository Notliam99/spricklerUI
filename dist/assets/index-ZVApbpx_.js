(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const d=`<div id='navBar'>
  <nav>
    <ul>
      <li id='title'>
        <h1>Water 💦</h1>
      </li>
      
      <li>
        <a href="./">
          <h1>Home</h1>
        </a>
      </li>
      
      <li>
        <a href="./stats">
          <h1>Stats</h1>
        </a>
      </li>
    </ul>
  </nav>
</div>
`,u=`<div id="manual-control">
  <div class="button">
    <button id="button-0">
      <h1>1</h1>
    </button>
  </div>
  
  <div class="button">
    <button id="button-1">
      <h1>2</h1>
    </button>
  </div>
  
  <div class="button">
    <button id="button-2">
      <h1>3</h1>
    </button>
  </div>
  
  <div class="button">
    <button id="button-3">
      <h1>4</h1>
    </button>
  </div>
</div>
`,l={header:{navBar:d},main:{"/":u}};function s(t){console.log("button_0 click",t)}function a(t){console.log("button_1 click",t)}function f(t){console.log("button_2 click",t)}function b(t){console.log("button_3 click",t)}function h(){var t,o,i,c;(t=document.getElementById("button-0"))==null||t.addEventListener("click",s),(o=document.getElementById("button-1"))==null||o.addEventListener("click",a),(i=document.getElementById("button-2"))==null||i.addEventListener("click",f),(c=document.getElementById("button-3"))==null||c.addEventListener("click",b)}function m(){h()}function p(t){let o="";for(let n=0;n<Object.keys(t.header).length;n++)o+=t.header[Object.keys(t.header)[n]];let i="";try{if(typeof t.main[location.pathname]>"u")throw"path not found";i=t.main[location.pathname]}catch(n){console.warn(n),location.pathname="/"}return{header:o,main:i,footer:""}}document.addEventListener("DOMContentLoaded",()=>{let t=p(l);console.log(Object.keys(t));for(let o=0;o<Object.keys(t).length;o++){const i=document.createElement(Object.keys(t)[o]);i.innerHTML=t[Object.keys(t)[o]],document.querySelector("#app").append(i)}m()});

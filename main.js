!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);console.log("Inside index.js");let o=function(){let e={name:t,tasks:[]};var t;return{createProject:function(t){console.log("Inside createProject()"),e.name=t,console.log(e.name),console.log(e.tasks),function(e){console.log("Inside storeInStorage()"),window.localStorage.setItem(e,e)}(t)}}}(),r=function(){const e=document.querySelector("#content"),t=document.createElement("main"),n=document.createElement("div");return n.classList.add("projects-container"),n.innerHTML="<h2>Projects</h2>",{render:function(){!function(){console.log("Inside createInputProjectContainer()");const o=document.createElement("div");o.classList.add("input-project-container"),o.innerHTML='<label for="input-project"></label><input id="input-project" placeholder="New project...">',n.append(o),t.append(n),e.append(t)}(),function(){console.log("Inside createUserProjectContainer()");const o=document.createElement("div");o.classList.add("user-project-container"),n.append(o),t.append(n),e.append(t)}()},createUserProject:function(o){console.log("Inside createUserProject()");const r=document.createElement("p");r.classList.add("user-project"),r.innerHTML=o;const c=document.querySelector(".user-project-container");c.append(r),n.append(c),t.append(n),e.append(t)}}}();r.render(),document.getElementById("input-project").addEventListener("change",(function(e){let t=document.getElementById("input-project").value;console.log(t),o.createProject(t),r.createUserProject(t),document.getElementById("input-project").value=""}))}]);
!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;function r(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){o=setInterval(r,1e3),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.50c38eb8.js.map
"use strict";document.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("colorMode"),t=document.querySelector("body"),d=document.getElementById("dark"),c=document.getElementById("light");"dark"===e?(t.classList.add("dark"),d.checked=!0):(t.classList.add("light"),c.checked=!0),document.querySelectorAll(".toggle__wrapper input").forEach((function(e){e.addEventListener("click",(function(){d.checked?(t.classList.remove("light"),t.classList.add("dark"),localStorage.setItem("colorMode","dark")):c.checked&&(t.classList.remove("dark"),t.classList.add("light"),localStorage.setItem("colorMode","light"))}))}))}));//# sourceMappingURL=script.js.map

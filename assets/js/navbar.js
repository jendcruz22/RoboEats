/* Reference: https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp */
/* Open */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.querySelector("nav").style.display ="none";
}
  
/* Close */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.querySelector("nav").style.display ="block";
}
import "./style.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");

const content = document.querySelector("#content");
content.innerHTML="";

loadHome(); //loads the homepage initially

const nav = document.querySelector("nav");
nav.addEventListener("click", function(event) {
    switch (event.target.id) {
        case homeBtn.id:
            content.innerHTML="";
            loadHome();
            break;
        case menuBtn.id:
            content.innerHTML="";
            loadMenu();
            break;
        case aboutBtn.id:
            content.innerHTML="";
            loadAbout();
    }
});
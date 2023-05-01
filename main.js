import { APP_STATE } from "./js/global.js";
import { createJobFile } from "./components/JobFile.js";
import { slideLeft, slideRight, keepOnWindowChange } from "./js/sliderButtons.js";
import { fetchNui } from "./js/nui.js";
import { hiring } from "./js/hire.js";


async function init() {
    // load from json
    // remplace fetch par fetchNui pour passer sur le callback
    const response = await fetch("jobFile.json");
    const json = await response.json();
    APP_STATE.elements = json.jobs;

    const jobsContainer = document.querySelector("#App>div");
    const nav = document.querySelector("#App>nav");

    for (let i = 1; i < APP_STATE.elements.length; i++) {
        APP_STATE.mid.push(false);
    }

    // Create filler elements
    const fillerStart = document.createElement("article");
    fillerStart.classList.add("filler");
    const fillerEnd = document.createElement("article");
    fillerEnd.classList.add("filler");

    APP_STATE.loadedInDom.push(fillerStart);
    jobsContainer.appendChild(fillerStart);

    // create component and add to the DOM
    let job;
    let dot;
    for (let i = 0; i < APP_STATE.elements.length; i++) {
        job = createJobFile(APP_STATE.elements[i]);
        dot = document.createElement("span");
        // initialize the second card to be the middle one
        if (i == 1) {
            job.classList.add("mid");
            dot.classList.add("mid");
        }
        APP_STATE.loadedInDom.push(job);
        nav.appendChild(dot);
        jobsContainer.appendChild(job);
    }
    
    APP_STATE.loadedInDom.push(fillerEnd);
    jobsContainer.appendChild(fillerEnd);

    // Enable slider EventListener
    document.getElementById("rightButton").addEventListener("click", slideRight);
    document.getElementById("leftButton").addEventListener("click", slideLeft);
    window.addEventListener("resize", keepOnWindowChange);
    const buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {buttons[i].addEventListener("click", hiring)}

    // place to the right card at the launch of the interface
    APP_STATE.loadedInDom[2].scrollIntoView({behavior: "instant", inline: "center"});
}

// ---------------INIT--------------- //
init();


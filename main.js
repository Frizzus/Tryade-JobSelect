import { APP_STATE } from "./js/global.js";
import { createJobFile } from "./components/JobFile.js";
import { slideLeft, slideRight } from "./js/sliderButtons.js";


async function init() {
    // load from json
    const response = await fetch("jobFile.json");
    const json = await response.json();
    APP_STATE.elements = json.jobs;

    const jobsContainer = document.querySelector("#App>div");

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
    for (let i = 0; i < APP_STATE.elements.length; i++) {
        job = createJobFile(APP_STATE.elements[i]);
        if (i == 0) {
            job.classList.add("mid");
        }
        APP_STATE.loadedInDom.push(job);
        jobsContainer.appendChild(job);
    }
    
    APP_STATE.loadedInDom.push(fillerEnd);
    jobsContainer.appendChild(fillerEnd);

    // Enable slider EventListener
    document.getElementById("rightButton").addEventListener("click", slideRight);
    document.getElementById("leftButton").addEventListener("click", slideLeft);
}

// ---------------INIT--------------- //
init();


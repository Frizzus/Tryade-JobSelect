import { APP_STATE } from "./global.js";
const jobsContainer = document.querySelector("#App>div");

export function slideRight() {
    const state = APP_STATE.mid; // bool[]

    if (currentMid() + 2 < state.length ) {
        state.unshift(state.pop());
        APP_STATE.loadedInDom[currentMid()].scrollIntoView({behavior: "smooth", inline: "center"});
        updateState();
    }
}

export function slideLeft() {
    const state = APP_STATE.mid; // bool[]

    if (currentMid() - 2 >= 0 ) {
        state.push(state.shift());
        APP_STATE.loadedInDom[currentMid()].scrollIntoView({behavior: "smooth", inline: "center"});
        updateState();
    }
}

function updateState() {
    const loadedInDom = APP_STATE.loadedInDom; // HTMLElements[]
    const mid = APP_STATE.mid; // bool[]
    
    for (let i = 0; i < loadedInDom.length; i++) {
        if (mid[i]) {
            loadedInDom[i].classList.add("mid");
        }
        else{
            loadedInDom[i].classList.remove("mid");
        }
    }
}

function currentMid() {
    for (let i = 1; i < APP_STATE.mid.length-1; i++) {
        if (APP_STATE.mid[i]) {
            return i;
        }
    }
}
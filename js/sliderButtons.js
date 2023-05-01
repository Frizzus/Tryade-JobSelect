import { APP_STATE } from "./global.js";
const nav = document.querySelector("#App>nav");

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

export function keepOnWindowChange() {
    APP_STATE.loadedInDom[currentMid()].scrollIntoView({behavior: "instant", inline: "center"});
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

    for (let i = 0; i < nav.children.length; i++) {
    if (mid[i+1]) {
            nav.children[i].classList.add("mid");
        }
        else{
            nav.children[i].classList.remove("mid");
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
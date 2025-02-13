import {getElement, getElements, addClass, removeClass, toggleClass, createElement} from "../utils/domUtils.js"
import {fetchRandomJoke} from "../modules/api.js"

async function generateRandomJoke(){
    getElement('#random-joke__first-button').addEventListener('click', async (event) =>{
    event.preventDefault();
    addClass(getElement('#random-joke__first-button'), 'd-none');
    removeClass(getElement('#random-joke__second-button'), 'd-none');
 })
}

function generateNewRandomJoke() {
    
}

export {generateRandomJoke};
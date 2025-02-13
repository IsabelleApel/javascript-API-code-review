import {getElement, getElements, addClass, removeClass, toggleClass, createElement} from "../utils/domUtils.js"
import {fetchRandomJoke} from "../modules/api.js"

async function randomJokeButton(){
    getElement('#random-joke__first-button').addEventListener('click', async (event) =>{
    event.preventDefault();
    addClass(getElement('#random-joke__first-button'), 'd-none');
    removeClass(getElement('#random-joke__second-button'), 'd-none');
    removeClass(getElement('#randomJokeText'), 'd-none');
    generateRandomJoke();
 })
}

getElement('#random-joke__second-button').addEventListener('click', async (event) => {
    event.preventDefault(); 
    generateRandomJoke()
})

async function generateRandomJoke() {
        let jokeText = getElement('#randomJokeText');
        let jokeAvatar = getElement('#randomJokeAvatar');
        let fetchedJoke = await fetchRandomJoke();
        
        jokeText.textContent = fetchedJoke.value;
        jokeAvatar.src = fetchedJoke.icon_url;
       
}

export {randomJokeButton};
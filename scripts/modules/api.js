async function fetchRandomJoke(){    
    let randomJoke = await fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => { return data })
        .catch(error => console.log(error.message));
    
    return randomJoke;
}

export {fetchRandomJoke};
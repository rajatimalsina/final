var storage = new Array();
var start;
var end;
var strike = 0;

 const checkerEvent = async function(event) {
    event.preventDefault();
        let poke;
        let numb;
        let store;
        let checker = false;

        if (parseInt(document.getElementById("point").innerText) == parseInt(document.getElementById("totalPoints").innerText)) {
            alert("You got all the points possible. You won the game and therefore are a Pokemon Master");
        }

        if (strike >= 5) {
            strike = 5;
            alert("You got 5 strikes. Game over. Now you will be taken to the main menu to either play this game again or play another game.");
            location.reload();
        }
        for (let i = start; i < end; i++) {
            poke = await Pokemon.find(i);
  
            if (document.getElementById("PokemonName").value == poke.name) {
                for (let i = 0; i < storage.length; i++) {
                    if (document.getElementById("PokemonName").value == storage[i]) {
                        checker = true;
                        alert("You already typed this name.");
                    }
                }
                if (!checker) {
                    numb = i;
                    store = parseInt(document.getElementById("point").innerText);
                    store += 1;
                    document.getElementById("point").innerText = store;
                    storage.push(document.getElementById("PokemonName").value);
                    new PokemonView(poke, $('#Pokemonall'), numb);
                }
                break;
            } 

            if (i == end - 1) {
                strike += 1;
                document.getElementById("mistake").innerText = strike;
            }

        }
    }

    const checkMovies = async function(event) {
        event.preventDefault();
        let i = Math.floor(Math.random() * 1000) + 1; 
        let movieinfo = await Movie.find(i);
        new MovieView(movieinfo, $('#movieReset'));

    }

    const checkFact = async function(event) {
        event.preventDefault(); 
        let months = document.getElementById("month").value;
        let days = document.getElementById("day").value;
        let factinfo = await Fact.find(months, days);
        new FactView(factinfo, $('#factReset'));
    }



    const goBack = async function(event) {
        event.preventDefault();
        location.href = "/index.html"        
    }

    const genOne = async function(event) {
        start = 1;
        end = 152;
        const Pokethings = $('#pokeReset');
        Pokethings.empty();
        let oneGen = $(`
        <div id = "Pokemonall"> 
            <h1 class="title"> Pokemon 1st Generation guessing game </h1>
            <h2>Instructions: </h2>
            <h3> 1. Type the pokemon name and see if you get it right. Make sure to type the answer in all lowercase. <h3>
            <h4> 2. If you guess more than five wrong, then the game ends. </h4>
            <h5> 3. If you click the back button, it will take you to the main menu and reset the game. </h5>
            <input id = "PokemonName" type = "text">
            <button id = "check" class="button is-success">Enter</button>
            <button id = "back" class="button is-danger">Back</button>
            <p> Strikes: </p>
            <p id = "mistake"> 0 </p>
            <p>Points: </p>
            <p id = "point"> 0 </p>
            <label for = "total"> Total Points available: </label>
            <p id = "totalPoints"> 151 </p>
        </div>
        `);
        Pokethings.append(oneGen);
    }

    const genTwo = async function(event) {
        start = 152;
        end = 252;
        const Pokethings = $('#pokeReset');
        Pokethings.empty();
        let oneGen = $(`
        <div id = "Pokemonall"> 
            <h1 class="title"> Pokemon 2nd Generation guessing game </h1>
            <h2>Instructions: </h2>
            <h3> 1. Type the pokemon name and see if you get it right. Make sure to type the answer in all lowercase. <h3>
            <h4> 2. If you guess more than five wrong, then the game ends. </h4>
            <h5> 3. If you click the back button, it will take you to the main menu and reset the game. </h5>
            <input id = "PokemonName" type = "text">
            <button id = "check" class="button is-success">Enter</button>
            <button id = "back" class="button is-danger">Back</button>
            <p> Strikes: </p>
            <p id = "mistake"> 0 </p>
            <p>Points: </p>
            <p id = "point"> 0 </p>
            <label for = "total"> Total Points available: </label>
            <p id = "totalPoints"> 100 </p>
        </div>
        `);
        Pokethings.append(oneGen);
    }

    const genThree = async function(event) {
        start = 252;
        end = 387;
        const Pokethings = $('#pokeReset');
        Pokethings.empty();
        let oneGen = $(`
        <div id = "Pokemonall"> 
            <h1 class="title"> Pokemon 3rd Generation guessing game </h1>
            <h2>Instructions: </h2>
            <h3> 1. Type the pokemon name and see if you get it right. Make sure to type the answer in all lowercase. <h3>
            <h4> 2. If you guess more than five wrong, then the game ends. </h4>
            <h5> 3. If you click the back button, it will take you to the main menu and reset the game. </h5>
            <input id = "PokemonName" type = "text">
            <button id = "check" class="button is-success">Enter</button>
            <button id = "back" class="button is-danger">Back</button>
            <p> Strikes: </p>
            <p id = "mistake"> 0 </p>
            <p>Points: </p>
            <p id = "point"> 0 </p>
            <label for = "total"> Total Points available: </label>
            <p id = "totalPoints"> 135 </p>
        </div>
        `);
        Pokethings.append(oneGen);
    }

    const genFour = async function(event) {
        start = 387;
        end = 495;
        const Pokethings = $('#pokeReset');
        Pokethings.empty();
        let oneGen = $(`
        <div id = "Pokemonall"> 
            <h1 class="title"> Pokemon 4th Generation guessing game </h1>
            <h2>Instructions: </h2>
            <h3> 1. Type the pokemon name and see if you get it right. Make sure to type the answer in all lowercase. <h3>
            <h4> 2. If you guess more than five wrong, then the game ends. </h4>
            <h5> 3. If you click the back button, it will take you to the main menu and reset the game. </h5>
            <input id = "PokemonName" type = "text">
            <button id = "check" class="button is-success">Enter</button>
            <button id = "back" class="button is-danger">Back</button>
            <p> Strikes: </p>
            <p id = "mistake"> 0 </p>
            <p>Points: </p>
            <p id = "point"> 0 </p>
            <label for = "total"> Total Points available: </label>
            <p id = "totalPoints"> 107 </p>
        </div>
        `);
        Pokethings.append(oneGen);
    }

    const genFive = async function(event) {
        start = 495;
        end = 650;
        const Pokethings = $('#pokeReset');
        Pokethings.empty();
        let oneGen = $(`
        <div id = "Pokemonall"> 
            <h1 class="title"> Pokemon 5th Generation guessing game </h1>
            <h2>Instructions: </h2>
            <h3> 1. Type the pokemon name and see if you get it right. Make sure to type the answer in all lowercase. <h3>
            <h4> 2. If you guess more than five wrong, then the game ends. </h4>
            <h5> 3. If you click the back button, it will take you to the main menu and reset the game. </h5>
            <input id = "PokemonName" type = "text">
            <button id = "check" class="button is-success">Enter</button>
            <button id = "back" class="button is-danger">Back</button>
            <p> Strikes: </p>
            <p id = "mistake"> 0 </p>
            <p>Points: </p>
            <p id = "point"> 0 </p>
            <label for = "total"> Total Points available: </label>
            <p id = "totalPoints"> 156 </p>
        </div>
        `);
        Pokethings.append(oneGen);
    }

    const genSix = async function(event) {
        start = 650;
        end = 722;
        const Pokethings = $('#pokeReset');
        Pokethings.empty();
        let oneGen = $(`
        <div id = "Pokemonall"> 
            <h1 class="title"> Pokemon 6th Generation guessing game </h1>
            <h2>Instructions: </h2>
            <h3> 1. Type the pokemon name and see if you get it right. Make sure to type the answer in all lowercase. <h3>
            <h4> 2. If you guess more than five wrong, then the game ends. </h4>
            <h5> 3. If you click the back button, it will take you to the main menu and reset the game. </h5>
            <input id = "PokemonName" type = "text">
            <button id = "check" class="button is-success">Enter</button>
            <button id = "back" class="button is-danger">Back</button>
            <p> Strikes: </p>
            <p id = "mistake"> 0 </p>
            <p>Points: </p>
            <p id = "point"> 0 </p>
            <label for = "total"> Total Points available: </label>
            <p id = "totalPoints"> 72 </p>
        </div>
        `);
        Pokethings.append(oneGen);
    }

    const genSeven = async function(event) {
        start = 722;
        end = 810;
        const Pokethings = $('#pokeReset');
        Pokethings.empty();
        let oneGen = $(`
        <div id = "Pokemonall">
            <h1 class="title"> Pokemon 7th Generation guessing game </h1>
            <h2>Instructions: </h2>
            <h3> 1. Type the pokemon name and see if you get it right. Make sure to type the answer in all lowercase. <h3>
            <h4> 2. If you guess more than five wrong, then the game ends. </h4>
            <h5> 3. If you click the back button, it will take you to the main menu and reset the game. </h5>
            <input id = "PokemonName" type = "text">
            <button id = "check" class="button is-success">Enter</button>
            <button id = "back" class="button is-danger">Back</button>
            <p> Strikes: </p>
            <p id = "mistake"> 0 </p>
            <p>Points: </p>
            <p id = "point"> 0 </p>
            <label for = "total"> Total Points available: </label>
            <p id = "totalPoints"> 88 </p>
        </div>
        `);
        Pokethings.append(oneGen);
    }

    const genEight = async function(event) {
        start = 810;
        end = 899;
        const Pokethings = $('#pokeReset');
        Pokethings.empty();
        let oneGen = $(`
        <div id = "Pokemonall"> 
            <h1 class="title"> Pokemon 8th Generation guessing game </h1>
            <h2>Instructions: </h2>
            <h3> 1. Type the pokemon name and see if you get it right. Make sure to type the answer in all lowercase. <h3>
            <h4> 2. If you guess more than five wrong, then the game ends. </h4>
            <h5> 3. If you click the back button, it will take you to the main menu and reset the game. </h5>
            <input id = "PokemonName" type = "text">
            <button id = "check" class="button is-success">Enter</button>
            <button id = "back" class="button is-danger">Back</button>
            <p> Strikes: </p>
            <p id = "mistake"> 0 </p>            
            <p>Points: </p>
            <p id = "point"> 0 </p>
            <label for = "total"> Total Points available: </label>
            <p id = "totalPoints"> 89 </p>
        </div>
        `);
        Pokethings.append(oneGen);
    }


$(document).ready(() => {

    $('#pokeClick').on('click', async (e) => {
        const Pokethings = $('#gameReset');
        Pokethings.empty();
        let oneGen = $(`
        <div id = "pokeReset" class="container">
        <h1 class="title">Pokemon Guesser Game </h1>
        <h2>Click what generation of pokemons you want to guess.</h2>
        <div id="pokemonList">
            <button id = "one" class="button is-info" >1st generation</button> 
            <button id = "two" class="button is-info">2nd generation</button> 
            <button id = "three" class="button is-info">3rd generation</button> 
            <button id = "four" class="button is-info">4th generation</button> <br> <br>
            <button id = "five" class="button is-info">5th generation</button> 
            <button id = "six" class="button is-info">6th generation</button> 
            <button id = "seven" class="button is-info">7th generation</button> 
            <button id = "eight" class="button is-info">8th generation</button> 
        </div>
      </div>
        `)
        Pokethings.append(oneGen);
    });

    $('#movieClick').on('click', async (e) => {
        const Moviethings = $('#gameReset');
        Moviethings.empty();
        let oneGen = $(`
        <div id = "movieReset" class="container">
        <h1 class="title">Click the button below to randomly generate a movie that you can watch. </h1>
        <h2> So, I see that you are trying to get rid of the boredem by watching a movie. </h2> 
        <h3>Instructions: <h2>
        <h4> 1. Clicking the green button outputs a random movie and some important information about the movie. </h4>
        <h5> 2. If you don't like the movie generated, you can simply click the green button again to generate another movie </h5>
        <h6> 3. If you click the back button, it will take you to the main menu. </h6>
        <div id="movieList">
            <button id = "movieCheck" class="button is-success">Click to get random movies to watch</button>
            <button id = "back" class="button is-danger">Back</button>
        </div>
      </div>
        `)
        Moviethings.append(oneGen);
    });

    $('#factClick').on('click', async (e) => {
        const Factthings = $('#gameReset');
        Factthings.empty();
        let oneGen = $(`
        <div id = "factReset" class="container">
        <h1 class="title">Random Date Fact generator </h1>
        <h2> Wow you are spending your free time learning about random facts. I respect it. </h2>
        <h3>Instructions: </h3>
        <h4> 1. Put in a number (1-12) on the month field for the month and put a number for the date and generate a random fact about something in that day.</h4>
        <h5> 2. You can click enter on the same day and month or change to a different day as much as you want to generate new facts. </h5>
        <h6> 3. If you click the back button, it will take you to the main menu. </h6>
        <div id="FactList">
            <label for = "month"> Month: </label>
            <input id = "month" type = "text" name = "month"></input>
            <label for = "day"> Day: </label>
            <input id = "day" type = "text" name = "day"></input>
            <button id = "factCheck" class="button is-success">Enter</button>
            <button id = "back" class="button is-danger">Back</button>
        </div>
      </div>
        `)
        Factthings.append(oneGen);
    });



    $("body").on("click", "#check", checkerEvent);

    $("body").on("click", "#back", goBack);

    $("body").on("click", "#one", genOne);
    $("body").on("click", "#two", genTwo);
    $("body").on("click", "#three", genThree);
    $("body").on("click", "#four", genFour);
    $("body").on("click", "#five", genFive);
    $("body").on("click", "#six", genSix);
    $("body").on("click", "#seven", genSeven);
    $("body").on("click", "#eight", genEight);

    $("body").on("click", "#movieCheck", checkMovies);

    $("body").on("click", "#factCheck", checkFact);


    });
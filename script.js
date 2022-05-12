let hangman = 7;

const randomWordIndex = Math.floor(Math.random() * 3);

//const category = [musical_instruments, movies, exotic_food]
const musical_instrument = {
    guitar: 'HINT: A String Instrument',
    piano: 'HINT: A Percussion Instrument',
    saxophone: 'HINT: A Wind Instrument',
}
const movie = {
    forest_gump: 'HINT: film made in 1994',
    godfather: 'HINT: film made in 1972',
    sherlock_holmes: 'HINT: film made in 2009',
}

const exotic_food = {
        grilled_dog: 'HINT: eaten in Vietnam and China',
        deep_fried_tarantula: 'HINT: eaten in Thailand',
        duck_fetus: 'HINT: eaten in Phillippines',
    }
    //game
function chooseCategory(value) {
    document.getElementById('submitButton').innerText

    //logic
    if (value == "musical_instrument") {

        hint = Object.values(musical_instrument)
        hinttext = hint[randomWordIndex]
        x = Object.keys(musical_instrument)[randomWordIndex]

    } else if (value == "movie") {

        hint = Object.values(movie)
        hinttext = hint[randomWordIndex]
        x = Object.keys(movie)[randomWordIndex]

    } else {
        hint = Object.values(exotic_food)
        hinttext = hint[randomWordIndex]
        x = Object.keys(exotic_food)[randomWordIndex]

    }

    alert(`You chose ${value}! You have ${hangman} chances left! Your ${hinttext}!`);

    //Answer Array
    const answerArray = [];
    for (i = 0; i < x.length; i++) {
        answerArray[i] = '_';
    }

    //Game loop

    alert(`This word has ${x.length} letters,`) && (answerArray)

    while (x !== answerArray.join('')) {
        alert(answerArray.join(' '));

        //update game
        let guess = prompt('Enter a letter');

        if (guess == false) {
            alert(`Please enter a letter`);

        } else if (guess.length !== 1) {
            alert(`Please enter one letter at a time!`)

        } else if (x.includes(guess) == false) {
            hangman--
            alert(`${guess} is not in the word! Guess Again! You have ${hangman} lives left!`);

        } else {

            for (let y = 0; y < x.length; y++) {

                if ((x)[y] === guess) {
                    answerArray[y] = guess;
                    x.length--;

                    if (x == answerArray.join('')) {
                        alert(`Nice Job! The word is ${x}! You WIN!!!`)
                        break;
                    }
                    alert(`You guessed ${guess}! ${guess} is in the word. Guess Again! `);

                }
            }
        }
    }
}
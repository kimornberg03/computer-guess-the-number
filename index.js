let MAX_NUMBER = 100
let MIN_NUMBER = 0

let minGuess = MIN_NUMBER
let maxGuess = MAX_NUMBER
let counter = 0

let guess = (minGuess + maxGuess) / 2



counter = addEventListener("click", function() {
    counter = counter + 1
})

document.getElementById('too-high-btn').addEventListener('click', function() {
    maxGuess = guess
    guess = (minGuess + maxGuess) / 2
    setMessage(`Is it ${Math.floor(guess)}?`)
        // Vad ska hända när man tryckt too high?


})

document.getElementById('too-low-btn').addEventListener('click', function() {
    minGuess = MIN_NUMBER + guess
    guess = (minGuess + maxGuess) / 2
    setMessage(`Is it ${Math.floor(guess)}?`)
        // Vad ska hända när man tryckt too low?

})

document.getElementById('is-correct-btn').addEventListener('click', function() {
    setMessage(`It was ${(counter)}?`)
        // Vad ska hända när man tryckt too low?

})


function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'


    setMessage(`Is it ${guess}?`)
}

document
    .getElementById('start-btn')
    .addEventListener('click', start)
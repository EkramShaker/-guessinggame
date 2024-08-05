// Generate a Random Number
let y = Math.floor(Math.random() * 10 + 1);

// Counting the number of guesses
let guess = 1;

// Function to handle guess submission
function handleGuess() {
    // Number guessed by user    
    let x = document.getElementById("guessField").value;

    if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESSES ");
        resetGame();
    } else if (x > y) {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    } else {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER");
    }
}

// Function to reset the game
function resetGame() {
    guess = 1;
    y = Math.floor(Math.random() * 10 + 1);
    document.getElementById("guessField").value = '';
}

// Assign the handleGuess function to the button's click event
document.getElementById("submitguess").addEventListener("click", handleGuess);

// Reset the game when the window is loaded
window.onload = resetGame;

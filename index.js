let firstCard = 11
let secondCard = 10

let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true

let message = ""


function startGame() {
    if (sum <= 20) {
        message = "do you want to draw another card"
    } else if ( sum === 21) {
    message = "Woohoo!! You've got the Blackjack 🥳"
        hasBlackJack = true
    }else{
        message = "You're out of the game"
        isAlive = false
    }

    console.log(message)

} 
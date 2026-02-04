let firstCard = 11
let secondCard = 10

let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true

let message = ""
let cardEL = document.getElementById('card-el')
let sumEL = document.getElementById('sum-el')
let messageEL = document.getElementById("message-el")
console.log(messageEL)


function startGame() {
    cardEL.textContent = "Card : " + firstCard + " " +  secondCard
     sumEL.textContent = "SUM : " + sum

    if (sum <= 20) {
        message = "do you want to draw another card"
    } else if ( sum === 21) {
    message = "Woohoo!! You've got the Blackjack"
        hasBlackJack = true
    }else{
        message = "You're out of the game"
        isAlive = false
    }

    messageEL.textContent = message
   

} 
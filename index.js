let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true

let message = ""
let cardEL = document.getElementById('card-el')
let sumEL = document.getElementById('sum-el')
let messageEL = document.getElementById("message-el")
console.log(messageEL)

function startGame(){
    renderGame()
}
function renderGame() {
    //cardEL.textContent = "Card : " + firstCard + " " +  secondCard
    cardEL.textContent = "Card : " + cards[0] + " " + cards[1]
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

function newCard() {
    console.log("Draw a new Card?")

    let card =  7
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()

}

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true

let message = ""
let cardEL = document.getElementById('card-el')
let sumEL = document.getElementById('sum-el')
let messageEL = document.getElementById("message-el")
console.log(messageEL)

console.log(cards)

function getRandomCard() {
   
    let randomCard = Math.floor( Math.random()*13 ) + 1
    if (randomCard === 1){
        return 11
    }else if (randomCard > 10 ){
        return 10
    }else{
        return randomCard
    }
}

function startGame(){
    isAlive = true
   
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
   
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()

}
function renderGame() { 
    //cardEL.textContent = "Card : " + firstCard + " " +  secondCard
    cardEL.textContent = "Card : " 
    for (let i = 0; i < cards.length; i++){
        cardEL.textContent += cards[i] + " " 
    }
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
     if (hasBlackJack === false && isAlive === true){
        newCard()
    }
    console.log("Draw a new Card?")

    let card =  getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()

}

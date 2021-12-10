
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let sum = 0
let sumEl = document.getElementById("sum-El")
let cardsEl = document.getElementById("cards-El")
function StartGame() {
    if (cards.length === 0 && isAlive == false){
        var firstCard = getRandomNumber()
        var secondCard = getRandomNumber()
        cards.push(firstCard)
        cards.push(secondCard)
        sum = firstCard + secondCard
        renderGame()
    } else if (cards.length != 0 && isAlive == false){
        cards = []
        sum = 0
        StartGame()
    }else{
        message = "Click on NEW CARD to draw another card"
        document.getElementById("msgEl").textContent = message
    }
}

function getRandomNumber() {
    let num = Math.floor(Math.random() * 13 + 1)
    if (num > 10){
        return 10
    } else if (num === 1){
        return 11
    }else {
        return num
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true
    } else if (sum === 21) {
        message = "Wohoo! You've got black jack!"
        hasBlackJack = true
        isAlive = false
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    document.getElementById("msgEl").textContent = message
}

function newCard() {
    if (isAlive == true && hasBlackJack == false){
        let newCard = getRandomNumber()
        cards.push(newCard)
        sum += newCard
        renderGame()    
    }else if (cards.length == 0){
        message = "Please Start Game"
        document.getElementById("msgEl").textContent = message
    }else{
        message = "Click on START to play again"
        document.getElementById("msgEl").textContent = message
    }
}

function reset() {
    location.reload()
}
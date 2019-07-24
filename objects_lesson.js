const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1
}
game.numGuesses = 0

game.play = function () {
    this.secretNum = Math.floor((Math.random() * this.biggestNum - this.smallestNum + 1)) //return number between 0 - .99999
}

game.play()
console.log(game.secretNum)

/*
const catalog = {
    'ABC-123': 79.99,
    'CAT-777': 249.00,
    'FUN-789': 3000
}

let sku = ''

while (sku !== 'quit') {
    sku = prompt('Ener SKU or "quit" to exit: ')
    let price = catalog[sku]
    alert(`The price of ${sku} is ${price}`)
}
 */

var randonNumber1 = Math.floor((Math.random() * 6) + 1)
var randonNumber2 = Math.floor((Math.random() * 6) + 1)

// Two differnt methods to select HTML components
document.getElementById('left-img').src = `images/dice${randonNumber1}.png`
document.querySelector('#right-img').src = `images/dice${randonNumber2}.png`

if (randonNumber1 == randonNumber2) {
    document.querySelector('h1').innerText = 'Draw!'
} else if (randonNumber1 < randonNumber2) {
    document.querySelector('h1').innerText = 'Player 2 won 🚩'
} else {
    document.querySelector('h1').innerText = '🚩 Player 1 won'
}

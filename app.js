const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
let timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

//randomly select a square on the grid
function randomSquare()  {
    squares.forEach(square => {
        square.classList.remove('mole')
    }) //get rid of possible residual class attributes during gameplay

    let randomPosition = squares[Math.floor(Math.random() * 9)]  //chooses random grid, which there are 9 sooo
    randomPosition.classList.add('mole') //makes mole appear

//assign random position to hit position(mole)
    hitPosition = randomPosition.id

}


//event listeners on mole
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

//time interval integration somehow

function moveMole() {
    timerId = setInterval(randomSquare, 500) //500 milliseconds
}

moveMole()

//countdown

function countDown() {
currentTime--
timeLeft.textContent = currentTime

if(currentTime == 0 ) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    hitPosition = null
    alert("GAME OVER! Your final score is " + result)
    
}

}

let countDownTimerId = setInterval(countDown, 1000) //1000 milliseconds = one second


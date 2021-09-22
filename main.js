let order  = []
let clickerOrder  = []
let score = 0

const blue  = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')
const red = document.querySelector('.red')
const green = document.querySelector('.green')

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickerOrder = []

  for(let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}

let lightColor = (element, number) => {
  number = number * 500 
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250)

  setTimeout(() => {
    element.classList.remove('selected')
  })  
}

let checkOrder = () => {
  for(let i in clickerOrder) {
    if(clickerOrder[i] != order[i]) {
      gameOver()
      break
    }
  }

  if(clickerOrder.length == order.length) {
    alert(`Pontuação: ${score}
    Você acertou! Iniciando próximo nível!`)
    nextLevel()
  }
}

let click = (color) => {
  clickerOrder[clickerOrder.length] = color;
  createColorElement(color).classList.add('selected')

  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
    checkOrder()
  }, 250) 
}

let createColorElement = (color) => {
  if(color == 0) {
    return green
  }
  else if (color == 1) {
    return red
  }
  else if (color == 2) {
    return yellow
  }
  else if (color == 3) {
    return blue
  }
}

let nextLevel = () => {
  score++
  shuffleOrder()
}

let gameOver = () => {
  alert(`Pontuação ${score}!
  Você perdeu o jogo!
  Clique em ok para iniciar um novo jogo.`)
  order = []
  clickerOrder = []

  playGame()
}

let playGame = () => {
  alert('Bem vindo ao Gênisis! Iniciando novo jogo!')
  score = 0

  nextLevel()
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()


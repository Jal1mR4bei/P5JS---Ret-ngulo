let xBall = 300
let yBall = 200 
let diamBall = 30

let speedXBall = 8
let speedYBall = 8

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#0C011A");
mostraBolinha()
movimentoBolinha()
verificacaoColisaoBorda()

function mostraBolinha(){
circle(xBall,yBall,diamBall)

}
fill("#F5E45D")

function movimentoBolinha(){
xBall += speedXBall
yBall += speedYBall
}
function verificacaoColisaoBorda(){
if (xBall + 15 > width || xBall - 15 < 0) {

  speedXBall *= -1
  
  }

if (yBall + 15 > height || yBall - 15 < 0){

 speedYBall *= -1
}
}

}

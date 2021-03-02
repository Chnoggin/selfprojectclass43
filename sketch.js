var player1, player1Img;
var player2, player2Img;
var database;
var gameState = 0;
var playerCount = 0;

var form;
var game;
var player;



function preload() {
  player1Img = loadImage("fighter1.png");
  player2Img = loadImage("fighter2.png");
}
function setup() {
  createCanvas(800, 800);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
  
  player1 = createSprite(200,400);
  player2 = createSprite(600,400);

  player1.addImage(player1Img);
  player2.addImage(player2Img);

  
}
function draw() {
  background("pink");
  drawSprites();
}

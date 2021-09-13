var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
  question = new Question();
  contestant = new Contestant();
   }


function draw(){
  background("pink");

}

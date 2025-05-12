//The setup function only happens once
var expand=0;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(249, 255, 51); //an RGB color for the canvas' background
  //circle
  stroke(54,51,88); // an RGB color for the circle's border
  strokeWeight(2);
  fill(223, 14, expand ); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,250,expand, expand); // center of canvas, 20px dia
  
  strokeWeight(5);
  fill(249, 80, expand);
  rect(mouseX-25,mouseY-25,50,85);
  fill(14, 248, expand);
  
  strokeWeight(2);
  triangle(216,445,130,45,90,100);
  strokeWeight(1);
  fill(186, 248, expand);
  textSize(100);
  textFont("Helvetica");
  text('CoolVibez',13,250);
  stroke(1,1,1);
  ellipse(random(width),random(height), 10, 10);
}
function mousePressed() {

if (expand>=225) {expand=0} 
  else {expand= expand+10};

  expand= expand+15;

}
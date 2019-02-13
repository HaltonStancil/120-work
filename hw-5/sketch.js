
function setup(){
  createCanvas(1000, 500);

frameRate(60);
}

// initial variables
let redValue = 0;
let angle = 0;

function draw() {

  background(0,255,0);

// color shifting ellipse
  fill(redValue, 0 ,0);
  ellipse(750,250,200,75);
  redValue = redValue % 255;
  redValue = redValue + 1;

// spinning ellipse with mouse
push();
    let target_fr = mouseX * 0.3 + 0.25;
    frameRate( target_fr );

    push();
    translate(250,250);
    rotate( radians(angle) );
    fill('black');
    ellipse(0,0,200,75 );
    pop();

    angle = angle - 25;
pop();
// spinning ellipse no mouse
    push();
    translate(width*0.5, height*0.5);
    fill('blue');
    rotate(radians(angle * (-1)));
    ellipse(0,0,200,75);
    pop();

}

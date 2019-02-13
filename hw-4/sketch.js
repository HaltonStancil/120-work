function setup() {
    createCanvas( 1000, 800 );
    background( '#e3f9c8' );
}

function draw() {
stroke('red');
strokeWeight(5);
fill('blue');
triangle(20, 20, 40, 20, 20, 40);
arc(300, 200, 300, 300, radians(120), radians(230), PI);

strokeWeight(30);
line(20, 300, 480, 1000);
}

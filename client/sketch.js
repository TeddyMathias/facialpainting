var ctracker;
function setup() {
// setup capture and hide video
var videoInput = createCapture(VIDEO);
videoInput.size(700, 500);
videoInput.position(0, 0);
videoInput.hide();
// setup the canvas
var cnv = createCanvas(700, 500);
cnv.position(0, 0);
// setup face tracking
ctracker = new clm.tracker({useWebGL : true});
ctracker.init(pModel);
ctracker.start(videoInput.elt);
noStroke();
background(255);
}



function draw() {
// get array of face marker positions [x, y] format
var positions = ctracker.getCurrentPosition();
if(positions.length > 0)
{
// smile
if(  (positions[50][0]-positions[44][0])   >  (positions[69][0]-positions[65][0]) )   {
stroke(255,235,0);}
else{stroke(0,0,200)};
// duckface
if(  (positions[50][0]-positions[55][0])   <  (positions[39][0]-positions[35][0]) )   {
stroke(255,0,50);}
else{};
// // // eyebrows
if((positions[24][1]-positions[20][1]) > (positions[46][1]-positions[42][1])-2)   {
stroke(25, 240, 0);}
// ohh face
if((positions[57][1]-positions[60][1]) > (positions[37][1])-positions[40][1]+1)   {
// r = random(0,255);
// g = random(0,255);
// b = random(0,255);
// fill(r,g,b);
// sr = random(200,255);
// sg = random(0,255);
// sb = random(0,255);
// stroke(255,0,0);
for (var i=0; i<positions.length; i++) {
	// set the color of the ellipse based on position on screen
	r=random(0,255);
	g=random(0,255);
	b=random(0,255);
	fill(r,g,b);
	stroke(0,20,255);
	// draw ellipse at each position point
	}
	}
	// shrunk
	else{};
	if((positions[7][1]-positions[33][1]) < 0)   {
	stroke(255);
	fill(255);
	}
	// erasure
	else{};
	if((positions[27][1]+20 > positions[11][1]))   {
	stroke(255);
	fill(255);
	}
	if((positions[32][1]+20 > positions[3][1]))   {
	stroke(255);
	fill(255);
	}
	else{};
	var faceHeight = (positions[7][1]-positions[53][1])/1.7;
	ellipse(positions[62][0], positions[62][1], faceHeight,faceHeight);
	//eyes
	ellipse(positions[32][0], positions[32][1], faceHeight,faceHeight);
	ellipse(positions[27][0], positions[27][1], faceHeight,faceHeight);
	ellipse(positions[44][0], positions[44][1], faceHeight,faceHeight);
	ellipse(positions[56][0], positions[56][1],faceHeight,faceHeight);
	ellipse(positions[57][0], positions[57][1], faceHeight,faceHeight);
	ellipse(positions[58][0], positions[58][1], faceHeight,faceHeight);
	ellipse(positions[50][0], positions[50][1], faceHeight,faceHeight);
	ellipse(positions[59][0], positions[59][1], faceHeight,faceHeight);
	ellipse(positions[60][0], positions[60][1], faceHeight,faceHeight);
	ellipse(positions[61][0], positions[61][1], faceHeight,faceHeight);
	// eyebrows
	ellipse(positions[15][0], positions[15][1], faceHeight,faceHeight);
	ellipse(positions[16][0], positions[16][1], faceHeight,faceHeight);
	ellipse(positions[17][0], positions[17][1], faceHeight,faceHeight);
	ellipse(positions[18][0], positions[18][1], faceHeight,faceHeight);
	ellipse(positions[19][0], positions[19][1], faceHeight,faceHeight);
	ellipse(positions[20][0], positions[20][1], faceHeight,faceHeight);
	ellipse(positions[21][0], positions[21][1], faceHeight,faceHeight);
	ellipse(positions[22][0], positions[22][1], faceHeight,faceHeight);
	}
	}
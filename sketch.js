var mySong;
var analyser;
var myImage;


function preload(){
  // put preload code here
  myImage = loadImage("./assets/pablo.png");
  mySong = loadSound("./assets/narcos.mp3");
}


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  //image(myImage, 0, 0, windowWidth, windowHeight);
  //myImage.filter("erode");
  analyser = new p5.Amplitude;
  analyser.setInput(mySong);
  frameRate(6);
}

function draw() {
// put drawing code here

image(myImage, 0, 0, windowWidth, windowHeight);
//myImage.filter("erode");


  push();
   for (var i = 0; i<6000; i+=7){
     var posX = random(0, width);
     var posY = random(0, height);
     var col = get(posX, posY);
     fill(col);
     noStroke();
     //rect(posX, posY, 10, 5);
pop();

  if (mouseX < width/2) {
       //stop
       rect(posX, posY, 10, 10);
       mySong.pause();
     } else {
       //play
       if(mySong.isPlaying() == false) {
         mySong.play();
       }
       var volume = analyser.getLevel();
       console.log(volume);
        volume = map(volume, 0, 1, 50, width/2);

     }

   }

   ellipse(windowWidth/1.2, windowHeight/2, volume);

   push();
    stroke(255, 255, 255, 90);
    strokeWeight(7)
    line(windowWidth/2, 0, windowWidth/2, windowHeight);
    pop();


   push();
      noStroke();
      fill(255);
      textSize(20);
      textFont('Avenir');
      text('NARCOS', windowWidth/1.2, windowHeight/2);
      text('POLICE', windowWidth/4, windowHeight/5);
      textSize(12);
      text('put your mouse to the Police side to make Pablo dissapeared', windowWidth/9, windowHeight/3.9);
      pop();


}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//function mousePressed() {
  //var fs = fullscreen();
//  fullscreen(!fs);
//}

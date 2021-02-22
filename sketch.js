var song;
var gui;
let r, g, b;


//built in function to p5js, it runs once
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  d = select('.div-block');
  d.position(0,0);
  
 r = random(255);
  g = random(255);
  b = random(255);
  
  song = loadSound("music/musicbox.mp3", loaded);
 
  
   gui = new Gui();
  let gui_setup = new dat.GUI();
 
  
  gui_setup.add(gui,'squares',1,50).step(1);
  gui_setup.add(gui,'distance',10,40).step(1);
  gui_setup.add(gui, 'volume', 0, 1).step(.05);
  gui_setup.addColor(gui,'color');
  gui_setup.add(gui, 'showDescription').onChange(description);
 
  
  
  
}



 function loaded(){
  song.play();
   song.loop();
   
   
  }


function draw() {
  background(r, g, b, 127);
  
  song.setVolume(gui.volume);
  
  
   
  
  noFill();
  
 
  
 
  
  for(let i = windowWidth * .25; i <= windowWidth * .75; i+=windowWidth * .25){
    for(let y = windowHeight/2-windowHeight/4; y <= windowHeight/2 + windowHeight/4; y+=windowHeight/4){
      
     
  house(i,y,gui.squares,gui.distance,gui.volume,gui.color);
  }
  }
  
  print(windowWidth/2 - 100,"mod");
  print(windowWidth/2,"width/2");
  noLoop();
}



//create function with 4 arguments/variables to use later
function house(xPos,yPos,steps,num,color){
  //pass in variables 
  stroke(gui.color);
  for(var i = 0;i <= num; i++){
    rectMode(CENTER);
    rect(xPos,yPos,steps * i/3,steps * i/3);
  }
}

function mousePressed(){
  redraw();
  
   
    
    r = random(255);
    g = random(255);
    b = random(255);

}

function mouseDragged(){
  redraw();
}

function description(){
  if(gui.showDescription){
    d.style('display','block');
     
  } else {
    d.style('display','none');
  }
}

function Gui(){
  this.squares = 40;
  this.distance = 11;
  this.volume = .5;
  this.color = '#e3e224';
  this.showDescription = true;
  
  
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


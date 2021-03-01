var Bird;
var pipes  =  [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  Bird=new Bird();
  pipes.push(new pipe());
}

function draw() {
  background(50);
  Bird.Update();
  Bird.Show();
  
  for(var i=pipes.length-1;  i>=0;  i--){
    pipes[i].show();
    pipes[i].update();
    
    if(pipes[i].hits(Bird)){
      console.log("dsf");
    }
    
    if(pipes[i].offScreen()){
      pipes.splice(i,1);
    }
  }
  
  if(frameCount  %  75  ==  0){
    pipes.push(new pipe());
  }
}

function keyPressed(){
  if(key  ==  ' '){
   Bird.Up();
  }
}
function mousePressed(){
   Bird.Up();
}
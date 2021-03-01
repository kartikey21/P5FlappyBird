function pipe(){
  
  this.top  =  random(height/2);
  this.bottom  =  random(height/2);
  this.x  =  width;
  this.w  =  20;
  this.speed  =  2;
  this.hitHighlight  =  false;
  
  this.show  =  function(){
    fill(255);
    if(this.hitHighlight  ==  true){
    fill(255,0,0);
      
    }
    rect(this.x,0,this.w,this.top);
    rect(this.x,height-this.bottom,this.w,this.bottom);
  }
  
  this.update  =  function(){
    this.x  -=  this.speed;
  }  
  
  this.hits  =  function(bird){
    if(bird.y - bird.BirdSize/2  <  this.top  ||  bird.y  + bird.BirdSize/2  >  height  -  this.bottom){
      if(bird.x  >  this.x  && bird.x  <  this.x  +this.w){
  this.hitHighlight  =  true;
        
      return true;
        }
    }
    return false;
  }
  
  this.offScreen  =  function(){
    if(this.x<-this.w){
      return true;
    }
    else{
      return false;
    }
  }
}
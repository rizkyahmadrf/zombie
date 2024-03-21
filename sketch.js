class Walker { 
  constructor(x,y){ 
    this.location = createVector(x, y); 
    this.velocity = createVector(random(-15,5), random(-5,15)) 
    this.acceleration = createVector(0,0); 
  }
  
  
  display(){ 
    strokeWeight(3); 
    fill(187,10,30);
    triangle(this.location.x, this.location.y,this.location.x-20, this.location.y-30,this.location.x+20, this.location.y-30)
    triangle(this.location.x, this.location.y,this.location.x-20, this.location.y+105,this.location.x+20, this.location.y+105)
    ellipse(this.location.x, this.location.y+40,40,115)
    fill(0,0,0)
    ellipse(this.location.x, this.location.y,30,35)
    fill(255,255,255)
    ellipse(this.location.x-5, this.location.y,5,5)
    ellipse(this.location.x+5, this.location.y,5,5)



  } 
  
  update(){ 
    var mouse = createVector(mouseX, mouseY); 
    var dir = mouse.sub(this.location); 
    var topSpeed = 5
    dir.normalize(); 
    dir.mult(0.1); 
    this.velocity.add(this.acceleration); 
    this.velocity.add(dir); 
    this.velocity.limit(topSpeed) 
    this.location.add(this.velocity);
  } 
  
   cekUjung(){ 
    if ( this.location.x > windowWidth ) { 
      this.location.x = 0; 
    } 
    else if (this.location.x < 0){ 
      this.location.x = windowWidth; 
    } 
   
    if ( this.location.y > windowHeight ) { 
      this.location.y = 0; 
    } 
    else if (this.location.y < 0){ 
      this.location.y = windowHeight; 
    } 
  } 
}

let walker = [];
let mouse;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i=0; i<30;i++){
    walker[i] = new Walker(random(windowWidth), random(windowHeight));   
  }
 
}

function draw() {
  background(0,1000,0);

      strokeWeight(3);
      fill(148,86,38);
      ellipse(mouseX-80,mouseY,60,60);
      ellipse(mouseX,mouseY,60,60);
      fill(187,187,181);
      ellipse(mouseX-80,mouseY,40,40);
      ellipse(mouseX,mouseY,40,40);
     
      fill(148,86,38);
      ellipse(mouseX-40,mouseY+60,170,140);
  
      fill(187,187,181);
      ellipse(mouseX-40,mouseY+80,70,70);
  
      fill(0);
      ellipse(mouseX-40,mouseY+65,40,30);
  
      strokeWeight(5);
      line(mouseX-40,mouseY+80,mouseX-50,mouseY+90);
      line(mouseX-40,mouseY+80,mouseX-30,mouseY+90);
  
      strokeWeight(1);
      fill(148,86,38);
      ellipse(mouseX-70,mouseY+30,50,50);
      ellipse(mouseX-10,mouseY+30,50,50);
      line(mouseX-45,mouseY+30,mouseX-35,mouseY+40);
      line(mouseX-95,mouseY+30,mouseX-110,mouseY+20);
      line(mouseX+15,mouseY+30,mouseX+30,mouseY+20);
  
      strokeWeight(20);
      point(mouseX-70,mouseY+30);
      point(mouseX-10,mouseY+30);

    for (let i=0; i<30;i++){
      walker[i].cekUjung(); 
      walker[i].display(); 
      walker[i].update();    
  }
  
  
}
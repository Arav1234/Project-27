class Bob {
    constructor (x,y,radius){
      var optios = {
        isStatic : true,
      }
        
      this.body=Bodies.circle(x,y,radius,optios);
           this.radius = radius;
           World.add(world,this.body);   
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        strokeWeight(2);
      stroke("blue");
        fill("cyan");
        circle(pos.x,pos.y,this.radius);
    }
}
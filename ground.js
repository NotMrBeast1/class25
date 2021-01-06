class GROUND {
    constructor(){
        var op = {
            isStatic:true
        }
        this.ground= Bodies.rectangle(600,380,1200,40,op);
        World.add(myworld,this.ground);
        }

    display1(){
        var pos = this.ground.position;
        fill("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,1200,40);
        
    }

}
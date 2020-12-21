class Bob{
    constructor (x, y, diameter) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.2,
            //density:1.2
        }
        this.body = Bodies.circle(x, y, diameter, options);
        //this.diameter = 40;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill("red");
        stroke("white");
        ellipse(pos.x, pos.y, this.diameter);
    }

}
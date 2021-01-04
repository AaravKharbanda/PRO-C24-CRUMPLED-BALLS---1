class Paper
{
    constructor(x,y)
    {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,50,options);
        World.add(world, this.body);
    }

    display(){
       push()
       translate(this.body.position.x, this.body.position.y)
       rotate(this.body.angle)
       rectMode(CENTER)
       fill("lightblue")
       circle(0,0,50)
       
       pop() 
       
    }
}

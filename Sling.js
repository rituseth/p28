class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
       
        this.sling1 = Constraint.create(options);
        World.add(world, this.sling1);
    }
fly(){
    this.sling1.bodyA=null
}
    display(){
        if (this.sling1.bodyA){
         var bodyA=this.bodyA.position;
        var pointB = this.sling1.pointB;
        strokeWeight(4);
        line(pointB.x, pointB.y);
       
    }

}
}
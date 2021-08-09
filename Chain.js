class Chain {
    constructor(pointA, bodyB) {
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.01,
            length: 5
        }
        this.chain = Constraint.create(options);
        Composite.add(world, this.chain);
    }

    fly(){
        this.chain.bodyB = null;
    }

    display() {
        if(this.chain.bodyB){
            var pointA = this.chain.pointA;
            var pointB = this.chain.bodyB.position;
            strokeWeight(3);
            stroke("grey")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
}

const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var thor, hammer, chain;

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    
    thor = new Thor(200, 200, 100, 250);
    hammer = new Hammer(260, 180, 80, 80);
    chain = new Chain({x:200, y:200}, hammer.body);
}

function draw(){
    background(0);
    Engine.update(engine);

    thor.display();  
    hammer.display();
    chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hammer.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    chain.fly();
}
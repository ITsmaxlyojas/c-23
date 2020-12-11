const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var rc
var csk;
var mybox;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    mybox=new Box(100,200);

    var csk_options={
        restitution: 1.2
    }
    csk = Bodies.circle(200,200,25,csk_options);
    World.add(world,csk);

    var rc_options ={
    isStatic: true

}

    rc = Bodies.rectangle(200,200,50,50,rc_options);
World.add(world,rc);


    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    console.log(ground);
}

function draw(){
    background(0);
    mybox.display();
    Engine.update(engine);
    rectMode(CENTER);
    rect(rc.position.x,rc.position.y,50,50);

    circle(csk.position.x,csk.position.y,50);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
}
// javascript

// Oke ik begin dus. Het kan inderdaad met classes zoals die man van Udemy doet.
// Maar goed...
// Ik moet even organiseren...

// nog niet nodig schijnbaar, het volgende:
// var Example = Example || {};

// Oke dus het voorbeeld zet een heel groot deel in hetzelfde object.
// Vind ik een beetje onwennig. Maar het is de volgende stap.

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 850,
        height: 600,
        // wireframeBackground: '#FFF'
    }
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
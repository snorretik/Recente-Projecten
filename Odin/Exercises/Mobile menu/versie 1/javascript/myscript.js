// Opdracht is zogenaamde "scrollable navigatie", zelf uitgekozen.
// Info die ik daarvoor ga gebruiken:
// "Vloerkleden, banken, beddengoed, koken & tafelen, badtextiel, woonaccessoires, verlichting, kasten, gordijnen."

function initializeTheStuff() {
    let scrollableElement = document.querySelector('#bargonnascroll');
    // let body = document.body;

    let mouseDown = false;
    // let xpos = 0;

    scrollableElement.addEventListener('mousedown', function() { mouseDown = true });

    window.addEventListener('mouseup', function() { mouseDown = false });

    window.addEventListener('mousemove', function(e) {
        if (!mouseDown) {
            return;
            // xpos = 0;
        } 
        else if (mouseDown) {
            // console.log(`mouse position x: ${e.x} y:${e.y}`);
            // console.log(e);
            // console.log(e);

            // xpos += e.movementX;
            // console.log(`this is xpos ${xpos}`);

            window.scrollBy(-(e.movementX), 0);
            // console.log(`this is body.scrollLeft ${scrollableElement.scrollLeft}`);
        } 
        else {
            console.log("what the hell happened?")
        }
    });

    // ------------------------------------------------

    // window.addEventListener('mouseup', (e) => {
    //     window.removeEventListener('mousemove', theEventItsself(e));
    // });

    // scrollableElement.addEventListener('mousedown', (e) => {
    //     // let xAbsolutePos = []

        

    //     scrollableElement.addEventListener('mousemove', theEventItsself(e));
    // })

    // function theEventItsself(variable) {

    //     console.log(variable);
    //     // if (xAbsolutePos.length == 0) {
    //     //     xAbsolutePos.push();

    //     // }
    // }

    // ------------------------------------------------

}

initializeTheStuff();
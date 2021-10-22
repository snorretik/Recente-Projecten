// Opdracht is zogenaamde "scrollable navigatie", zelf uitgekozen.
// Info die ik daarvoor ga gebruiken:
// "Vloerkleden, banken, beddengoed, koken & tafelen, badtextiel, woonaccessoires, verlichting, kasten, gordijnen."

function initializeTheStuff() {
    let scrollableElement = document.querySelector('#bargonnascroll');
    
    let x = false;

    window.addEventListener('mouseup', (e) => {
        window.removeEventListener('mousemove', theEventItsself(e));
    });

    scrollableElement.addEventListener('mousedown', (e) => {
        // let xAbsolutePos = []

        

        scrollableElement.addEventListener('mousemove', theEventItsself(e));
    })

    function theEventItsself(variable) {

        console.log(variable);
        // if (xAbsolutePos.length == 0) {
        //     xAbsolutePos.push();

        // }
    }

}

initializeTheStuff();
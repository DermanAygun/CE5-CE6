let i = 0;
let afbeeldingen = ["dubai1.jpg", "dubai2.png", "dubai3.jpg", "dubai4.jpg"];
const slider = document.getElementById("slider");
let interval ;
let pausebtn = false;

// Automatic event
let slide = () => {
    slider.src = afbeeldingen[i++%afbeeldingen.length];
}
interval = setInterval( function(){ slide();}, 2000);

//Play Button
const play = () => {
    if ( pausebtn === true) {
        pausebtn = false;
        interval = setInterval( function(){ slide();}, 2000);
    }
}


//Pause Button
const pause = () => {
    if (pausebtn === false) {
        clearInterval(interval);
        pausebtn = true;
    }
}


// Volgende Button
const volgende = () => {
    i++;
    if(i >= afbeeldingen.length) {
        i = 0;
    }
    slider.src = afbeeldingen[i];
}


// Vorige Button
const vorige = () => {
    i--;
    if(i <= 0) {
        i = afbeeldingen.length - 1;
    }
    slider.src = afbeeldingen[i];
}


// key event(s)
document.addEventListener('keyup', event => {
    const key = event.key || event.keyCode;
    if (key === 'ArrowRight' || key === 39) {
        volgende();
    }
});


document.addEventListener('keyup', event => {
    const key = event.key || event.keyCode;
    if (key === 'ArrowLeft' || key === 37) {
        vorige();
    }
});


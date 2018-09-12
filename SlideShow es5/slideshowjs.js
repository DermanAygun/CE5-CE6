var i = 0;
var afbeeldingen = ["dubai1.jpg", "dubai2.png", "dubai3.jpg", "dubai4.jpg"];
var slider = document.getElementById("slider");
var interval ;
var pausebtn = false;

// Automatic event
function slide() {
    slider.src = afbeeldingen[i++%afbeeldingen.length];
}
interval = setInterval( function(){ slide();}, 2000);
//Play Button
function play(){
    if ( pausebtn === true) {
        pausebtn = false;
        interval = setInterval( function(){ slide();}, 2000);
    }
}
//Pause Button
function pause() {
    if (pausebtn === false) {
        clearInterval(interval);
        pausebtn = true;
    }
}
// Volgende Button
function volgende() {
    i++;
    if(i >= afbeeldingen.length) {
        i = 0;
    }
    slider.src = afbeeldingen[i];
}
// Vorige Button
function vorige() {
    i--;
    if(i <= 0) {
        i = afbeeldingen.length - 1;
    }
    slider.src = afbeeldingen[i];
}
// key event(s)
document.addEventListener('keyup', function (event) {
    var key = event.key || event.keyCode;

    if (key === 'ArrowRight' || key === 39) {
        volgende();
    }
});
document.addEventListener('keyup', function (event) {
    var key = event.key || event.keyCode;

    if (key === 'ArrowLeft' || key === 37) {
        vorige();
    }
});
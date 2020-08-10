function hexFromRGB(r, g, b) {
  var hex = [
    r.toString( 16 ),
    g.toString( 16 ),
    b.toString( 16 )
  ];
  $.each( hex, function( nr, val ) {
    if ( val.length === 1 ) {
      hex[ nr ] = "0" + val;
    }
  });
  return hex.join( "" ).toUpperCase();
}

function refreshSwatch() {
  var red1 = $( "#red1" ).slider( "value" ),
    green1 = $( "#green1" ).slider( "value" ),
    blue1 = $( "#blue1" ).slider( "value" ),
    red2 = $( "#red2" ).slider( "value" ),
    green2 = $( "#green2" ).slider( "value" ),
    blue2 = $( "#blue2" ).slider( "value" ),
    hex1 = hexFromRGB( red1, green1, blue1 );
    hex2 = hexFromRGB( red2, green2, blue2 );
  $( "#swatch" ).css( "background-color", "#" + hex1 );
  $( "#text" ).css( "color", "#" + hex2 );
}

$(function() {
  $( "#red1, #green1, #blue1, #red2, #green2, #blue2" ).slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $( "#red1" ).slider( "value", 70 );
  $( "#green1" ).slider( "value", 132 );
  $( "#blue1" ).slider( "value", 128 );
  $( "#red2" ).slider( "value", 214 );
  $( "#green2" ).slider( "value", 229 );
  $( "#blue2" ).slider( "value", 14 );
});

const backgroundColors = document.getElementById("background-color");
const textColors = document.getElementById("text-color");
textColors.setAttribute("style", "display: none");
const buttonBackground = document.querySelector(".change-background");
const buttonBText = document.querySelector(".change-text");

function hidetext() {
  textColors.setAttribute("style", "display: none");
  backgroundColors.removeAttribute("style", "display: none");
  buttonBackground.classList.add("active");
  buttonBText.classList.remove("active");
}

function hideBackground() {
  backgroundColors.setAttribute("style", "display: none");
  textColors.removeAttribute("style", "display: none");
  buttonBText.classList.add("active");
  buttonBackground.classList.remove("active");
}
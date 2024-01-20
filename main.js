var i = 0;
var txt = ""; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  
    let location_text_area = document.getElementById("location-text");

    // for(i=0; i<= txt.length;i++){

    while(txt.length>0){
    location_text_area.innerHTML += txt.charAt(i);
    i++;

    console.log(txt.charAt(i));
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("load",function(){

    let show_me_button = document.getElementById('show-me-button');

    show_me_button.addEventListener("click", typeWriter);
})
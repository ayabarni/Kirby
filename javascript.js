const pikachu_button = document.querySelector(".dress_up button:first-of-type");
const kirby_image = document.querySelector("div img");
const backgrond_image = document.querySelector("body >img");
const drinking_effect = document.getElementById("drinking_effect");
const wind_effect = document.getElementById("wind_effect");
const eating_effect = document.getElementById("eating_effect");
const hi_sound = document.getElementById("hi_sound");
const kirby_name = document.querySelector("body h1");
const input = document.getElementById("naming");
const naming_button = document.querySelector(".naming button");
const naming_continer = document.querySelector(".naming");
const kirby_button = document.querySelector(".dress_up button:last-of-type");
const pikatchu_image = document.querySelector("div img");
const choco = document.querySelector(".kirby_needs img:first-of-type");
const water = document.querySelector(".kirby_needs img:nth-of-type(2)");
const kirby_contanier = document.querySelector("body >div")
const vent_button = document.querySelector(".kirby_needs button");


let dragged_element = null;

let full_kirby = 0;

let kirby_is_pika = false;







// Adding Kirby's name with background audio
// bron:
// play a sound code: https://www.w3schools.com/jsref/met_audio_play.asp
// add a name code: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
// sound: https://www.youtube.com/watch?v=pNa06NUbqb4

function naming_kirby() {
    kirby_name.textContent = input.value;
    naming_continer.classList.add("hidding")
    if (input.value == "") {
        kirby_name.textContent = "Kirby";
    }
    hi_sound.play();
}
naming_button.addEventListener("click", naming_kirby)







// Kirby changes into pikachu 
// by eating and getting nervous.  
// with an suitable background
// bron:https://www.rawpixel.com/image/13612616/render-neon-lightning-icon-thunderstorm-symbol-yellow
function change_to_pikatchu() {
    backgrond_image.src = "./images/pica_bg2.jpg";
    backgrond_image.alt = "eleketrik backgrond";
    kirby_is_pika = true;

    if (full_kirby == 5) {
        kirby_image.src = "./images/pikachu-angry2.png";
        kirby_image.alt = "kirby pikatchu angry";
    } else if (full_kirby < 5 && full_kirby != 0) {
        kirby_image.src = "./images/Kirby_pica_eating.png";
        kirby_image.alt = "kirby pikatchu eating";
    } else {
        kirby_image.src = "./images/kirby_peca_defult.png";
        kirby_image.alt = "kirby pikatchu dress";
    }
}
pikachu_button.addEventListener("click", change_to_pikatchu);






// Kirby changed to happy Kirby in default and Pikachu
function change_to_happy() {
    if (kirby_is_pika == true && full_kirby < 5) {
        kirby_image.src = "./images/pikachu-lovely-eyes.png";
        kirby_image.alt = "kirby pikachu with lovely eyes";
    } else if (full_kirby < 5) {
        kirby_image.src = "./images/kirby_lovely_eayes.png";
        kirby_image.alt = "kirby with lovely eyes"
    }
    else if (full_kirby == 5 && kirby_is_pika == true) {
        kirby_image.src = "./images/pikachu-angry2_with_knife.png";
        kirby_image.alt = "kirby pikachu-angry_with_knife"
    }
    else if (full_kirby == 5) {
        kirby_image.src = "./images/kirby_defult_angry_knife.png";
        kirby_image.alt = "kirby angry_with_knife"
    }
}
kirby_image.addEventListener("click", change_to_happy);








// Kirby changes into defult 
// by eating and getting nervous.  
// with an suitable background
// bron bg:https://wall.alphacoders.com/big.php?i=1305893
function change_to_kirby_defult() {
    backgrond_image.src = "./images/kirby_bg.jpeg";
    backgrond_image.alt = "kirby_bg";
    kirby_is_pika = false;

    if (full_kirby == 5) {
        kirby_image.src = "./images/angry2.png";
        kirby_image.alt = "kirby angry";

    } else if (full_kirby < 5 && full_kirby != 0) {
        kirby_image.src = "./images/kirby-eat2.png";
        kirby_image.alt = "kirby eating";
    } else {
        kirby_image.src = "./images/kirby_defult.png";
        kirby_image.alt = "kirby defult";

    }
}
kirby_button.addEventListener("click", change_to_kirby_defult);






// Differentiate between water and chocolate
function feeding_kirby(event) {
    dragged_element = event.target.alt;
}

choco.addEventListener("dragstart", feeding_kirby);
water.addEventListener("dragstart", feeding_kirby);






// Dragging items
// bronnen:
// code: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event

function dragover_zone(event) {
    event.preventDefault();

    if (kirby_is_pika == true) {
        kirby_image.src = "./images/pikachu-eat.png";
        kirby_image.alt = "pikachu kirby mouth open";
    } else {

        kirby_image.src = "./images/kirby-eat.png";
        kirby_image.alt = "kirby mouth open";
    }
}

kirby_contanier.addEventListener("dragover", dragover_zone);


// Drop items
// bronnen:
// code drop event: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event
// sound eating: https://www.youtube.com/watch?v=IPhQz0MA0AI
// sound drinking: https://www.youtube.com/watch?v=UW7tFLAn4gI

function drop_zone(event) {
    event.preventDefault();

    full_kirby = full_kirby + 1;
    console.log("full_kirby=", full_kirby);

    if (full_kirby == 5 && kirby_is_pika == true) {
        kirby_image.src = "./images/pikachu-angry2.png";
        kirby_image.alt = "pikachu kirby angry";

        kirby_contanier.classList.add("Inflation")
        choco.classList.add("hidding");
        water.classList.add("hidding");
        vent_button.classList.remove("hidding");

    } else if (full_kirby == 5) {
        console.log("kirby is full");
        kirby_image.src = "./images/angry2.png";
        kirby_image.alt = "kirby angry";

        kirby_contanier.classList.add("Inflation")
        choco.classList.add("hidding");
        water.classList.add("hidding");
        vent_button.classList.remove("hidding");

    } else if (kirby_is_pika == true) {
        kirby_image.src = "./images/Kirby_pica_eating.png";
        kirby_image.alt = "pikachu kirby eating";
    } else {
        kirby_image.src = "./images/kirby-eat2.png";
        kirby_image.alt = "kirby-eating";
    }
    if (dragged_element == "water-glass") {
        drinking_effect.play();
    } else {
        eating_effect.play();
    }
}
kirby_contanier.addEventListener("drop", drop_zone);






// bronnen:
// code: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragleave_event
function dragleave_zone() {
    kirby_image.src = "./images/kirby_defult.png";
    kirby_image.alt = "kirby defult";
}
kirby_contanier.addEventListener("dragleave", dragleave_zone);





// Kirby ventd after full
// Bronnen:
// sound vent:https://www.youtube.com/watch?v=j5oXl4K0bDU
// add of remove class css in js: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList 

function venting_kirby() {
    if (full_kirby == 5 && kirby_is_pika == false) {
        kirby_image.src = "./images/kirby_defult.png";
        kirby_image.alt = "kirby defult";
        full_kirby = 0;
    } else if (full_kirby == 5 && kirby_is_pika == true) {
        kirby_image.src = "./images/kirby_peca_defult.png";
        kirby_image.alt = "kirby pikatchu dress";
        full_kirby = 0;
    }
    kirby_contanier.classList.remove("Inflation")
    choco.classList.remove("hidding");
    water.classList.remove("hidding");
    vent_button.classList.add("hidding");
    wind_effect.play();
}
vent_button.addEventListener("click", venting_kirby);
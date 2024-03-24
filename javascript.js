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
const naming_continer =document.querySelector(".naming");

function naming_kirby() {
    kirby_name.textContent = input.value;
    naming_continer.classList.add("hidding")
    if (input.value == "") {
        kirby_name.textContent = "Kirby";


    }
    hi_sound.play();

}
naming_button.addEventListener("click", naming_kirby)



function change_to_pikatchu() {


    backgrond_image.src = "./images/pica_bg2.jpg";
    backgrond_image.alt = "eleketrik backgrond";
    kirby_is_pika = true;

    if (full_kirby ==5) {
        kirby_image.src = "./images/pikachu-angry2.png";
        kirby_image.alt = "kirby pikatchu angry";
    } else if (full_kirby <5 && full_kirby != 0) {
        kirby_image.src = "./images/Kirby_pica_eating.png";
        kirby_image.alt = "kirby pikatchu eating";


    } else {
        kirby_image.src = "./images/kirby_peca_defult.png";
        kirby_image.alt = "kirby pikatchu dress";
    }
}
pikachu_button.addEventListener("click", change_to_pikatchu);

function change_to_happy() {
    

    if (kirby_is_pika == true && full_kirby < 5) {
        kirby_image.src = "./images/pikachu-lovely-eyes.png";
        kirby_image.alt = "kirby pikachu with lovely eyes";
    } else if (full_kirby < 5) {
        kirby_image.src = "./images/kirby_lovely_eayes.png";
        kirby_image.alt = "kirby with lovely eyes"
    }
    else if (full_kirby ==5 && kirby_is_pika == true) {
        kirby_image.src = "./images/pikachu-angry2_with_knife.png";
        kirby_image.alt = "kirby pikachu-angry_with_knife"
    }
    else if (full_kirby ==5) {
        kirby_image.src = "./images/kirby_defult_angry_knife.png";
        kirby_image.alt = "kirby angry_with_knife"
    }
    
}
kirby_image.addEventListener("click", change_to_happy);

const kirby_button = document.querySelector(".dress_up button:last-of-type");
const pikatchu_image = document.querySelector("div img");

function change_to_kirby_defult() {

    backgrond_image.src = "./images/kirby_bg.jpeg";
    backgrond_image.alt = "kirby_bg";
    kirby_is_pika = false;

    if (full_kirby ==5) {
        kirby_image.src = "./images/angry2.png";
        kirby_image.alt = "kirby angry";

    } else if (full_kirby <5 && full_kirby != 0) {
        kirby_image.src = "./images/kirby-eat2.png";
        kirby_image.alt = "kirby eating";
    } else {
        kirby_image.src = "./images/kirby_defult.png";
        kirby_image.alt = "kirby defult";

    }




}
kirby_button.addEventListener("click", change_to_kirby_defult);


let dragged_element = null;

let full_kirby = 0;

let kirby_is_pika = false;

const choco = document.querySelector(".kirby_needs img:first-of-type");
const water = document.querySelector(".kirby_needs img:nth-of-type(2)");

function feeding_kirby(event) {
    dragged_element = event.target.alt;
}

choco.addEventListener("dragstart", feeding_kirby);
water.addEventListener("dragstart", feeding_kirby);


const kirby_contanier = document.querySelector("body >div")

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

function drop_zone(event) {
    event.preventDefault();

    full_kirby = full_kirby + 1;
    console.log("full_kirby=", full_kirby);

    if (full_kirby ==5 && kirby_is_pika == true) {
        kirby_image.src = "./images/pikachu-angry2.png";
        kirby_image.alt = "pikachu kirby angry";
        
        kirby_contanier.classList.add("Inflation")
        choco.classList.add("hidding");
        water.classList.add("hidding");
        vent_button.classList.remove("hidding");


    } else if (full_kirby ==5) {
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
    }  else {
        eating_effect.play();
    }
    

}
kirby_contanier.addEventListener("drop", drop_zone);

function dragleave_zone() {
    kirby_image.src = "./images/kirby_defult.png";
    kirby_image.alt = "kirby defult";
}
kirby_contanier.addEventListener("dragleave", dragleave_zone);

const vent_button = document.querySelector(".kirby_needs button");
function venting_kirby() {
    if (full_kirby ==5 && kirby_is_pika == false) {
        kirby_image.src = "./images/kirby_defult.png";
        kirby_image.alt = "kirby defult";
        full_kirby = 0;
        
       

    } else if (full_kirby ==5 && kirby_is_pika == true) {
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


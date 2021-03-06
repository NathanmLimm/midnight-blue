
var chocolateRB = document.getElementById("chocolate");
var vanillaRB = document.getElementById("vanilla");
var strawberryRB = document.getElementById("strawberry");
var pistachioRB = document.getElementById("pistachio");
var image = document.getElementById("ice-cream-pic");
var MandMCheckbox = document.getElementById("m&m");
var sprinklesCheckbox = document.getElementById("sprinkles");
var chocSprinklesCheckbox = document.getElementById("chocsprinkles");
var countToppings = 0;
var flavor;
var price;
var tempPrice;
document.getElementById("show-me").addEventListener("click", showPicture, false);
function showPicture () {
    if (chocolateRB.checked) {
        image.setAttribute("src", chocolateRB.value);
        countToppings = 0;
        flavor = "Chocolate";
        if (MandMCheckbox.checked && sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //all toppings
            image.setAttribute("src", "icecreamvariations-chocolate/chocolate_icecream--alltoppings.png");
            countToppings = 3;
        } else if (MandMCheckbox.checked && sprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "icecreamvariations-chocolate/chocolate_icecream--m&m+sprinkles.png");
            countToppings = 2;
        } else if (MandMCheckbox.checked && chocSprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "icecreamvariations-chocolate/chocolate_icecream--m&m+chocsprinkles.png");
            countToppings = 2;
        } else if (sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //sprinkles and chocolate sprinkles
            image.setAttribute("src", "icecreamvariations-chocolate/chocolate_icecream--sprinkles+chocsprinkles.png");
            countToppings = 2;
        } else if (MandMCheckbox.checked) {
            //m&ms
            image.setAttribute("src", "icecreamvariations-chocolate/chocolate_icecream--m&m.png");
            countToppings = 1;
        } else if (sprinklesCheckbox.checked) {
            //sprinkles
            image.setAttribute("src", "icecreamvariations-chocolate/chocolate_icecream--sprinkles.png");
            countToppings = 1;
        } else if (chocSprinklesCheckbox.checked) {
            //chocolate sprinkles
            image.setAttribute("src", "icecreamvariations-chocolate/chocolate_icecream--chocsprinkles.png");
            countToppings = 1;
        }
    } else if (vanillaRB.checked) {
        image.setAttribute("src", vanillaRB.value);
        countToppings = 0;
        flavor = "Vanilla";
        if (MandMCheckbox.checked && sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //all toppings
            image.setAttribute("src", "icecreamvariations-vanilla/vanilla_icecream--alltoppings.png");
            countToppings = 3;
        } else if (MandMCheckbox.checked && sprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "icecreamvariations-vanilla/vanilla_icecream--m&m+sprinkles.png");
            countToppings = 2;
        } else if (MandMCheckbox.checked && chocSprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "icecreamvariations-vanilla/vanilla_icecream--m&m+chocsprinkles.png");
            countToppings = 2;
        } else if (sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //sprinkles and chocolate sprinkles
            image.setAttribute("src", "icecreamvariations-vanilla/vanilla_icecream--sprinkles+chocsprinkles.png");
            countToppings = 2;
        } else if (MandMCheckbox.checked) {
            //m&ms
            image.setAttribute("src", "icecreamvariations-vanilla/vanilla_icecream--m&m.png");
            countToppings = 1;
        } else if (sprinklesCheckbox.checked) {
            //sprinkles
            image.setAttribute("src", "icecreamvariations-vanilla/vanilla_icecream--sprinkles.png");
            countToppings = 1;
        } else if (chocSprinklesCheckbox.checked) {
            //chocolate sprinkles
            image.setAttribute("src", "icecreamvariations-vanilla/vanilla_icecream--chocsprinkles.png");
            countToppings = 1;
        }
    } else if (strawberryRB.checked) {
        image.setAttribute("src", strawberryRB.value);
        countToppings = 0;
        flavor = "Strawberry";
        if (MandMCheckbox.checked && sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //all toppings
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--alltoppings.png");
            countToppings = 3;
        } else if (MandMCheckbox.checked && sprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--m&m+sprinkles.png");
            countToppings = 2;
        } else if (MandMCheckbox.checked && chocSprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--m&m+chocsprinkles.png");
            countToppings = 2;
        } else if (sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //sprinkles and chocolate sprinkles
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--sprinkles+chocolatesprinkles.png");
            countToppings = 2;
        } else if (MandMCheckbox.checked) {
            //m&ms
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--m&m.png");
            countToppings = 1;
        } else if (sprinklesCheckbox.checked) {
            //sprinkles
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--sprinkles.png");
            countToppings = 1;
        } else if (chocSprinklesCheckbox.checked) {
            //chocolate sprinkles
            image.setAttribute("src", "icecreamvariations-strawberry/strawberry_icecream--chocsprinkles.png");
            countToppings = 1;
        }
    } else if (pistachioRB.checked) {
        image.setAttribute("src", pistachioRB.value);
        countToppings = 0;
        flavor = "Pistachio";
        if (MandMCheckbox.checked && sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //all toppings
            image.setAttribute("src", "icecreamvariations-pistachio/pistachio_icecream--alltoppings.png");
            countToppings = 3;
        } else if (MandMCheckbox.checked && sprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "icecreamvariations-pistachio/pistachio_icecream--m&m+sprinkles.png");
            countToppings = 2;
        } else if (MandMCheckbox.checked && chocSprinklesCheckbox.checked) {
            //m&ms and sprinkles
            image.setAttribute("src", "icecreamvariations-pistachio/pistachio_icecream--m&m+chocsprinkles.png");
            countToppings = 2;
        } else if (sprinklesCheckbox.checked && chocSprinklesCheckbox.checked) {
            //sprinkles and chocolate sprinkles
            image.setAttribute("src", "icecreamvariations-pistachio/pistachio_icecream--sprinkles+chocsprinkles.png");
            countToppings = 2;
        } else if (MandMCheckbox.checked) {
            //m&ms
            image.setAttribute("src", "icecreamvariations-pistachio/pistachio_icecream--m&m.png");
            countToppings = 1;
        } else if (sprinklesCheckbox.checked) {
            //sprinkles
            image.setAttribute("src", "icecreamvariations-pistachio/pistachio_icecream--sprinkles.png");
            countToppings = 1;
        } else if (chocSprinklesCheckbox.checked) {
            //chocolate sprinkles
            image.setAttribute("src", "icecreamvariations-pistachio/pistachio_icecream--chocsprinkles.png");
            countToppings = 1;
        }
    }
}


//review ur order page
document.getElementById("review-order").addEventListener("click",function () {
    document.getElementById("Flavor").innerHTML = flavor;
    document.getElementById("Toppings").innerHTML = countToppings;
    tempPrice = (3 + (countToppings * 1.5));
    if (tempPrice - 3 == 1.5 || tempPrice - 3 == 4.5) {
        document.getElementById("price").innerHTML = "$" + tempPrice + "0";
    } else if (tempPrice - 3 == 0 || tempPrice -3 == 3) {
        document.getElementById("price").innerHTML = "$" + tempPrice + ".00";
    }
})


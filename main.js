// dark brigh mode
const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", modeSwitch);

let isLight = true;

function modeSwitch() {
    isLight = !isLight;
    isLight ? toggle.innerHTML = '<img src="./images/bright-cat.png" alt="Bright Mode" style="width:35px;height: 35px;"/>' : toggle.innerHTML = '<img src="./images/black-cat.png" alt="Dark Mode" style="width:35px;height: 35px;"/>';
    var rootElement = document.body;
    rootElement.classList.toggle("darkMode");
}

const submitpress = document.getElementById("submitbutton");

//submit button functionality
let haspressed = false;

function submitClick() {
    if (haspressed == false) {
        haspressed = !haspressed;
        var newElement = document.createElement("p");
        newElement.innerHTML = "Thank you for subscribing!";
        document.getElementById("submitbutton").appendChild(newElement);
        console.log("test");
    }
}

submitpress.addEventListener("click", submitClick)
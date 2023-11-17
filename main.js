document.getElementById('myHeading').innerHTML = "Mateusz is cool";
document.querySelector('nav ul li').setAttribute('class', 'currentPage');
let ColourButtons = document.querySelectorAll(".colPicker");
for (let i = 0; i< ColourButtons.length; i++){
    ColourButtons[i].addEventListener("click", chgColour)
}

const bodyElement = document.querySelector("body")
function chgColour(ev){
    console.dir(ev.target.classList);
    let colourPicked = ev.target.classList[0] + "Back";
    bodyElement.setAttribute("class", colourPicked)
}
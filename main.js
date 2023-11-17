document.getElementById('myHeading').innerHTML = "Mateusz is cool";
document.querySelector('nav ul li').setAttribute('class', 'currentPage');

//colour changer
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

//image rotator
let imageAr = [
    'images/view1.jpg', 
    'images/view2.jpg', 
    'images/view3.jpg', 
    'images/view4.jpg', 
    'images/view5.jpg', 
    'images/view6.jpg'
]; 

let imageCount = 0;
setInterval(function(){
    document.getElementById("myImages")
    .setAttribute("src", imageAr[imageCount]);
    imageCount++;
}, 1000)
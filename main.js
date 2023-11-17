document.getElementById('myHeading').innerHTML = "Mateusz is cool";
document.querySelector('nav ul li').setAttribute('class', 'currentPage');

document.querySelector(".red").addEventListener('click', function(ev){ 
    document.querySelector('body').setAttribute('class', "redBack"); 
})
document.querySelector(".green").addEventListener('click', function(ev){ 
    document.querySelector('body').setAttribute('class', "greenBack"); 
})
document.querySelector(".blue").addEventListener('click', function(ev){ 
    document.querySelector('body').setAttribute('class', "blueBack"); 
})
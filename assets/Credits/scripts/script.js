let bg = document.querySelector('#bg');
let img = document.querySelector('#img');
let svg = document.querySelector('#svg')
let svg2 = document.querySelector('#svg2')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    bg.style.backgroundSize = 100 + value*10 + "px";
    if(value >= 50){
        svg.style.opacity= '0%';
        svg2.style.opacity= '0%';
    }
    else{
        svg.style.opacity= '100%';
        svg2.style.opacity= '100%';
    }
})

img.addEventListener('mouseenter', function(){
    img.style.backgroundImage= "url('assets/Credits/images/tmbYo.jpg')";
})

img.addEventListener('mouseleave', function(){
    img.style.backgroundImage= "url('assets/Credits/images/yo.jpg')";
})
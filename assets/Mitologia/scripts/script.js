let images = document.querySelectorAll('.banner');
let slider = document.querySelector('.item');
let links = document.getElementById('bannerLinks');
let banners = document.getElementById('banner');
let sliderHeight;
let imageWidth;
let current = 0;
let target = 0;
let ease = .05;

images.forEach((img, idx) =>{
    img.style.backgroundImage = `url(assets/Mitologia/images/images/${idx+1}.jpg)`;
})

function setTransform(el, transform){
    el.style.transform = transform;
}

function lerp(start, end, t){
    return start * (1-t) + end * t;
}

function init(){
    sliderHeight = slider.getBoundingClientRect().width;
    imageWidth = sliderHeight / images.length;
}

function animate(){
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    target = window.scrollY;
    setTransform(slider, `TransalateY(-${current}px)`);
    animateImages();
    requestAnimationFrame(animate);
}

function animateImages(){
    let ratio = current/imageWidth;
    let intersectionRatioValue;
    let windowWith = window.innerWidth;

    if(windowWith >= 650 ){
        images.forEach((image, idx) =>{
            intersectionRatioValue = ratio - (idx * 0.7);
            setTransform(image, `translateY(${intersectionRatioValue * 70}px)`);
        })
    }
    if(windowWith < 650){
        images.forEach((image, idx) =>{
            intersectionRatioValue = ratio - (idx * 0.7);
            setTransform(image, `translateY(${intersectionRatioValue * 30}px)`);
        })
    }
}

images.forEach((a, idx) =>{
    a.addEventListener('mouseenter', () =>{
        document.getElementById(`banner${idx+1}`).style.animation = "bannerHover 0.5s linear 0s";
        document.getElementById(`banner${idx+1}`).style.filter = "grayscale(0%)";
    })

    a.addEventListener('mouseleave', () =>{
        document.getElementById(`banner${idx+1}`).style.animation = "bannerHoverOut 0.5s linear 0s";
        document.getElementById(`banner${idx+1}`).style.filter = "grayscale(100%)";
    })
})

init();
animate();
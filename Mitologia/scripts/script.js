let images = document.querySelectorAll('.banner');
let titansImages = document.querySelectorAll('.horizontalImg')
let slider = document.querySelector('.item');
let titansSlider = document.querySelector('.titansSlider')
let links = document.getElementById('bannerLinks');
let titansLinks = document.getElementById('titansLinks');
let banners = document.getElementById('banner');
let titansSection = document.getElementById('titansSection');
let sliderHeight;
let titansSliderWidth;
let imageWidth;
let titansImageWidth;
let current = 0;
let target = 0;
let ease = .05;

images.forEach((img, idx) =>{
    img.style.backgroundImage = `url(assets/Mitologia/images/images/${idx+1}.jpg)`;
})

titansImages.forEach((img, idx) =>{
    img.style.backgroundImage = `url(assets/Mitologia/images/Titanes/${idx+1}.jpg)`;
})

function setTransform(el, xTransform){
    el.style.transform = xTransform;
}

function lerp(start, end, t){
    return start * (1-t) + end * t;
}

function initX(xSliderWidth, xSlider, xImgeWidth, xImages, xSection){
    xSliderWidth = xSlider.getBoundingClientRect().width;
    xImgeWidth = xSliderWidth / xImages.length;
    document.body.style.height = `${xSliderWidth - (window.innerWidth - window.innerHeight)}px`;
}

function init(){
    sliderHeight = slider.getBoundingClientRect().width;
    imageWidth = sliderHeight / images.length;
}

function animate(){
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    target = window.scrollY;
    setTransform(titansSlider, `translateX(-${current}px)`);
    requestAnimationFrame(animate);
    animateImages();
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
    
function grayHover(place, tag){
    place.forEach((a, idx) =>{
        a.addEventListener('mouseenter', () =>{
            document.getElementById(tag+(idx+1)).style.animation = "bannerHover 0.5s linear 0s";
            document.getElementById(tag+(idx+1)).style.filter = "grayscale(0%)";
        })

        a.addEventListener('mouseleave', () =>{
            document.getElementById(tag+(idx+1)).style.animation = "bannerHoverOut 0.5s linear 0s";
            document.getElementById(tag+(idx+1)).style.filter = "grayscale(100%)";
        })
    })
}

function xClick (id, xSliderWidth, xSlider, xImgeWidth, xImages, xSection){
    id.addEventListener('click', () =>{
        initX(xSliderWidth, xSlider, xImgeWidth, xImages, xSection);
        xSection.style.visibility = 'visible';
    })
}

init();
animate();
xClick(document.getElementById("banner1"), titansSliderWidth, titansSlider, titansImageWidth, titansImages, titansSection);
grayHover(images, "banner");
grayHover(titansImages, "horizontalImg");
xAnimate(titansSlider);
console.log(titansImageWidth);
let images = document.querySelectorAll(".banner");
let sliderHeight;
let imageWidth;

let titansImages = document.querySelectorAll(".horizontalImg");
let slider = document.querySelector(".item");
let titansSlider = document.querySelector(".titansSlider");
let titansSliderSecttion = document.getElementById("titansSliderSecttion");
let atlasBg = document.querySelectorAll(".titansImageOnSection");
let titansIcons = document.querySelectorAll(".titansIcons");
let titansImageWidth;
let titansSliderWidth;

let olimpicsBanners = document.querySelectorAll(".banner");
let olimpicsImages = document.querySelectorAll(".olimpicsHorizontalImg");
let olimpicsSliderItem = document.querySelector(".item");
let olimpicsSlider = document.querySelector(".olimpicsSlider");
let olimpicsSliderSecttion = document.getElementById("olimpicsSliderSection");
let olimpicsBg = document.querySelectorAll(".olimpicsImageOnSection");
let olimpicsIcons = document.querySelectorAll(".olimpicIcons");
let olimpicsImageWidth;
let olimpicsSliderWith;

let variablesBanners = document.querySelectorAll(".banner");
let variablesImages = document.querySelectorAll(".variablesHorizontalImg");
let variablesSliderItem = document.querySelector(".item");
let variablesSlider = document.querySelector(".variablesSlider");
let variablesSliderSecttion = document.getElementById("variablesSection");
let variablesBg = document.querySelectorAll(".variablesImageOnSection");
let variablesIcons = document.querySelectorAll(".variablesIcons");
let variablesImageWidth;
let variablesSliderWith;


let current = 0;
let target = 0;
let ease = 0.05;

let displatTitanCard = 'horizontalImg';
let displatTitanCardX = ['horizontalImg1'];
let titanCard = '.titanCard'
let xTitanCard = ['.titanCard1']
let titansBackBtn = 'titansBackBtn'
let xTitanBackBtn = ['titansBackBtn1']

let displayOlimpicsCard = 'olimpicsHorizontalImg';
let xDisplayOlimpicsCard = ['olimpicsHorizontalImg1']
let olimpicsCard = '.olimpicCard'
let xOlimpicsCard = ['.olimpicCard1']
let olimpicsBackBtn = 'olimpicsBackBtn'
let xOlimpicsBackBtn = ['olimpicsBackBtn1']

let displayVariablesCard = 'variablesHorizontalImg'
let xDisplayVariablesCard = ['variablesHorizontalImg1']
let variablesCard = '.variablesCard'
let xVariablesCard = ['.variablesCard1']
let variablesBackBtn = 'variablesBackBtn'
let xVariablesBackBtn = ['variablesBackBtn1']

function createArrayss(xArray, source, type){
  for(let i = 1; i <16; i++ ){
    xArray[i] = source + String(i);
  }
  if (type == 'id'){
    for(let i = 0; i < xArray.length; i++ ){
      xArray[i] = document.getElementById(xArray[i])
    }
  }
  if (type == 'class'){
    for(let i = 0; i < xArray.length; i++ ){
      xArray[i] = document.querySelector(xArray[i])
    }
  }
}

function setImages(img, source){
  img.forEach((x, idx) => {
    x.style.backgroundImage = `url(assets/Mitologia/images/${source}/${
      idx + 1
    }.jpg)`;
  });
}

function setTransform(el, xTransform) {
  el.style.transform = xTransform;
}

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function initX(xSliderWidth, xSlider, xImgeWidth, xImages) {
  xSliderWidth = xSlider.getBoundingClientRect().width;
  xImgeWidth = xSliderWidth / xImages.length;

  let sectionHeight = xSliderWidth - (window.innerWidth - window.innerHeight);
  document.body.style.height = `${sectionHeight}px`;
}

function init() {
  sliderHeight = slider.getBoundingClientRect().width;
  imageWidth = sliderHeight / images.length;
}

function animateImages() {
  let ratio = current / imageWidth;
  let intersectionRatioValue;
  let windowWith = window.innerWidth;

  if (windowWith >= 650) {
    images.forEach((image, idx) => {
      intersectionRatioValue = ratio - idx * 0.7;
      setTransform(image, `translateY(${intersectionRatioValue * 70}px)`);
    });
  }
  if (windowWith < 650) {
    images.forEach((image, idx) => {
      intersectionRatioValue = ratio - idx * 0.7;
      setTransform(image, `translateY(${intersectionRatioValue * 30}px)`);
    });
  }
}

function grayHover(place, tag) {
  place.forEach((a, idx) => {
    a.addEventListener("mouseenter", () => {
      document.getElementById(tag + (idx + 1)).style.animation =
        "bannerHover 0.5s linear 0s";
      document.getElementById(tag + (idx + 1)).style.filter = "grayscale(0%)";
    });

    a.addEventListener("mouseleave", () => {
      document.getElementById(tag + (idx + 1)).style.animation =
        "bannerHoverOut 0.5s linear 0s";
      document.getElementById(tag + (idx + 1)).style.filter = "grayscale(100%)";
    });
  });
}

function xClickBanner(
  id,
  xSliderWidth,
  xSlider,
  xImgeWidth,
  xImages,
  xSection,
  type,
  i
) {
  if(type == 'array'){
    id[i].addEventListener("click", () => {
      initX(xSliderWidth, xSlider, xImgeWidth, xImages, xSection);
      xSection.style.visibility = "visible";
      xSection.style.height = "100%";
    });
  }
  if(type == 'none'){
    id.addEventListener("click", () => {
      initX(xSliderWidth, xSlider, xImgeWidth, xImages, xSection);
      xSection.style.visibility = "visible";
      xSection.style.height = "100%";
    });
  }
}

function xClickBannerOut(id, xSection, type, i) {
  if (type == 'array'){
    id[i].addEventListener("click", () => {
      init();
      xSection[i].style.visibility = "hidden";
      document.body.style.height = `${
        document.querySelector(".header").clientHeight +
        document.querySelector(".enlacesContainer").clientHeight
      }px`;
    });
  }
  if (type == 'none'){
    id.addEventListener("click", () => {
      init();
      xSection.style.visibility = "hidden";
      document.body.style.height = `${
        document.querySelector(".header").clientHeight +
        document.querySelector(".enlacesContainer").clientHeight
      }px`;
    });
  }
}

function xClickCard(cardClass, bannerId, i, xSliderSection){
    bannerId[i].addEventListener("click", () => {

      document.querySelector('.header').style.visibility = "hidden";
      document.querySelector('.header').style.position = "fixed";

      document.querySelector('.enlacesContainer').style.visibility = "hidden";
      document.querySelector('.enlacesContainer').style.position = "fixed";

      xSliderSection.style.visibility = "hidden";
      xSliderSection.style.position = "fixed";
      xSliderSection.style.height = "0%";

      cardClass[i].style.visibility = "visible";
      cardClass[i].style.position = "absolute";

      document.body.style.height = `${
          cardClass[i].clientHeight
        }px`;
    }
  )
}

function xClickCardOut(buttonId, cardClass, i, xSliderWidth, xSlider, xImageWidth, xImages, xSliderSection, type){
    xClickBannerOut(buttonId, cardClass, type, i);
    xClickBanner(
      buttonId,
      xSliderWidth,
      xSlider,
      xImageWidth,
      xImages,
      xSliderSection,
      type,
      i
        );
    buttonId[i].addEventListener('click', () => {
        document.querySelector('.header').style.visibility = "visible";
        document.querySelector('.header').style.position = "inherit";

        document.querySelector('.enlacesContainer').style.visibility = "visible";
        document.querySelector('.enlacesContainer').style.position = "inherit";
    })
}

function xAnimateImages(xImageWidth, xImages, xSliderWidth, xSlider) {
  xSliderWidth = xSlider.getBoundingClientRect().width;
  xImageWidth = xSliderWidth / xImages.length;

  let ratio = current / xImageWidth;
  let intersectionRatioValue;
  let windowWith = window.innerWidth;

  if (windowWith >= 550) {
    xImages.forEach((img, idx) => {
      intersectionRatioValue = ratio - idx * 0.7;
      setTransform(img, `translateX(${intersectionRatioValue * 70}px)`);
    });
  }
  if (windowWith < 550) {
    xImages.forEach((img, idx) => {
      intersectionRatioValue = ratio - idx * 0.7;
      setTransform(img, `translateX(${intersectionRatioValue * 50}px)`);
    });
  }
}

function animate() {
  current = parseFloat(lerp(current, target, ease)).toFixed(2);
  target = window.scrollY;
  setTransform(titansSlider, `translateX(-${current}px)`);
  setTransform(olimpicsSlider, `translateX(-${current}px)`);
  setTransform(variablesSlider, `translateX(-${current}px)`);
  requestAnimationFrame(animate);
  animateImages();
  xAnimateImages(
    titansImageWidth,
    titansImages,
    titansSliderWidth,
    titansSlider
  );
  xAnimateImages(
    olimpicsImageWidth,
    olimpicsImages,
    olimpicsSliderWith,
    olimpicsSlider
  );
  xAnimateImages(
    variablesImageWidth,
    variablesImages,
    variablesSliderWith,
    variablesSlider
  );
}

function setBackground(id, fatherFolder, folder, format) {
  id.forEach((img, idx) => {
    img.style.backgroundImage = `url(assets/Mitologia/images/${fatherFolder}/${folder}/${idx + 1}.${format})`;
  });
}


// ==============================================FUNCTION CALLS===========================================

setImages(images, 'images');
setImages(titansImages, 'Titanes');
setImages(olimpicsImages, 'Olimpics')
setImages(variablesImages, 'Variables')

init();
animate();

xClickBanner(
  document.getElementById("banner1"),
  titansSliderWidth,
  titansSlider,
  titansImageWidth,
  titansImages,
  titansSliderSecttion,
  'none'
);
xClickBannerOut(document.getElementById("titansLinks16"), titansSliderSecttion, 'none');
xClickBanner(
  document.getElementById("banner2"),
  olimpicsSliderWith,
  olimpicsSlider,
  olimpicsImageWidth,
  olimpicsImages,
  olimpicsSliderSecttion,
  'none'
)
xClickBannerOut(document.getElementById("olimpicsLinks13"), olimpicsSliderSecttion, 'none');
xClickBanner(
  document.getElementById("banner3"),
  variablesSliderWith,
  variablesSlider,
  variablesImageWidth,
  variablesImages,
  variablesSliderSecttion,
  'none'
)
xClickBannerOut(document.getElementById("variablesLinks8"), variablesSliderSecttion, 'none');

grayHover(images, "banner");
grayHover(titansImages, "horizontalImg");
grayHover(olimpicsImages, "olimpicsHorizontalImg")
grayHover(variablesImages, "variablesHorizontalImg")

setBackground(atlasBg, "Titanes", "prueba", "jpg");
setBackground(titansIcons, "Titanes", "iconos", "png");
setBackground(olimpicsBg, 'Olimpics', "OnImages", "jpg");
setBackground(olimpicsIcons, 'Olimpics', "Icons", "png");
setBackground(variablesBg, "Variables", 'OnImage', "jpg")
setBackground(variablesIcons, "Variables", 'Icons', "png")

createArrayss(displatTitanCardX, displatTitanCard, 'id');
createArrayss(xDisplayOlimpicsCard, displayOlimpicsCard, 'id')
createArrayss(xDisplayVariablesCard, displayVariablesCard, 'id')

createArrayss(xTitanCard, titanCard, 'class');
for(x = 1; x < 16; x++){
  xClickCard(xTitanCard ,displatTitanCardX, x, titansSliderSecttion);
}

createArrayss(xTitanBackBtn, titansBackBtn, 'id');
for(x = 1; x < 16; x++){
  xClickCardOut(xTitanBackBtn, xTitanCard, x, titansSliderWidth, titansSlider, titansImageWidth, titansImages, titansSliderSecttion, 'array')
}

createArrayss(xOlimpicsCard, olimpicsCard, 'class');
for(x = 1; x < 13; x++){
  xClickCard(xOlimpicsCard, xDisplayOlimpicsCard, x, olimpicsSliderSecttion)
}

createArrayss(xOlimpicsBackBtn, olimpicsBackBtn, 'id')
for(x = 1; x < 13; x++){
  xClickCardOut(xOlimpicsBackBtn, xOlimpicsCard, x, olimpicsSliderWith, olimpicsSlider, olimpicsImageWidth, olimpicsImages, olimpicsSliderSecttion, 'array')
}

createArrayss(xVariablesCard, variablesCard, 'class');
for(x = 1; x < 7; x++){
  xClickCard(xVariablesCard, xDisplayVariablesCard, x, variablesSliderSecttion)
}

createArrayss(xVariablesBackBtn, variablesBackBtn, 'id')
for(x = 1; x < 7; x++){
  xClickCardOut(xVariablesBackBtn, xVariablesCard, x, variablesSliderWith, variablesSlider, variablesImageWidth, variablesImages, variablesSliderSecttion, 'array')
}

// (^._.^)ﾉ
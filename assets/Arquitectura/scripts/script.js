let buildingsImages = document.querySelectorAll(".buildingsContainerImageBanner");
let typesOfGreeksBuildings = document.querySelectorAll(".typesOfBuildingsOnImage");
let buildingsHeaderImages = document.querySelectorAll(".buildingHeaderImage");
let partenonImages = document.querySelectorAll(".partenonImages");
let acropolisImages = document.querySelectorAll(".acropolisImages");
let displayTextImages = document.querySelectorAll(".displayTextImage");
let erecteionImages = document.querySelectorAll('.erecteionImages');
let teatroImages = document.querySelectorAll('.teatroDeDionisioImages');
let segestaImages = document.querySelectorAll('.temploDeSegestaImages');
let animatedTextIds = ['animatedText1'];
let famousBuildingsBtn = ['famousBuildings1'];
let famousBuildingsId = ['famousBuildingsOnPage1'];
let slideImagesArray = ['typesOfBuildingsOnPage'];
let backBtnArray = []

const slidePath = {
  curviness: 0,
  autoRotate: false,
  values: [
    {x: -window.innerWidth, y: 0}
  ]
}

const slidePath2 = {
  curviness: 0,
  autoRotate: false,
  values: [
    {x: -window.innerWidth, y: 0}
  ]
}

const slidePath3 = {
  curviness: 0,
  autoRotate: false,
  values: [
    {x: window.innerWidth, y: 0}
  ]
}

let controller = new ScrollMagic.Controller();

function slideOnScroll (sceneId, i){
    let timeline = new TimelineMax();
  
    timeline.to('.headerTitleContainer', 1, {
      x: +0,
      ease: Power1.easeInOut
    })

    timeline.to('.buildingHeaderImage1', 1, {
      bezier: slidePath,
      ease: Power1.easeInOut
    })
    timeline.to('.buildingHeaderImage2', 1, {
      bezier: slidePath2,
      ease: Power1.easeInOut
    })
    timeline.to(".buildingHeaderImage3", 1, {
      bezier: slidePath3,
      ease: Power1.easeInOut
    })
  
    let scene = new ScrollMagic.Scene({
      triggerElement: sceneId[i],
      duration: 400,
      triggerHook: 0
    })
  
    .setTween(timeline)
    .addTo(controller)
    // .addIndicators();
  }

function createArrayss(xArray, source, type, max){
    for(let i = 1; i <= max; i++ ){
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

function animatedTextIn(textId, i){
    textId[i].style.animation =
    "textIn1 1s 0s ease forwards";
    textId[i+1].style.animation =
    "textIn2 1s 0s ease forwards";
    textId[i+2].style.animation =
    "textIn3 1s 0s ease forwards";
}

function animatedTextOut(textId, i){
    textId[i].style.animation =
    "textOut1 1s 0s ease forwards";
    textId[i+1].style.animation =
    "textOut2 1s 0s ease forwards";
    textId[i+2].style.animation =
    "textOut3 1s 0s ease forwards";
}

function textOnImage(place, tag, animationIn, animationOut){
  place.forEach((a, idx) => {
    a.addEventListener("mouseenter", () => {
      document.getElementById(tag + (idx + 1)).style.animation =
        animationIn;
    })
    
    a.addEventListener("mouseleave", () => {
      document.getElementById(tag + (idx + 1)).style.animation =
      animationOut;
    })
  });
}

function grayHover(place, tag, caso) {
  if(caso == '1'){
    place.forEach((a, idx) => {
      a.addEventListener("mouseenter", () => {
        document.getElementById(tag + (idx + 1)).style.animation =
          "grayscaleDisapear 1s 0s ease forwards";
      })
      
      a.addEventListener("mouseleave", () => {
        document.getElementById(tag + (idx + 1)).style.animation =
        "grayscaleApear 1s 0s ease forwards";
      })
    });
  }

  if(caso == '2'){
    place.forEach((a, idx) => {
      a.addEventListener("mouseenter", () => {
        document.getElementById(tag + (idx + 1)).style.animation =
          "grayscaleDisapear 1s 0s ease forwards";
        for(i = 1; i <= 18; i){
            animatedTextIn(animatedTextIds, i)
            i = i+3
        }
      });
  
      a.addEventListener("mouseleave", () => {
        document.getElementById(tag + (idx + 1)).style.animation =
        "grayscaleApear 1s 0s ease forwards";
        for(i = 1; i <= 18; i){
            animatedTextOut(animatedTextIds, i)
            i = i+3
        }
      });
    });
  }
}

function setImages(img, source){
    img.forEach((x, idx) => {
      x.style.backgroundImage = `url(assets/Arquitectura/images/${source}/${
        idx + 1
      }.jpg)`;
    });
}

function xClickLink(sectionClass, linkId, backBtnLinkId,  type, i){
    
        if(type == '1'){
          linkId.addEventListener("click", () => {
            document.querySelector('.headerImagesContainer').style.display = "none";
            document.querySelector('.header').style.display = "none";
            document.querySelector('.intro').style.display = "none";
            document.querySelector('.famousBuildingsSection').style.display = "none";
            document.querySelector('.typesOfBuildingsContainer').style.display = "none";
            document.querySelector('.footer').style.display = "none";
            
            sectionClass.style.display = "flex";
            let a = setTimeout(slideOnScroll(slideImagesArray, i), 1500);

            backBtnLinkId[1].addEventListener("click", () => {
              document.querySelector('.headerImagesContainer').style.display = "inherit";
              document.querySelector('.header').style.display = "inherit";
              document.querySelector('.intro').style.display = "inherit";
              document.querySelector('.famousBuildingsSection').style.display = "inherit";
              document.querySelector('.typesOfBuildingsContainer').style.display = "flex";
              document.querySelector('.footer').style.display = "flex";
              
              sectionClass.style.display = "none";
              let a = 'soy una rompefunciones :)';
         })
        })
      }
      if(type == '2'){
        linkId[i].addEventListener("click", () => {
          document.querySelector('.headerImagesContainer').style.display = "none";
          document.querySelector('.header').style.display = "none";
          document.querySelector('.intro').style.display = "none";
          document.querySelector('.typesOfBuildings').style.display = "none";
          document.querySelector('.famousBuildingsSection').style.display = "none";
          document.querySelector('.footer').style.display = "none";
          
          sectionClass[i].style.display = "flex";
          let a = setTimeout(slideOnScroll(slideImagesArray, i), 1500);

          backBtnLinkId[i+1].addEventListener("click", () => {
            document.querySelector('.headerImagesContainer').style.display = "inherit";
            document.querySelector('.header').style.display = "inherit";
            document.querySelector('.intro').style.display = "inherit";
            document.querySelector('.typesOfBuildings').style.display = "inherit";
            document.querySelector('.famousBuildingsSection').style.display = "inherit";
            document.querySelector('.footer').style.display = "flex";
            
            sectionClass[i].style.display = "none";
            let a = 'soy una rompefunciones :)';
        })
      })
    }

}

setImages(buildingsImages, 'Buildings')
setImages(typesOfGreeksBuildings, 'typesOfBuildingsOnImage')
setImages(buildingsHeaderImages, 'buildingsHeaderImages')
setImages(partenonImages, 'partenonImages')
setImages(acropolisImages, 'acropolisImages')
setImages(erecteionImages, 'erecteionImages')
setImages(teatroImages, 'teatroImages')
setImages(segestaImages, 'segestaImages')

createArrayss(animatedTextIds, 'animatedText', 'id', 18)
createArrayss(famousBuildingsBtn, 'famousBuildings', 'id', 5)
createArrayss(famousBuildingsId, 'famousBuildingsOnPage', 'id', 5)
createArrayss(slideImagesArray, 'famousBuildingsOnPage', 'id', 5)
createArrayss(backBtnArray, 'backBtn', 'id', 6)

grayHover(buildingsImages, "buildingsContainerImageBanner", '2')
grayHover(partenonImages, 'partenonImages', '1')
grayHover(acropolisImages, 'acropolisImages', '1')
grayHover(erecteionImages, 'erecteionImages', '1')
grayHover(teatroImages, 'teatroDeDionisioImages', '1')
grayHover(segestaImages, 'temploDeSegestaImages', '1')

textOnImage(displayTextImages, 'displayedText', 'textOnImageOpacityIn 0.5s 0s ease forwards', 'textOnImageOpacityOut 0.5s 0s ease forwards')

xClickLink(document.querySelector('.typesOfBuildingsOnPage'), document.getElementById('buildingsContainerBtn1'), backBtnArray, '1')
for(i = 0; i <= 5; i++){
  xClickLink(famousBuildingsId, famousBuildingsBtn, backBtnArray, '2', i)
}
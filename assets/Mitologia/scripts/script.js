let images = document.querySelectorAll(".banner");
let titansImages = document.querySelectorAll(".horizontalImg");
let slider = document.querySelector(".item");
let titansSlider = document.querySelector(".titansSlider");
let links = document.getElementById("bannerLinks");
let titansLinks = document.getElementById("titansLinks");
let banners = document.getElementById("banner");
let titansSliderSecttion = document.getElementById("titansSliderSecttion");
let atlasBg = document.querySelectorAll(".atlasImageOnSection");
let icons = document.querySelectorAll(".titansIcons");
let sliderHeight;
let titansSliderWidth;
let imageWidth;
let titansImageWidth;
let current = 0;
let target = 0;
let ease = 0.05;

images.forEach((img, idx) => {
  img.style.backgroundImage = `url(assets/Mitologia/images/images/${
    idx + 1
  }.jpg)`;
});

titansImages.forEach((img, idx) => {
  img.style.backgroundImage = `url(assets/Mitologia/images/Titanes/${
    idx + 1
  }.jpg)`;
});

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
  xSection
) {
  id.addEventListener("click", () => {
    initX(xSliderWidth, xSlider, xImgeWidth, xImages, xSection);
    xSection.style.visibility = "visible";
  });
}

function xClickBannerOut(id, xSection) {
  id.addEventListener("click", () => {
    init();
    xSection.style.visibility = "hidden";
    document.body.style.height = `${
      document.querySelector(".header").clientHeight +
      document.querySelector(".enlacesContainer").clientHeight
    }px`;
  });
}

function xClickCard(cardClass, bannerId){
    bannerId.addEventListener("click", () => {

        document.querySelector('.header').style.visibility = "hidden";
        document.querySelector('.header').style.position = "fixed";

        document.querySelector('.enlacesContainer').style.visibility = "hidden";
        document.querySelector('.enlacesContainer').style.position = "fixed";

        titansSliderSecttion.style.visibility = "hidden";
        titansSliderSecttion.style.position = "fixed";

        cardClass.style.visibility = "visible";
        cardClass.style.position = "static";

        document.body.style.height = `${
            cardClass.clientHeight
          }px`;
    });
}

function xClickCardOut(buttonId, cardClass){
    xClickBannerOut(buttonId, cardClass);
    xClickBanner(
            buttonId,
            titansSliderWidth,
            titansSlider,
            titansImageWidth,
            titansImages,
            titansSliderSecttion
        );
    buttonId.addEventListener('click', () => {
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
  requestAnimationFrame(animate);
  animateImages();
  xAnimateImages(
    titansImageWidth,
    titansImages,
    titansSliderWidth,
    titansSlider
  );
}

//-------------------------------------------------------ON TITANS PAGES SECTION-----------------------------------------------

function setBackground(id, folder, format) {
  id.forEach((img, idx) => {
    img.style.backgroundImage = `url(assets/Mitologia/images/Titanes/${folder}/${idx + 1}.${format})`;
  });
}

init();
animate();
xClickBanner(
  document.getElementById("banner1"),
  titansSliderWidth,
  titansSlider,
  titansImageWidth,
  titansImages,
  titansSliderSecttion
);
xClickBannerOut(document.getElementById("titansLinks16"), titansSliderSecttion);
grayHover(images, "banner");
grayHover(titansImages, "horizontalImg");
setBackground(atlasBg, "prueba", "jpg");
setBackground(icons, "iconos", "png");
xClickCard(document.querySelector('.titanCard1'), document.getElementById('horizontalImg1'));
xClickCardOut(document.getElementById('titansBackBtn'), document.querySelector('.titanCard1'));

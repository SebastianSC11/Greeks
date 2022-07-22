// carruosel
const slider = document.querySelector('.slider-range');
var sliderNbr = document.querySelectorAll('.nbr');

const filosofos = document.querySelector('.images'); 
var filosofo = document.querySelectorAll('.image');

const circles = document.querySelector('.circles');
var circle = document.querySelectorAll('.circle');

var blackText = document.querySelectorAll('.blacked');

var coloredLink = document.getElementsByClassName('blue-circle');
var blackedLink = document.getElementsByClassName('black-circle');

var navLink = document.querySelectorAll('.nav-link');

var screenSizes = ['1440', '768']

function carrouselController(){
    for(let i = 0; i < sliderNbr.length; i++){
        sliderNbr[i].addEventListener('click', () =>{
            // cuando el usuario presione el primer boton
            if( i == 0){
                let card = i
                // trasladando el slider hacia arriba
                if(window.innerWidth > screenSizes[1] ){
                    sliderNbr.forEach(element => {
                        element.style.transform = 'translateY(90px)';
                    });
    
                    filosofo.forEach(element => {
                        element.style.transform= 'translateX(115vw)';
                    });
                }
                if(window.innerWidth < screenSizes[1] && window.innerWidth > screenSizes[2]){
                    sliderNbr.forEach(element => {
                        element.style.transform = 'translateY(84px)';
                    });
    
                    filosofo.forEach(element => {
                        element.style.transform= 'translateX(115vw)';
                    });
                }
                if(window.innerWidth < screenSizes[1] && window.innerWidth < screenSizes[2] ){
                    sliderNbr.forEach(element => {
                        element.style.transform = 'translateY(78px)';
                    });
    
                    filosofo.forEach(element => {
                        element.style.transform= 'translateX(115vw)';
                    });
                }
                //configurando los circulos para la transicion
                for(let i = 0; i < circle.length; i++){
                    if(i != card && i != card+1){
                        circle[i].classList.add('minimized');
                        circle[i].classList.remove('active');
                        circle[i].classList.remove('larged');
                    }
                    if(i == card){
                        circle[i].classList.add('larged');
                        circle[i].classList.remove('active');
                        circle[i].classList.remove('minimized');
                    }
                    if(i == card+1){
                        circle[i].classList.add('active');
                        circle[i].classList.remove('minimized');
                        circle[i].classList.remove('larged');
                    }      
                }

                // cambiando la interfaz segun el fondo
                blackText.forEach(text => {
                    text.style.color = "var(--white)";
                })

                blackedLink[0].style.backgroundColor = "var(--white)";
                blackedLink[0].style.color = "var(--black)";

                coloredLink[0].style.backgroundColor = "var(--dark-pink)";

                sliderNbr[i].style.color = "var(--white)";

                navLink.forEach(link => {
                    link.classList.add('whitey');
                });
            }
            // cuando el usuario presione el segundo boton
            if( i == 1){
                let card = i
                // trasladando el slider hacia arriba
                if(window.innerWidth > screenSizes[1] ){
                    sliderNbr.forEach(element => {
                        element.style.transform = 'translateY(45px)';
                    });
    
                    filosofo.forEach(element => {
                        element.style.transform= 'translateX(57vw)';
                    });
                }
                if(window.innerWidth < screenSizes[1] && window.innerWidth > screenSizes[2]){
                    sliderNbr.forEach(element => {
                        element.style.transform = 'translateY(42px)';
                    });
    
                    filosofo.forEach(element => {
                        element.style.transform= 'translateX(57vw)';
                    });
                }
                if(window.innerWidth < screenSizes[1] && window.innerWidth < screenSizes[2] ){
                    sliderNbr.forEach(element => {
                        element.style.transform = 'translateY(38px)';
                    });
    
                    filosofo.forEach(element => {
                        element.style.transform= 'translateX(57vw)';
                    });
                }

                //configurando los circulos para la transicion
                for(let i = 0; i < circle.length; i++){
                    if(i != card && i != card+1){
                        circle[i].classList.add('minimized');
                        circle[i].classList.remove('active');
                        circle[i].classList.remove('larged');
                    }
                    if(i == card){
                        circle[i].classList.add('larged');
                        circle[i].classList.remove('active');
                        circle[i].classList.remove('minimized');
                    }
                    if(i == card+1){
                        circle[i].classList.add('active');
                        circle[i].classList.remove('minimized');
                        circle[i].classList.remove('larged');
                    }      
                }

                // cambiando la interfaz segun el fondo
                blackText.forEach(text => {
                    text.style.color = "var(--white)";
                })

                blackedLink[0].style.backgroundColor = "var(--white)";
                blackedLink[0].style.color = "var(--black)";

                coloredLink[0].style.backgroundColor = "var(--dark-purple)";

                sliderNbr[i].style.color = "var(--white)";

                navLink.forEach(link => {
                    link.classList.add('whitey');
                });
            }
            // cuando el usuario presione el tercer boton
            if( i == 2){
                let card = i
                // trasladando el slider hacia arriba
                sliderNbr.forEach(element => {
                    element.style.transform = 'translateY(0px)';
                });

                filosofo.forEach(element => {
                    element.style.transform= 'translateX(0px)';
                });

                //configurando los circulos para la transicion
                for(let i = 0; i < circle.length; i++){
                    if(i != card && i != card+1){
                        circle[i].classList.add('minimized');
                        circle[i].classList.remove('active');
                        circle[i].classList.remove('larged');
                    }
                    if(i == card){
                        circle[i].classList.add('larged');
                        circle[i].classList.remove('active');
                        circle[i].classList.remove('minimized');
                    }
                    if(i == card+1){
                        circle[i].classList.add('active');
                        circle[i].classList.remove('minimized');
                        circle[i].classList.remove('larged');
                    }      
                }

                // cambiando la interfaz segun el fondo
                blackText.forEach(text => {
                    text.style.color = "var(--black)";
                })

                blackedLink[0].style.backgroundColor = "var(--black)";
                blackedLink[0].style.color = "var(--white)";

                coloredLink[0].style.backgroundColor = "var(--dark-blue)";

                sliderNbr[i].style.color = "var(--black)";

                navLink.forEach(link => {
                    link.classList.add('blacked');
                    link.classList.remove('whitey')
                });
            }
            // cuando el usuario presione el cuarto boton
            if( i == 3){
                let card = i
                // trasladando el slider hacia arriba
                if(window.innerWidth > screenSizes[1] ){
                    sliderNbr.forEach(element => {
                        element.style.transform = 'translateY(-45px)';
                    });
    
                    filosofo.forEach(element => {
                        element.style.transform= 'translateX(-57vw)';
                    });
                }
                if(window.innerWidth < screenSizes[1] && window.innerWidth > screenSizes[2]){
                    sliderNbr.forEach(element => {
                        element.style.transform = 'translateY(-42px)';
                    });
    
                    filosofo.forEach(element => {
                        element.style.transform= 'translateX(-57vw)';
                    });
                }
                if(window.innerWidth < screenSizes[1] && window.innerWidth < screenSizes[2] ){
                    sliderNbr.forEach(element => {
                        element.style.transform = 'translateY(-38px)';
                    });
    
                    filosofo.forEach(element => {
                        element.style.transform= 'translateX(-57vw)';
                    });
                }
                //configurando los circulos para la transicion
                for(let i = 0; i < circle.length; i++){
                    if(i != card && i != card+1){
                        circle[i].classList.add('minimized');
                        circle[i].classList.remove('active');
                        circle[i].classList.remove('larged');
                    }
                    if(i == card){
                        circle[i].classList.add('larged');
                        circle[i].classList.remove('active');
                        circle[i].classList.remove('minimized');
                    }
                    if(i == card+1){
                        circle[i].classList.add('active');
                        circle[i].classList.remove('minimized');
                        circle[i].classList.remove('larged');
                    }      
                }

                // cambiando la interfaz segun el fondo
                blackText.forEach(text => {
                    text.style.color = "var(--white)";
                })

                blackedLink[0].style.backgroundColor = "var(--white)";
                blackedLink[0].style.color = "var(--black)";

                coloredLink[0].style.backgroundColor = "var(--dark-green)";

                sliderNbr[i].style.color = "var(--white)";

                navLink.forEach(link => {
                    link.classList.add('whitey');
                });
            }
            // cuando el usuario presione el quinto boton
            if( i == 4){
                let card = i
                // trasladando el slider hacia arriba
                if(window.innerWidth > screenSizes[1] ){
                    sliderNbr.forEach(element => {
                        element.style.transform = 'translateY(-90px)';
                    });
    
                    filosofo.forEach(element => {
                        element.style.transform= 'translateX(-115vw)';
                    });
                }
                if(window.innerWidth < screenSizes[1] && window.innerWidth > screenSizes[2]){
                    sliderNbr.forEach(element => {
                        element.style.transform = 'translateY(-84px)';
                    });
    
                    filosofo.forEach(element => {
                        element.style.transform= 'translateX(-115vw)';
                    });
                }
                if(window.innerWidth < screenSizes[1] && window.innerWidth < screenSizes[2] ){
                    sliderNbr.forEach(element => {
                        element.style.transform = 'translateY(-78px)';
                    });
    
                    filosofo.forEach(element => {
                        element.style.transform= 'translateX(-115vw)';
                    });
                }

                //configurando los circulos para la transicion
                for(let i = 0; i < circle.length; i++){
                    if(i != card && i != card+1){
                        circle[i].classList.add('minimized');
                        circle[i].classList.remove('active');
                        circle[i].classList.remove('larged');
                    }
                    if(i == card){
                        circle[i].classList.add('larged');
                        circle[i].classList.remove('active');
                        circle[i].classList.remove('minimized');
                    }
                    if(i == card+1){
                        circle[i].classList.add('active');
                        circle[i].classList.remove('minimized');
                        circle[i].classList.remove('larged');
                    }      
                }

                // cambiando la interfaz segun el fondo
                blackText.forEach(text => {
                    text.style.color = "var(--white)";
                })

                blackedLink[0].style.backgroundColor = "var(--white)";
                blackedLink[0].style.color = "var(--black)";

                coloredLink[0].style.backgroundColor = "var(--dark-brown)";

                sliderNbr[i].style.color = "var(--white)";

                navLink.forEach(link => {
                    link.classList.add('whitey');
                });
            }

            //ajustes generales nbr
            sliderNbr[i].classList.add('active');
            sliderNbr[i].classList.add('blacked');
            if( i < sliderNbr.length-1){
                sliderNbr[i+1].classList.remove('invisibles');
                sliderNbr[i+1].style.color = "var(--gray)";
            }
            if ( i < sliderNbr.length-2){
                sliderNbr[i+2].classList.add('invisibles');
            }

            if ( i >= sliderNbr.length-4){
                sliderNbr[i-1].style.color = "var(--gray)";
                sliderNbr[i-1].classList.remove('invisibles');
            }
            if ( i >= sliderNbr.length-3){
                sliderNbr[i-2].classList.add('invisibles');
            }


            //ajustes generales filosofos
            filosofo[i].classList.add('active');
            filosofo[i].classList.remove('minimized')

            //dandole estilo a los objetos no clickeados
            // botones despues del activo
            for (let j = 0; j != i; j++){
                sliderNbr[j].classList.remove('active');
                sliderNbr[j].classList.remove('blacked');

                filosofo[j].classList.remove('active');
                filosofo[j].classList.add('minimized')
                console.log(j)
                console.log('sigo vivo')

            }
            // botones antes del activo
            for (let k = 4; k != i; k--){
                sliderNbr[k].classList.remove('active');
                sliderNbr[k].classList.remove('blacked');

                filosofo[k].classList.remove('active');
                filosofo[k].classList.add('minimized')
                console.log(k)
                console.log('sigo vivo???')
            }
        })
    }
}
carrouselController();

const cursor = document.getElementById('cursor');
function cursorController() {
    window.addEventListener('mousemove', (e) => {
        let topPos = e.pageY;
        let leftPos = e.pageX;

        cursor.style.top = topPos + "px";
        cursor.style.left = leftPos + "px";

        //parallax effect to backgrounds circles by the way
        for (let i = 0; i <= circle.length; i++) {
            circle[i].style.top = -(topPos / 10) + "px";
            circle[i].style.left = -(leftPos / 10) + "px";
        }
    })
}

cursorController();

function setImages(img, source, type){
    img.forEach((x, idx) => {
      x.style.backgroundImage = `url(assets/Filosofia/images/${source}/${
        idx + 1
      }.${type})`;
    });
}

function xClickCard(link, section){
    document.getElementById(link).addEventListener("click", () => {
      document.querySelector('.header').style.display = "none";
      document.querySelector(`.${section}`).style.display = "flex";
    }
  )
}

function xClickCardOut(btn, section){
    document.getElementById(btn).addEventListener("click", () => {
      document.querySelector('.header').style.display = "grid";
      document.querySelector(`.${section}`).style.display = "none";
    }
  )
}


setImages(document.querySelectorAll('.backgroundImageClass'), 'filosofos', 'png');
setImages(document.querySelectorAll('.filosofosOnPage'), 'filosofosOnPage', 'jpg');
setImages(document.querySelectorAll('.escuelasOnImage'), 'corrientes', 'jpg')
// Filosofos
xClickCard('filosofosLink', 'filosofos');
xClickCard('filosofosRigth', 'filosofos');
xClickCardOut('volver1', 'filosofos')
//Corrientes
xClickCard('corrientesLink', 'corrientes');
xClickCard('corrientesRigth', 'corrientes');
xClickCardOut('volver2', 'corrientes')


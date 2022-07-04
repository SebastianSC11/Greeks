document.addEventListener('DOMContentLoaded', function(){
        var windowWith = window.innerWidth;
        var horizontalLength = document.querySelector(".element-wrapper").scrollWidth;
        var horizontalLength2 = document.querySelector(".length-container").scrollWidth;
        var distFromTop = document.querySelector(".horizontal-section").offsetTop;
        var distFromTop2 = document.querySelector(".final-section").offsetTop;
        var scrollDistance = distFromTop + horizontalLength - windowWith;
        var scrollDistance2 = distFromTop2 + horizontalLength2 + scrollDistance - (windowWith/1.5);
        var quote = document.getElementById("quote")

        document.querySelector(".horizontal-section").style.height = horizontalLength + "px";
        console.log(distFromTop2);

        window.onscroll = function(){
            var scrollTop = window.pageYOffset; 
            if(scrollTop >= distFromTop && scrollTop <= scrollDistance){
                document.querySelector(".element-wrapper").style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)";
                document.body.style.animation = "bgColorChange 1s linear";
                document.body.style.backgroundColor = "#A48E7F"
                document.querySelector(".area1").style.animation = "fontColorChange 1s linear";
                document.querySelector(".description1").style.animation = "fontColorChange 1s linear";
                document.querySelector(".area1").style.color = "#CAE6E9";
                document.querySelector(".description1").style.color = "#CAE6E9";
                console.log(scrollTop);
                console.log(scrollDistance2);
            }
            if(scrollTop >= scrollDistance2-distFromTop2 && scrollTop <= scrollDistance2){
                document.body.style.backgroundColor="black";
                document.body.style.animation = "transition1 3s linear";
                document.querySelector(".final-section").style.animation = "inQuote 1s linear 3s";
                setTimeout(()=>{document.querySelector(".final-section").style.opacity = "100%"},3000);
            }
            else{}

            quote.addEventListener('mouseenter', () => {
                document.querySelector(".greek-quote").style.opacity = "0%";
                document.querySelector(".es-quote").style.opacity = "100%";
                document.querySelector(".author-greek").style.opacity = "0%";
                document.querySelector(".author-es").style.opacity = "100%";
            })

            quote.addEventListener('mouseleave', () => {
                document.querySelector(".greek-quote").style.opacity = "100%";
                document.querySelector(".es-quote").style.opacity = "0%";
                document.querySelector(".author-greek").style.opacity = "100%";
                document.querySelector(".author-es").style.opacity = "0%"; 
            })
        }
})
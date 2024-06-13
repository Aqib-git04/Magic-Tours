function openmenu() {
    document.getElementById("navbar").style.right = "0";
}

function closemenu() {
    document.getElementById("navbar").style.right = "-100vw";
}

const closemenubtn = document.getElementById("closeButton");
closemenubtn.addEventListener("click", closemenu);

const openmenubtn = document.getElementById("hamburger");
openmenubtn.addEventListener("click", openmenu);


// 

let slideIndex = 0;


function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
showSlides();

var typed = new Typed('#element', {
        strings: ['Explore Dubai with us',' Where Every Trip is a Treasure'],
        typeSpeed:70,
        loop: true,
      });
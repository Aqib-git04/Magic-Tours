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

let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0 || dots.length === 0) {
        console.error("Slides or dots not found.");
        return;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slideIndex
    slideIndex++;

    // Reset slideIndex if it exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Remove 'active' class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and add 'active' class to the corresponding dot
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    } else {
        console.error("Slide not found for index:", slideIndex - 1);
    }

    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    } else {
        console.error("Dot not found for index:", slideIndex - 1);
    }

    // Change slide every 2 seconds
    setTimeout(showSlides, 2000);
}

// Initialize the slideshow
showSlides();


let testimonialslideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function changeSlide(n) {
    const slides = document.querySelectorAll('.testimonial-slide');
    testimonialslideIndex += n;

    if (testimonialslideIndex >= slides.length) {
        testimonialslideIndex = 0;
    } else if (testimonialslideIndex < 0) {
        testimonialslideIndex = slides.length - 1;
    }

    showSlide(testimonialslideIndex);
}

// Initialize the slider
showSlide(testimonialslideIndex);






var typed = new Typed('#element', {
    strings: ['Explore Dubai with us', ' Where Every Trip is a Treasure'],
    typeSpeed: 70,
    loop: true,
});

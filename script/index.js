// scripts.js

document.getElementById('menu-toggle').addEventListener('click', function(event) {
    event.stopPropagation(); // Impede que o clique no menu toggle feche o menu imediatamente
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Fecha o menu se clicar fora
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

let currentSlideIndex = 1;
showSlides(currentSlideIndex);

// Muda para o slide anterior/próximo
function moveSlide(n) {
    showSlides(currentSlideIndex += n);
}

// Muda para o slide atual com base no indicador
function currentSlide(n) {
    showSlides(currentSlideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("dot");

    // Volta para o primeiro slide se passar do final
    if (n > slides.length) { 
        currentSlideIndex = 1;
    }

    // Volta para o último slide se for anterior ao primeiro
    if (n < 1) {
        currentSlideIndex = slides.length;
    }

    // Esconde todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove a classe ativa dos pontos (dots)
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    // Exibe o slide atual e ativa o ponto correspondente
    slides[currentSlideIndex - 1].style.display = "block";
    dots[currentSlideIndex - 1].className += " active-dot";
}
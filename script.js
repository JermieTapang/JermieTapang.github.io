document.addEventListener("DOMContentLoaded", () => {
    // Slideshow functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });

    // Form submission functionality
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Simulate form submission
        setTimeout(() => {
            form.style.display = 'none';
            formResponse.style.display = 'block';
        }, 1000); // Simulate a delay
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Slideshow functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation and submission
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('All fields are required.');
            return;
        }

        // Simulate form submission
        setTimeout(() => {
            form.style.display = 'none';
            formResponse.style.display = 'block';
        }, 1000); // Simulate a delay
    });

    // Dynamic content loading for the Games page
    if (document.querySelector('.games-content')) {
        const games = [
            {
                title: "Game Title 1",
                image: "game1.jpg",
                description: "Description of Game 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula cursus ante, non tincidunt sapien."
            },
            {
                title: "Game Title 2",
                image: "game2.jpg",
                description: "Description of Game 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula cursus ante, non tincidunt sapien."
            },
            {
                title: "Game Title 3",
                image: "game3.jpg",
                description: "Description of Game 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula cursus ante, non tincidunt sapien."
            }
        ];

        const gamesContainer = document.querySelector('.games-content');
        games.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.classList.add('game');
            gameElement.innerHTML = `
                <h3>${game.title}</h3>
                <img src="${game.image}" alt="${game.title}">
                <p>${game.description}</p>
            `;
            gamesContainer.appendChild(gameElement);
        });
    }
});

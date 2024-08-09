document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + 50;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const link = document.querySelector(`.nav-link[href="#${section.id}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            link.classList.add('active-link');
            navbar.className = `navbar ${section.id}`;
        } else {
            link.classList.remove('active-link');
        }

        if (scrollPosition >= sectionTop - window.innerHeight / 1.5) {
            section.classList.add('revealed');
        }
    });
});

/* animation onscroll */
let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}

let callback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim')
targets.forEach(target => {
    observer.observe(target);
});

/* animated hide/show onclick */
const mobile = document.querySelector('.mobile-menu');
const button = document.querySelector('.mobile-column-btn');
const close = document.querySelector('.close-btn');

button.addEventListener('click', () => {
    mobile.classList.add('active')
});
close.addEventListener('click', () => {
    mobile.classList.remove('active')
});
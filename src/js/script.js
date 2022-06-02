const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    preloader.style.display = 'none';
    gsap.fromTo(preloader, {opacity: 1}, {duration:1, opacity: 0, ease: 'power3'});
})

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('section').forEach(
    (section) => {
        gsap.fromTo(section, {x:-20, opacity: 0}, {scrollTrigger: {
            trigger: section,
            start: 'top bottom'
        }, duration:1, x:0, opacity: 1, ease: 'power3'});
    }
)

gsap.fromTo('nav', {y:-20, opacity: 0}, {duration:2, y:0, opacity: 1, ease: 'power3'});

gsap.fromTo('footer', {y:-20, opacity: 0}, {scrollTrigger: 'footer',duration:2, y:0, opacity: 1, ease: 'power3'});
const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    gsap.fromTo(preloader, {opacity: 1}, {duration:1, opacity: 0, display: 'none', ease: 'power3'});
})

gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('section');

for (const section of sections) {

    const sectionChildren = section.children;

    const tl = gsap.timeline().fromTo(sectionChildren, {x:-20, opacity:0}, {duration: 1, x:0, opacity:1,stagger:0.2})

    ScrollTrigger.create({
        trigger: section,
        start: 'top 73%',
        animation: tl
    })
}


gsap.fromTo('nav', {y:-20, opacity: 0}, {duration:2, y:0, opacity: 1, ease: 'power3'});

gsap.fromTo('footer', {y:-20, opacity: 0}, {scrollTrigger: 'footer',duration:2, y:0, opacity: 1, ease: 'power3'});







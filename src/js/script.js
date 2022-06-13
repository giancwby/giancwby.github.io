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


window.onscroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('nav').style.padding = 'clamp(0.9375rem, 0.8482142857142857rem + 0.4464285714285714vw, 1.25rem) clamp(1.25rem, 0.3571428571428571rem + 4.464285714285714vw, 4.375rem)';
        document.getElementById('nav').style.paddingBottom = '0';
        document.getElementById('nav__box').style.paddingBottom = 'clamp(0.9375rem, 0.8482142857142857rem + 0.4464285714285714vw, 1.25rem)';
    }
    else {
        document.getElementById('nav').style.padding = 'clamp(1.25rem, 1.0714285714285714rem + 0.8928571428571428vw, 1.875rem) clamp(1.25rem, 0.3571428571428571rem + 4.464285714285714vw, 4.375rem)';
        document.getElementById('nav').style.paddingBottom = '0';
        document.getElementById('nav__box').style.paddingBottom = 'clamp(1.25rem, 1.0714285714285714rem + 0.8928571428571428vw, 1.875rem)';
    }
}






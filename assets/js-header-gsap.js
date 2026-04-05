document.addEventListener('DOMContentLoaded', function() {

    gsap.from('.js-header-logo', {
        scale: 2,
        duration: 1,
        ease: 'elastic.out(0.7, 0.6)'
    })

gsap.from('.upper-nav-field', {
    x: -50, 
    opacity: 0,
    duration: 0.3,
    stagger: 0.3,
})
})
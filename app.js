// Pin the first page /////////////////////////////////////////////////////////////////////////////
const tlIntro = gsap.timeline({
    scrollTrigger: {
        trigger: '.first-page',
        start: '0%',
        end: '100%',
        pin: true,
        pinSpacing: false,
    },
});

// Second Page Fade In ////////////////////////////////////////////////////////////////////////////
const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        markers: {startColor: 'white', endColor: 'white'},
        scrub: true,
        start: '-40%',
        end: '40%',
    },
});

tlH.fromTo('.highlight', {color: 'rgba(255,255,255,0.4)'}, {color: 'rgba(255,255,255, 1)', stagger: 1});

// Second Page Fade out

const tlHRemove = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        markers: {startColor: 'pink', endColor: 'pink'},
        scrub: true,
        start: '-20%',
        end: '60%',
    },
});

tlHRemove.to('.highlight', {color: 'rgba(255,255,255, 0.4)', stagger: 1});

// Page Three /////////////////////////////////////////////////////////////////////////////////////

const tlSplit = gsap.timeline({
    scrollTrigger: {
    trigger: '.third-page',
    start: '-35%',
    end: '10%',
    scrub: true,
    }
});

tlSplit.fromTo('.large-phone', {x: '40%'}, {x: '20%'});
tlSplit.fromTo('.small-phone', {x: '-40%'}, {x: '-20%'}, '<');
tlSplit.fromTo(
    '.product-text-left', 
    {x: 50, opacity: 0},
    {x: 0, opacity: 1},
    '<',
    );
tlSplit.fromTo(
    '.product-text-right', 
    {x: -50, opacity: 0},
    {x: 0, opacity: 1},
    '<',
    );

const tlSplitPin = gsap.timeline({
    scrollTrigger: {
        trigger: '.third-page',
        start: '0%',
        end: '100%',
        pin: true,
        pinSpacing: false,
    },
});

// Page Four ////////////////////////////////////////////////////////////////////////////////////


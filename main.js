// navigation animations here

TweenMax.from("#brand", 1, {
    delay: 0.8,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("#menu li a", 1, {
    delay: 0.8,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.1);

TweenMax.staggerFrom(".hr1", 1,
{
    delay: 1.2,
    opacity: 0,
    ease: Expo.easeInOut
})


new WOW().init();
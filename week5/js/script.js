$(document).ready(function(){
    // jQuery methods go here...
    gsap.registerPlugin(DrawSVGPlugin);
let mySVG = $('svg#mySVG');
let circle = $('circle#circle');
let letters = $('.letters');
let paths = $('svg#spirograph .myPaths');
console.log(paths);
// gsap.from(circle,{duration: 4, drawSVG: 0, delay: 5});
let tl1 = gsap.timeline();
// gsap.set(circle, {stroke:"blue"});
// tl1.from(circle, {duration: 3, drawSVG: 0, ease: "back.out(1.7)", stroke:"#34bf49"}, 1);
tl1.fromTo(circle, {stroke:"#087318", drawSVG: "0%"},{duration: 3, drawSVG: "100%", ease: "back.out(1.7)", stroke:"#34bf49"}, 1);
tl1.from(letters, {duration: 3, stagger: 1, drawSVG: 0}, 1);

let tl2 = gsap.timeline();
tl2.from(paths, {duration: 3, autoAlpha: 0, stagger: 0.3, ease: "bounce.out"}, 2);
GSDevTools.create();
  //jQuery ends here
  });
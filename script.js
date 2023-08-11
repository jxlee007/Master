
// el = element on which we want to implement scroll
//inside query selector we will right main to select main div of html
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// --------------------------------------- ORIGINAL TYPE -----------------------------
// hoisted = keyword + name
// function circleMousefollow() {
//     window.addEventListener('mousemove' , function(details){
//         console.log(details);
//     })
// }


// ------------------------------------------- TYPE 1 --------------------------------
// hoisted function = function Keyword+name
// function circleMousefollow() {
//     window.addEventListener("mousemove", e => console.log(e))
// }

// ------------------------------------------- TYPE 2 --------------------------------
// working
// In js functions are also considered as value objects so we can store them in variables
// when we call a function inside a function it is know as callback function .... 
// we should always use arrow functions as callback functions as they have lexical scope
// lexical scope :: it means that the function doesn't have its own this keyword but copies the .this keyword from the above(super) functions
// e = function(value) = parameter

// non-hoisted function = no keyword
// const cmf = function(){
//     window.addEventListener('mousemove', (e) => console.log(e)) 
// }

// cmf()

// hoisted function in js :: In js the normal function is hoisted meaning that they can be called before declarations in the code.
// hoisted = declare anywhere call anywhere 
// non hoisted = first declare then call
// arrow = anonymous = noname 
// Arrow functions and anonymous functions are not Hoisted , which means that they cannot be called before declarations

// ---------------------------------------------------- FINAL TYPE -----------------------------------------

// backticks `` are used to joint two things in js = alternative of + operator
// backticks `` = template strings
function circleMousefollow(xscale,yscale) {
        window.addEventListener('mousemove' , function(details){
            console.log(details);
            document.querySelector('#dot').style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})`
        })
}

// ------------------------------------------------------ DAY 3-------------------------------------------------
// creating animation for hero heading
//  tl = timeline
// for delaying each element in a class one after another we use stagger 
// delay can given in negative
function HeroAnim (){
    var tl = gsap.timeline();
    
    tl.from('#nav',{
        y: -10,
        opacity: 0,
        ease: Expo.easeInOut,
        // duration: 1
        duration: .6
    })

    tl.to('.boxelem',{
        y: 0,
        opacity: 1,
        ease: Expo.EaseInOut,
        // duration: 2,
        duration: 1,
        // stagger: .2,
        stagger: .1,
        // delay: -1
        delay: .5
    })

    tl.from('#herofooter',{
        y: 10,
        opacity: 0,
        ease: Expo.EaseInOut,
        // duration: 1.5,
        duration: .4,
        // delay: -1
        delay: .1
    })

}

// ----------------------------------------------------- DAY 4 ----------------
// revise this step imp ******************
// circleskew is used to make circle follow mouse cursor so that when mouse moves at a speed then as per to that distance covered
// our circle will be skewed (chapta)
// gsap clamp is used to limit the the range of the number given in data in form of mouse co ordinates 

// ----------------------------------------------- ORIGINAL TYPE ------------------------------
// for understanding logic of circle skew
// function circleskew (){

//     var xscale = 1;
//     var yscale = 1;

//     var xprev = 0;
//     var yprev = 0;

//     window.addEventListener('mousemove', function(details){
//         var xdiff = details.clientX - xprev;
//         var ydiff = details.clientY - yprev;

//         xprev = details.clientX;
//         yprev = details.clientY;

//         console.log(xdiff , ydiff);

//     });
// }

// circleskew function is created for collecting , generating and passing data to circleMousefollow() 
// mousemove = event
// mousestop = jugaad

var timeout;

function circleskew (){
// define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener('mousemove', function(details){

        // if i dont write this line it give dot a glitchy effect and flow
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, details.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, details.clientY - yprev);

        xprev = details.clientX;
        yprev = details.clientY;

        circleMousefollow(xscale,yscale);

        timeout = setTimeout(function(){
            document.querySelector('#dot').style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale( 1 , 1 )`
        },100);
       
    });
}


// initiate the function
circleMousefollow();
HeroAnim();
circleskew();


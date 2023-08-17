
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
// this function has three methods
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
// --------------------------------------------------- FINAL TYPE ---------------------------------------
// circleskew function is created for collecting , generating and passing data to circleMousefollow() 
// mousemove = event
// mousestop = jugaad
// gsap.utils.clamp is to keep value in specific limits of an element in javascript

var timeout;

function circleskew (){
// define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener('mousemove', function(details){

        // if i don't write this line it give dot a glitchy effect and flow
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

// modified
// Function to update the time in the specified format
function updateRealTime() {
    const date = new Date();
    
    // Get hours and minutes in 12-hour format
    const hours = date.getHours() % 12 || 12;
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    // Determine if it's AM or PM
    const meridiem = date.getHours() >= 12 ? 'PM' : 'AM';
    
    // Get the time zone abbreviation
    const timeZone = new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2];
    
    // Format the time string
    const timeString = `${hours}:${minutes} ${meridiem} ${timeZone}`;
    
    // Update the time element in the footer
    const timeElement = document.getElementById('realtime');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}



// glitch
// function to add realtime in footer
// function updateRealTime() {
//     const realTimeElement = document.getElementById('realtime');
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     const formattedHours = (hours % 12) || 12; // Convert to 12-hour format
//     const timeZone = now.toLocaleTimeString('en-US', { timeZoneName: 'short' });
    
//     const timeString = `${formattedHours}:${minutes} ${ampm} ${timeZone}`;
//     realTimeElement.textContent = timeString;
// }

// working
// // Function to update and display real-time with AM/PM and time zone
// function updateRealTime() {
//     const realTimeElement = document.getElementById('realtime');
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const amPm = hours >= 12 ? 'PM' : 'AM';
//     const formattedHours = (hours % 12) || 12;
//     const timeZone = now.toLocaleTimeString('en-US', { timeZoneName: 'short' }); // Replace with the desired time zone abbreviation
    
//     const timeString = `${formattedHours}:${minutes} ${amPm} ${timeZone}`;
//     realTimeElement.textContent = timeString;
// }



// initiate the function
circleMousefollow();
HeroAnim();
circleskew();
updateRealTime();

// Call the function at intervals (every minute)
setInterval(updateRealTime, 60000);

// --------------------------------------------------------- DAY 6 ----------------------------------------------------
// today we will be writing function for second div
// using queryselectorall bcause it will provide a nodelist
// nodelist is a type of array sturcture on which we can use for each loop
// to get any details about div we use  getboundingclientrect method in js 
// gsap.utils.clamp is to keep value in specific limits of an element in javascript

document.querySelectorAll('.elem').forEach(function(elem){

    var rotate = 0;
    var rotatediff = 0;

    elem.addEventListener("mouseleave", function(details) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (details) {
        var diff = details.clientY - elem.getBoundingClientRect().top;

        rotatediff =  details.clientX - rotate ;
        rotate = details.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20, 20, rotatediff * 0.5)
        });
    });
});

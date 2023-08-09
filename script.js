
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



// backticks `` are used to joint two things in js = alternative of + operator
// backticks `` = template strings
function circleMousefollow() {
        window.addEventListener('mousemove' , function(details){
            console.log(details);
            document.querySelector('#dot').style.transform = `translate(${details.clientX}px, ${details.clientY}px)`
        })
}




// initiate the function
circleMousefollow();



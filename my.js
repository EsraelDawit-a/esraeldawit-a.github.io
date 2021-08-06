function dropMenue(){
    var menu = document.getElementById('mynave');
    var btn = document.getElementById("btn");
    if (menu.className=="left flex center-items"){
        menu.classList.add("menue");
    
       
        btn.innerHTML =" &#9932; "
        
    }
    else{
        menu.classList.remove('menue');
        btn.innerHTML = '&#9777;';
    }
}

const texts =["Software Developer", "front-end Developer", "Quick Learner"];
let count=0;
let index=0;
let currentText="";
let letter="";

(function type(){
if (count === texts.length){
count=0;
}
currentText = texts[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;
if(letter.length === currentText.length){
count++;
index=0;
}
setTimeout(type,250);
})();

mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox
} 

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
origin: 'top',
distance: '80px',
duration: 2000,
reset: true
});

/*SCROLL HOME*/
sr.reveal('#home',{}); 
sr.reveal('p',{delay: 200}); 
sr.reveal('h3',{delay: 400}); 
sr.reveal('h1',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.span',{}); 
sr.reveal('.btn',{delay: 400}); 
sr.reveal('.btn_secondary',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.social',{}); 
sr.reveal('.card`',{}); 
sr.reveal('.skills',{interval: 200}); 
sr.reveal('#status',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.mycard',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.work',{interval: 200}); 
sr.reveal('.img-wrapper',{interval: 200}); 
sr.reveal('.card-content',{interval: 200}); 
sr.reveal('iframe',{interval: 200}); 
sr.reveal('form',{interval: 200});
sr.reveal('img',{interval: 200});  



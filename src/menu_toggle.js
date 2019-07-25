window.onload = function(){

// Select the elements we want to show or hide
var mobileBtn = document.querySelector('.mobile-btn');
var menu = document.querySelector('.menu');
var closeBtn = document.querySelector('.close');
var overlay = document.querySelector('.overlay');
var links = document.querySelectorAll('ul li a');






// When the user clicks on the hamburger icon the 'open' class is added
// to both the menu and overlay elements making them visible and triggering the animation
mobileBtn.addEventListener('click', function(){
  menu.className += ' open';
  overlay.className += ' open';
})


// When the close button is clicked the 'open' class is removed from
// both the menu and overlay elements making them invisible
closeBtn.addEventListener('click', function(){
  menu.className = 'menu';
  overlay.className = 'overlay';
})

// If a user clicks outside the menu on the overlay it will also trigger the event
// to hide the menu and overlay elements
window.addEventListener('click', function(event){
  if(event.target === overlay){
    menu.className = 'menu';
    overlay.className = 'overlay';
  }
})


window.addEventListener('click' , function(event){
 
    if(event.target === links[0] || event.target === links[1] || event.target === links[2]){
      menu.className = 'menu';
      overlay.className = 'overlay';
    
  }
})


/*var open = document.getElementById('toggle');
var changeIcon = true;

var overlay = document.querySelector('.overlay');
var nav = document.querySelector('nav');
var icon = document.querySelector('.menu-toggle i');
var close = document.querySelector('close');

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');
    

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }



});*/

   


}


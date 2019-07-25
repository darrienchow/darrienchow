// Smoothscroll script

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 800
});

const scrollbutton = new SmoothScroll('#button a[href*="#"]', {
  speed: 800
});

//scroll appear

function scrollAppear(){
  var introText = document.querySelector('.intro-text');
  var introTitle = document.querySelector('.intro-title');

  var introPosition = introText.getBoundingClientRect().top;
  var introTitlePosition = introTitle.getBoundingClientRect().top;

  var screenPosition = window.innerHeight / 1.2;

  if(introPosition < screenPosition){
    introText.classList.add('intro-appear');
    introTitle.classList.add('intro-appear');
  }


}

window.addEventListener('scroll' ,scrollAppear);


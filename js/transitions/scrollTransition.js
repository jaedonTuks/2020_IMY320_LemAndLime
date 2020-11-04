let alreadyScrolling=false;
let startY;
let endY;
let startX;
let endX;

$(()=>{
  $(window).bind('wheel',onScrollEvent);

  document.body.addEventListener('touchstart',(e)=>{
    startY=e.touches[0].clientY;
    startX=e.touches[0].clientX;
  });
  document.body.addEventListener('touchend',(e)=>{
    endY=e.changedTouches[0].clientY;
    endX=e.changedTouches[0].clientX;
    let vertical=true;
    if(Math.abs(endX-startX)>Math.abs(endY-startY))
      vertical=false;

    touchDrag(vertical,endX-startX);
  });

  $('a').click( function(){
    console.log("Anchor tag clicked");
    checkNextPage();
  });
});

function onScrollEvent(event) {
   if(alreadyScrolling)
     return;
   alreadyScrolling=true;
   setTimeout(function(){ alreadyScrolling=false; }, 2000);

   if(event.originalEvent.deltaY <= 0) {
     console.log('Scroll up');
     scrollUp();
     checkNextPage();
   }
   else{
    scrollDown();
    checkNextPage();
   }
 }

function scrollUp(){
  if($("a.anchor-up").length){
    var currClass = $('#swup').attr("class");
    $('#swup').removeClass('transition-next');
    $('#swup').addClass('transition-prev');
    $('.anchor-up')[0].click();
  }
  else{
    console.log("can't scroll up");
  }
}
function scrollDown(){
  console.log('Scroll down');
  if($("a.anchor-down").length){
    $('#swup').removeClass('transition-prev');
    $('#swup').addClass('transition-next');
    $('.anchor-down')[0].click();
  }
  else{
    console.log("can't scroll down");
  }
}
// debounce from underscore.js
function debounce(func, wait, immediate) {
	let timeout;
	return function() {
		let context = this, args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

function checkPage(){
  if($("a.anchor-up").length == false && $("a.anchor-down").length){
    $('div.logo > a').removeAttr('id');
    $('div.logo > a').attr('id','home-logo-link');

    $('img#burger-fud-icon').attr('src','./media/images/mobile-solid-o.svg');
    $('img#burger-travel-icon').attr('src','./media/images/newspaper-regular-o.svg');
    $('img#burger-hex-icon').attr('src','./media/images/gamepad-solid-o.svg');
    $('img.burger-film-icon').attr('src','./media/images/film-solid-o.svg');
  }
  else if($("a.anchor-up").length && $("a.anchor-down").length){
    $('div.logo > a').removeAttr('id');
    $('img#burger-fud-icon').attr('src','./media/images/mobile-solid-b.svg');
    $('img#burger-travel-icon').attr('src','./media/images/newspaper-regular-b.svg');
    $('img#burger-hex-icon').attr('src','./media/images/gamepad-solid-b.svg');
    $('img.burger-film-icon').attr('src','./media/images/film-solid-b.svg');
  }
  else if($("a.anchor-up").length && $("a.anchor-down").length == false){
    $('div.logo > a').removeAttr('id');
    $('div.logo > a').attr('id','about-logo-link');

    $('img#burger-fud-icon').attr('src','./media/images/mobile-solid-p.svg');
    $('img#burger-travel-icon').attr('src','./media/images/newspaper-regular-p.svg');
    $('img#burger-hex-icon').attr('src','./media/images/gamepad-solid-p.svg');
    $('img.burger-film-icon').attr('src','./media/images/film-solid-p.svg');
  }
  console.log("checkPage() called");
  $(this).dequeue();
}

function checkNextPage(){
  console.log("checkNextPage() called");
  $(this).delay(900).queue(checkPage);
}

checkPage();

let alreadyScrolling=false;
let startY;
let endY;
let startX;
let endX;
$(()=>{
  $(window).bind('wheel',onScrollEvent);

  // document.body.addEventListener('touchmove',touchDrag);
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
});

// let onScrollEvent=debounce(
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
 // ,300,true);
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
  }
  else if($("a.anchor-up").length && $("a.anchor-down").length){
    $('div.logo > a').removeAttr('id');
  }
  else if($("a.anchor-up").length && $("a.anchor-down").length == false){
    $('div.logo > a').removeAttr('id');
    $('div.logo > a').attr('id','about-logo-link');

  }
  $(this).dequeue();
}

function checkNextPage(){
  $(this).delay(900).queue(checkPage);
}

checkPage();

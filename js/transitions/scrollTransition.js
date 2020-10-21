let alreadyScrolling=false;
let startY;
let endY;
$(()=>{
  $(window).bind('wheel',onScrollEvent);

  // document.body.addEventListener('touchmove',touchDrag);
  document.body.addEventListener('touchstart',(e)=>{
    startY=e.touches[0].clientY;

  });
  document.body.addEventListener('touchend',(e)=>{
    endY=e.changedTouches[0].clientY;
    touchDrag();
  });
});
function touchDrag(){
  
  if(startY<endY){
    scrollUp();
  }else if(startY>endY){
    scrollDown();
  }
}
// let onScrollEvent=debounce(
function onScrollEvent(event) {
   if(alreadyScrolling)
     return;
   alreadyScrolling=true;
   setTimeout(function(){ alreadyScrolling=false; }, 2000);

   if(event.originalEvent.deltaY <= 0) {
     console.log('Scroll up');
     scrollUp();
   }
   else {
    scrollDown();
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
};

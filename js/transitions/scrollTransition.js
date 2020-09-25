let alreadyScrolling=false;
$(()=>{
  $(window).bind('mousewheel',onScrollEvent);

  console.log("scrollTranstion loaded");
});

let onScrollEvent=debounce(
  function(event) {
   if(alreadyScrolling)
     return;

   alreadyScrolling=true;
   setTimeout(function(){ alreadyScrolling=false; }, 1200);

   if(event.originalEvent.wheelDelta >= 0) {
     console.log('Scroll up');
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
   else {
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
 },300,true);

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

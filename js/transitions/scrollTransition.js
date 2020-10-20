let alreadyScrolling=false;
$(()=>{
  $(window).bind('wheel',onScrollEvent);
  console.log("scrollTranstion loaded boi");
});

// let onScrollEvent=debounce(
function onScrollEvent(event) {
   if(alreadyScrolling)
     return;
   alreadyScrolling=true;
   setTimeout(function(){ alreadyScrolling=false; }, 2000);

   if(event.originalEvent.deltaY <= 0) {
     console.log('Scroll up');
     if($("a.anchor-up").length){
       var currClass = $('#swup').attr("class");
       $('#swup').removeClass('transition-next');
       $('#swup').addClass('transition-prev');
       console.log($('.anchor-up')[0]);
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

       console.log($('.anchor-down')[0]);
       $('.anchor-down')[0].click();
     }
     else{
       console.log("can't scroll down");
     }
   }
 }
 // ,300,true);

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

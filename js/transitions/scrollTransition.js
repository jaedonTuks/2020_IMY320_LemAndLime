$(()=>{
  $(window).bind('mousewheel', function(event) {
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
  });

  console.log("scrollTranstion loaded");
});

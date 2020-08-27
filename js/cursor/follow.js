let cursor=$("#cursor");
let highlight=$("#cursorB");
$(()=>{
  $(window).mousemove(followMouse);
  $(".hover").on("mouseenter",growCursor);
  $(".hover").on("mouseleave",shrinkCursor);
});

function followMouse(e){
  let y=e.clientY;
  cursor.css({left: e.clientX,top:e.clientY });
  highlight.css({left: e.clientX,top:e.clientY });
}
function growCursor(){
  cursor.css("opacity","50%");
  cursor.css("width","13%");
  highlight.css("opacity","100%");
  highlight.css("transition-delay","1s");

}
function shrinkCursor(){
  // highlight.css("opacity","0%");
  // cursor.css("opacity","100%");
  // highlight.css("width","8%");

  cursor.css("opacity","100%");
  cursor.css("width","8%");
  highlight.css("opacity","0%");

  highlight.css("opacity","0%");
  highlight.css("transition-delay","0s");
}

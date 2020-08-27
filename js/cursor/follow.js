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
  cursor.css("opacity","0%");
  cursor.css("width","13%");

  highlight.css("width","13%");
  highlight.css("opacity","100%");


}
function shrinkCursor(){

  cursor.css("opacity","100%");
  cursor.css("width","8%");
  highlight.css("opacity","0%");
  highlight.css("width","8%");
}

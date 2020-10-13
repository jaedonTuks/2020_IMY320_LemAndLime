//written by jaedon heger for lem and lime
//cursor svg made in blender
let cursor=$("#cursor");
let highlight=$("#cursorB");
$(()=>{
  $(window).mousemove(followMouse);
  $(".hover").on("mouseenter",growCursor);
  $(".hover").on("mouseleave",shrinkCursor);
  $("a").on("click",shrinkCursor);
});

function followMouse(e){
  let y=e.clientY;

  cursor.css({left: e.clientX+"px",top:e.clientY +"px"});
  highlight.css({left: e.clientX+"px",top:e.clientY+"px" });

// console.log(highlight.css("left"));
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

function hideCursor(){
  cursor.css({left: -10,top:-10 });
  highlight.css({left: -10,top:-10 });
}

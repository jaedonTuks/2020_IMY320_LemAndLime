let open=false;
$(()=>{
  // $("#burgerMenuBox").hide();
});
$("#burger").on("click",()=>{
  if(open)
    hide();
  else
    showMenu();
});
$("nav #burgerMenuBox div a").on("click",hide);


function showMenu(){

  $("#burgerMenuBox").animate({
    width:"100%"
  },200);
  $(".page-indicator").hide();

  $("#burger").addClass("open");
  $("#cursor,#cursorB").css({
    "z-index":10
  });
  $("#navBack").css({
    "min-width":"40%"
  });
  open=true;
}
function hide(){
  $("#burgerMenuBox").animate({
    width:"0%"
  },0);
  $(".page-indicator").show();
  $("#burger").removeClass("open");
  $("#cursor,#cursorB").css({
    "z-index":-5
  });
  $("#navBack").css({
    "min-width":"0%"
  });
  open=false;
}

swup.on('contentReplaced', switchPage);

const pageInfo={
  index:{
    cursorHighlightSrc:"./media/cursor/c-highlightOrange.svg"
  },
  p1:{
    cursorHighlightSrc:"./media/cursor/c-highlightBlue.svg"
    },
  p2:{
    cursorHighlightSrc:"./media/cursor/c-highlightBlue.svg"
    },
  p3:{
    cursorHighlightSrc:"./media/cursor/c-highlightBlue.svg"
  },
  p4:{
    cursorHighlightSrc:"./media/cursor/c-highlightBlue.svg"
  },
  p5:{
    cursorHighlightSrc:"./media/cursor/c-highlightBlue.svg"
  },
  about:{
      cursorHighlightSrc:"./media/cursor/c-highlightPurple.svg"
    }
}
function switchPage(){
  //ensure hiding of burger if open
  hide();
 // setTimeout(function(){ alreadyScrolling=false; }, 1000);
  let newCursorSrc;
  let currElement;
  let projectPage=false;
  // switch cursor
  let currPage=document.location.pathname.match(/[^\/]+$/)[0];

  switch(currPage){
    case "index.html":
      newCursorSrc=pageInfo.index.cursorHighlightSrc;
      $("#burger div").addClass("highlightOrange");
      $("#burgerMenuBox div a").addClass("hoverOrange");
      currElement=$("#home");
      $(".logo a").attr("href","/2020_IMY320_LemAndLime/about.html");
      break;
    case "project1.html":
      newCursorSrc=pageInfo.p1.cursorHighlightSrc;
      $("#burger div").addClass("highlightBlue");
      $("#burgerMenuBox div a").addClass("hoverBlue");
      currElement=$("#fud");
      projectPage=true;
      $(".logo a").attr("href","/2020_IMY320_LemAndLime/about.html");
      break;
    case "project2.html":
      newCursorSrc=pageInfo.p2.cursorHighlightSrc;
      $("#burger div").addClass("highlightBlue");
      $("#burgerMenuBox div a").addClass("hoverBlue");
      currElement=$("#adventure");
      projectPage=true;
      $(".logo a").attr("href","/2020_IMY320_LemAndLime/about.html");
      break;
    case "project3.html":
      newCursorSrc=pageInfo.p3.cursorHighlightSrc;
      $("#burger div").addClass("highlightBlue");
      $("#burgerMenuBox div a").addClass("hoverBlue");
      currElement=$("#hex");
      projectPage=true;
      $(".logo a").attr("href","/2020_IMY320_LemAndLime/about.html");
      break;
    case "project4.html":
      newCursorSrc=pageInfo.p4.cursorHighlightSrc;
      $("#burger div").addClass("highlightBlue");
      $("#burgerMenuBox div a").addClass("hoverBlue");
      currElement=$("#promo");
      projectPage=true;
      $(".logo a").attr("href","/2020_IMY320_LemAndLime/about.html");
      break;
    case "project5.html":
      newCursorSrc=pageInfo.p5.cursorHighlightSrc;
      $("#burger div").addClass("highlightBlue");
      $("#burgerMenuBox div a").addClass("hoverBlue");
      currElement=$("#horror");
      projectPage=true;
      $(".logo a").attr("href","/2020_IMY320_LemAndLime/about.html");
      break;
    case "about.html":
      newCursorSrc=pageInfo.about.cursorHighlightSrc;
      $("#burger div").addClass("highlightPurple");
      $("#burgerMenuBox div a").addClass("hoverPurple");
      currElement=$("#aboutBurger");
      $(".logo a").attr("href","/2020_IMY320_LemAndLime/index.html");
      break;
    default:
      newCursorSrc=pageInfo.index.cursorHighlightSrc;
      $("#burger div").addClass("highlightOrange");
      $("#burgerMenuBox div a").addClass("hoverOrange");
      currElement=$("#home");
      $(".logo a").attr("href","/2020_IMY320_LemAndLime/index.html");
      break;
  }

  $("#cursorB").attr("src",newCursorSrc);

  setBurgerActive(currElement,projectPage);



}
function setBurgerActive(currElement,projectPage){
  let newlink;

  switch($(".active").attr("id")){
    case "home":
      newLink="/2020_IMY320_LemAndLime/index.html";
      $("#burger div").removeClass('highlightOrange');
      $("#burgerMenuBox div a").removeClass('hoverOrange');
      break;
    case "fud":
      newLink="/2020_IMY320_LemAndLime/project1.html";
      if(!projectPage){
        $("#burger div").removeClass('highlightBlue');
        $("#burgerMenuBox div a").removeClass('hoverBlue');
      }
      break;
    case "adventure":
      newLink="/2020_IMY320_LemAndLime/project2.html";
      if(!projectPage){
        $("#burger div").removeClass('highlightBlue');
        $("#burgerMenuBox div a").removeClass('hoverBlue');
      }
      break;
    case "hex":
      newLink="/2020_IMY320_LemAndLime/project3.html";
      if(!projectPage){
        $("#burger div").removeClass('highlightBlue');
        $("#burgerMenuBox div a").removeClass('hoverBlue');
      }
      break;
    case "promo":
        newLink="/2020_IMY320_LemAndLime/project4.html";
        if(!projectPage){
          $("#burger div").removeClass('highlightBlue');
          $("#burgerMenuBox div a").removeClass('hoverBlue');
        }
        break;
    case "horror":
        newLink="/2020_IMY320_LemAndLime/project5.html";
        if(!projectPage){
          $("#burger div").removeClass('highlightBlue');
          $("#burgerMenuBox div a").removeClass('hoverBlue');
        }
        break;
    case "aboutBurger":
        newLink="/2020_IMY320_LemAndLime/about.html";
        $("#burger div").removeClass('highlightPurple');
        $("#burgerMenuBox div a").removeClass('hoverPurple');
        break;
    default:
      break;
  }

  $(".active").attr("href",newLink).removeClass("active");
  currElement.attr("href","").addClass("active");
}

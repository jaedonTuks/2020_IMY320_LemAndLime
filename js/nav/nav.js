let open=false;
$(()=>{
  $("#burgerMenuBox").hide();
});
$("#burger").on("click",()=>{
  if(open)
    hide();
  else
    showMenu();
});
$("nav #burgerMenuBox div a").on("click",hide);


function showMenu(){

  $("#burgerMenuBox").show();
  $(".page-indicator").hide();

  $("#burger").addClass("open");
  open=true;
}
function hide(){
  $("#burgerMenuBox").hide();
  $(".page-indicator").show();
  $("#burger").removeClass("open");

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
  let newCursorSrc;
  let currElement;
  let projectPage=false;
  // switch cursor
  let currPage=document.location.pathname.match(/[^\/]+$/)[0];

  switch(currPage){
    case "index.html":
      newCursorSrc=pageInfo.index.cursorHighlightSrc;
      $("#burger div").addClass("highlightOrange");

      currElement=$("#home");
      break;
    case "project1.html":
      newCursorSrc=pageInfo.p1.cursorHighlightSrc;
      $("#burger div").addClass("highlightBlue");
      currElement=$("#fud");
      projectPage=true;
      break;
    case "project2.html":
      newCursorSrc=pageInfo.p2.cursorHighlightSrc;
      $("#burger div").addClass("highlightBlue");
      currElement=$("#adventure");
      projectPage=true;
      break;
    case "project3.html":
      newCursorSrc=pageInfo.p3.cursorHighlightSrc;
      $("#burger div").addClass("highlightBlue");
      currElement=$("#hex");
      projectPage=true;
      break;
    case "project4.html":
      newCursorSrc=pageInfo.p4.cursorHighlightSrc;
      $("#burger div").addClass("highlightBlue");
      currElement=$("#promo");
      projectPage=true;
      break;
    case "project5.html":
      newCursorSrc=pageInfo.p5.cursorHighlightSrc;
      $("#burger div").addClass("highlightBlue");
      currElement=$("#horror");
      projectPage=true;
      break;
    case "about.html":
      newCursorSrc=pageInfo.about.cursorHighlightSrc;
      $("#burger div").addClass("highlightPurple");
      currElement=$("#aboutBurger");
      break;
    default:
      newCursorSrc=pageInfo.index.cursorHighlightSrc;
      $("#burger div").addClass("highlightOrange");
      currElement=$("#home");
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
      break;
    case "fud":
      newLink="/2020_IMY320_LemAndLime/project1.html";
      if(!projectPage)
        $("#burger div").removeClass('highlightBlue');
      break;
    case "adventure":
      newLink="/2020_IMY320_LemAndLime/project2.html";
      if(!projectPage)
        $("#burger div").removeClass('highlightBlue');
      break;
    case "hex":
      newLink="/2020_IMY320_LemAndLime/project3.html";
      if(!projectPage)
        $("#burger div").removeClass('highlightBlue');
      break;
    case "promo":
        newLink="/2020_IMY320_LemAndLime/project4.html";
        if(!projectPage)
              $("#burger div").removeClass('highlightBlue');
        break;
    case "horror":
        newLink="/2020_IMY320_LemAndLime/project5.html";
        if(!projectPage)
              $("#burger div").removeClass('highlightBlue');
        break;
    case "aboutBurger":
        newLink="/2020_IMY320_LemAndLime/about.html";
        $("#burger div").removeClass('highlightPurple');
        break;
    default:
      break;
  }

  $(".active").attr("href",newLink).removeClass("active");
  currElement.attr("href","").addClass("active");
}

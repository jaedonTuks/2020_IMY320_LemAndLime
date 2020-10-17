let open=false;
let canClick=true;
$(()=>{

  $("#burgerMenuBox").hide();
  $("#burger").on("click",burgerClick);


});



function burgerClick(e){
  highlight.css({left: e.clientX,top:e.clientY });
  if(!canClick){return;}

  canClick=false;
  if(open)
    hide();
  else
    showMenu();
}
$("nav #burgerMenuBox div a").on("click",hide);


function showMenu(){

    $("#burgerMenuBox").show();
  $(".page-indicator").hide();
//
  $("#cursor,#cursorB").css({
    "z-index":10
  });
  $("#navBack")
  .animate({
      "min-width":"50%"
    },200,"linear",
    ()=>{
      console.log("this anim finished next one");
      $("#burgerMenuBox").animate({
        width:"100%"
      },200);
    }
  );
  burgerCross();
  //  $(".burgerLine").addClass("open"); //problem here
  setTimeout(()=>{
    canClick=true;
  },1000);
    open=true;
  }
function hide(){
  $("#burgerMenuBox").hide();
  $("#burgerMenuBox").animate({
    width:"0%",
    top:"0"
  },200,"linear",()=>{
    console.log("backnow");
    $("#navBack").css({
      "min-width":"0%"
    });

  });
  // $(".burgerLine").removeClass("open"); //problem here
  burgerNormal();
  setTimeout(()=>{
    $("#cursor,#cursorB").css({
      "z-index":-5
    });
    $(".page-indicator").show();
    canClick=true;
  },1000);

  open=false;
}
function burgerCross(){
  console.log("makignCross");
  $(".topLine").css({
    "-webkit-transform": "rotate(45deg)",
    "-moz-transform": "rotate(45deg)",
    "-o-transform": "rotate(45deg)",
    "transform": "rotate(45deg)",
    "top": "-3px",
    "left": "8px"
  });
  $(".botLine").css({
    "-webkit-transform": "rotate(-45deg)",
    "-moz-transform": "rotate(-45deg)",
    "-o-transform": "rotate(-45deg)",
    "transform": "rotate(-45deg)",
    "top": "39px",
    "left": "8px"
  });
  $(".midLine").css({
    "top": "18px",
    "width": "0%",
    "opactiy":"0"
  });
}

function burgerNormal(){
  $(".topLine").css({
    "-webkit-transform": "rotate(0deg)",
    "-moz-transform": "rotate(0deg)",
    "-o-transform": "rotate(0deg)",
    "transform": "rotate(0deg)",
    "top": "-3px",
    "left": "8px"
  });
  $(".botLine").css({
    "-webkit-transform": "rotate(0deg)",
    "-moz-transform": "rotate(0deg)",
    "-o-transform": "rotate(0deg)",
    "transform": "rotate(0deg)",
    "top": "39px",
    "left": "8px"
  });
  $(".midLine").css({
    "top": "18px",
    "width": "45px",
    "opactiy":"1"
  });
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
    },
  singleProjects:{
      cursorHighlightSrc:"./media/cursor/c-highlightBlue.svg"
  }
}
function switchPage(){

  //ensure hiding of burger if open
  hide();

  $(".hover").on("mouseenter",growCursor);
  $(".hover").on("mouseleave",shrinkCursor);
  $("a").on("click",  shrinkCursor);

  $("#fudStyleCss").remove();
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
      newCursorSrc=pageInfo.singleProjects.cursorHighlightSrc;
      $("div.burgerLine").addClass("highlightBlue");
      $("#burgerMenuBox div a").addClass("hoverBlue");

      projectPage=true;


      $('head').append('<link rel="stylesheet" href="./css/fud.css" type="text/css" id="fudStyleCss"/>');
      console.log("heckYeah");
      if(currPage=="fud.html"){
        currElement=$("#fud");
      }else{
        currElement=$("#horror");
      }

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
      if(!projectPage){
        $("#burger div").removeClass('highlightBlue');
        $("#burgerMenuBox div a").removeClass('hoverBlue');
      }
      break;
  }

  $(".active").attr("href",newLink).removeClass("active");
  currElement.attr("href","").addClass("active");
}

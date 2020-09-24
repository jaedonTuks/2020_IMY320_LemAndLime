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
function showMenu(){

  $("#burgerMenuBox").show();
  $(".page-indicator").hide();

  $("#burger").toggleClass("open");
  open=true;
}
function hide(){
  $("#burgerMenuBox").hide();
  $(".page-indicator").show();
  $("#burger").toggleClass("open");

  open=false;
}

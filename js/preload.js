$(()=>{

  let preload=new Array();
  preload[0]="media/images/fud-home.png";
  preload[1]="media/images/fud-login.png";
  preload[2]="media/images/adventure-trav-home.png";
  preload[3]="media/images/hex-tutorial.png";
  preload[4]="media/images/neighbourhood-home.png";
  preload[5]="media/images/after-hours.png";

  let loadedImages=new Array();
  for(let i=0;i<preload.length;i++ ){
    loadedImages.push(new Image());
    loadedImages[i].src=preload[i];
  }
});

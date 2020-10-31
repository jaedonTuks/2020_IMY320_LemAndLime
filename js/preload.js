$(()=>{

  let preload=new Array();
  preload[0]="media/images/fud-screens.png";
  preload[1]="media/images/adventure-trav-home.png";
  preload[2]="media/images/hex-tutorial.png";
  preload[3]="media/images/neighbourhood-home.png";
  preload[4]="media/images/after-hours.png";
  preload[5]="media/images/jaedon.png";
  preload[6]="media/images/jono.png";

  let loadedImages=new Array();
  for(let i=0;i<preload.length;i++ ){
    loadedImages.push(new Image());
    loadedImages[i].src=preload[i];
  }
});

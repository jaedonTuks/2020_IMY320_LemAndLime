document.getElementById('shortFilm').addEventListener('ended',ended,false);

function ended(){
  console.log("vid fin 1");
  document.getElementById('watch-now').style.display = "block";
}

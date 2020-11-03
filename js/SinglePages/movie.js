document.getElementById('shortFilm').addEventListener('ended',ended,false);

function ended(){
  console.log("vid fin 1");
  document.getElementById('watch-now').style.display = "block";
}

/*var shortFilm = document.getElementById("shortFilm");
shortFilm.onended = function() {
    console.log("vid fin 2");
    document.getElementById('watch-now').hidden = false;
};*/

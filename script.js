function closewindow() {
    document.getElementById("window").style.display = "none";
    document.getElementById("accicon").style.display = "block";
}
function openwindow() {
    document.getElementById("window").style.display = "block";
    document.getElementById("accicon").style.display = "none";
}
function openoverlay() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("content").style.opacity = "0.27";
    document.getElementById("header").style.opacity = "0.27";
}
function closeoverlay() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("content").style.opacity = "1";
    document.getElementById("header").style.opacity = "1";
}

function c_selection(evt) {
    var i, color_selection;

    color_selection = document.getElementsByClassName("color_selection");
    for (i = 0; i < color_selection.length; i++) {
        color_selection[i].className = color_selection[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}
function reset() {
    location.reload();
}
function myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
}
function clicked(event) {
    if ( event.style.background == "forestgreen") {
        event.style.background = "none";
        event.style.color = "black";
    } else {
        event.style.background = "forestgreen";
        event.style.color = "white";
        
    }
 
}
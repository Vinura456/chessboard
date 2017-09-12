$( function() {
    $( "#Black_Pawn-1" ).draggable();
} );

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("#Black_Pawn-1")
}

var image = document.getElementById("Black_Pawn-1");
image.onclick = function(e) {
    var a= $("#Black_Pawn-1").clone();

    $("#Black_Pawn-1").remove();

}
console.log("Assignment 6")

function removecolor() {
    var dropDown = document.getElementById("colorSelect");
    for (var i = 0; i <= dropDown.options.length; i++) {
        if (dropDown.options[i].selected) {
            dropDown.removeChild(dropDown.options[i]);
            break;
        }
    }
}

















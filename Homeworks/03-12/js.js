function myFunction() {
    alert("Hello World!");
}

// Keiciam raide i dideles mazas ir pan
function changeToUpperCase() {
    document.getElementById("Fill_me").value = document.getElementById("Fill_me").value.toUpperCase().replace(" ", " ")
}

function changeToLowerCase() {
    document.getElementById("Fill_me").value = document.getElementById("Fill_me").value.toLowerCase().replace(" ", " ")
}




// ijungia isjungia inputa
function disable() {
    document.getElementById("en/dsbl").disabled = true;
}

function enable() {
    document.getElementById("en/dsbl").disabled = false;
}

// uzvedus pakeicia paveiksliuka

function MouseRollover(MyImage) {
        MyImage.src = "https://i.imgur.com/PLDVxza.jpg";
    }
function MouseOut(MyImage) {
    MyImage.src = "https://i.imgur.com/0DElr0H.jpg";
}


//            Get the modal


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
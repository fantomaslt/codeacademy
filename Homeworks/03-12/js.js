// Alert message

function alertFunction() {
    alert("Hello World!");
}

// Keiciam raide i dideles mazas ir pan
function changeToUpperCase() {
    document.getElementById("Fill_me").value = document.getElementById("Fill_me").value.toUpperCase().replace(" ", " ")
}

function changeToLowerCase() {
    document.getElementById("Fill_me").value = document.getElementById("Fill_me").value.toLowerCase().replace(" ", " ")
}
function FirstUpperCase (){
    let text_input1 = document.getElementById("Fill_me").value;
    text_input1 = text_input1.toLowerCase();
    document.getElementById("Fill_me").value = text_input1.charAt(0).toUpperCase()+text_input1.slice(1);
}

function FirstLowerCase (){
    let text_input1 = document.getElementById("Fill_me").value;
    text_input1 = text_input1.toUpperCase();
    document.getElementById("Fill_me").value = text_input1.charAt(0).toLowerCase()+text_input1.slice(1);

}

// ijungia isjungia inputa
function disable() {
    document.getElementById("en/dsbl").disabled = true;
}

function enable() {
    document.getElementById("en/dsbl").disabled = false;
}

// tikrina pasta ir varda


// uzvedus pakeicia paveiksliuka

function MouseRollover(MyImage) {
        MyImage.src = "https://i.imgur.com/PLDVxza.jpg";
    }
function MouseOut(MyImage) {
    MyImage.src = "https://i.imgur.com/0DElr0H.jpg";
}


           // Get the modal

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
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


// EMAILS IR TELEFONAS



// Mygtuku funkcijos spalva, cursorius, borderis

// SPALVOS

document.getElementById("changeGreen").onclick = function(){
    document.getElementById("output").style.color = 'green';
}
document.getElementById("changeYellow").onclick = function(){
    document.getElementById("output").style.color = 'greenyellow';
}
document.getElementById("changeBlue").onclick = function(){
    document.getElementById("output").style.color = 'Blue';
}

//Borderiai

document.getElementById("FullBorder").onclick = function(){
    document.getElementById("output").style.border = "1px solid #000000";
}
document.getElementById("thin").onclick = function(){
    document.getElementById("output").style.border = "thin dotted red";
}
document.getElementById("mix").onclick = function myFunction() {
    document.getElementById("output").style.border = "outset blue";
}

// reset

function Resetbutton() {
    document.getElementById("Output").reset();
}




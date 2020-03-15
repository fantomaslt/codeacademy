function myFunction() {
    alert("Hello World");
}

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





document.getElementById("imgg").onmouseover = function() {mouseOver()};
document.getElementById("imgg").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("imgg").src = "hackanm.gif";
}

function mouseOut() {
    document.getElementById("imgg").src = "https://i.imgur.com/0DElr0H.jpg";
}
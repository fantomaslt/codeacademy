function myFunction() {
    alert("Hello World");
}

function changeToUpperCase() {
    document.getElementById("Fill_me").value = document.getElementById("Fill_me").value.toUpperCase().replace(" ", " ")
}

function changeToLowerCase() {
    document.getElementById("Fill_me").value = document.getElementById("Fill_me").value.toLowerCase().replace(" ", " ")
}










function disable() {
    document.getElementById("en/dsbl").disabled = true;
}

function enable() {
    document.getElementById("en/dsbl").disabled = false;
}

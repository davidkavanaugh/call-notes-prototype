// Copy all to clipboard

function copyToClipboard(){
  array = [document.querySelector("#notes").innerText]
  if (document.querySelector("#additional-comments").innerText.length > 0){
    array.push(document.querySelector("#additional-comments").innerText);
  }
let toCopy = array.join(" ");

let textarea = document.createElement("TEXTAREA");
document.body.appendChild(textarea);
var t = document.createTextNode(toCopy);
textarea.appendChild(t);

document.querySelector('TEXTAREA').select();

document.execCommand("copy");

textarea.remove();
}


// reset all fields

function reset(){
  document.getElementById("form").reset();
  document.getElementById("additional-comments").innerHTML="";
}

// login validation
function login(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "seven"){
alert ("Login successful");
window.location = "admin.html"; // Redirecting to other page.
return false;
}
else{
alert("Incorrect username or password \n\nPlease try again");

}
}

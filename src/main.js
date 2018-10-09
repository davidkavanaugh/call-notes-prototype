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

function reset(){
  document.getElementById("form").reset();
  document.getElementById("additional-comments").innerHTML="";
}

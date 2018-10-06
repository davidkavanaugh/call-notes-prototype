new ClipboardJS('.copybtn');

function copyToClipboard(){
  let maintextbox = document.getElementById("main-textbox").textContent;
  let additionalcomments = document.getElementById("additional-comments").textContent;

  let tocopy = maintextbox+'\n'+additionalcomments;

  alert(tocopy);
  };

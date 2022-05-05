
let li = document.getElementsByTagName("li");

for (let i=0; i < li.length; i++) {
  let spanX = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  spanX.className = "sKlik";
  spanX.appendChild(txt);
  li[i].appendChild(spanX);
  }
//-------------------------------------------------------
  
  let spanClass = document.getElementsByClassName("sKlik");

  for (let i = 0; i < spanClass.length; i++) {
    spanClass[i].onclick = function() {
      spanClass = this.parentElement;
      spanClass.style.display = "none";
    }
  }
//-------------------------------------------------------

function newElement() {
  let userText = document.getElementById("userText").value;
  let li = document.createElement("li");
  let text = document.createTextNode(userText);
  li.appendChild(text);
  if (userText === "") {
    document.getElementById("empty").innerHTML = "Morate da ubacite tekst...";
  } else {
    document.getElementById("myUl").appendChild(li);
    document.getElementById("empty").innerHTML = "";
  }
  document.getElementById("userText").value = "";

  let spanX = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  spanX.className ="sKlik";
  spanX.appendChild(txt);
  li.appendChild(spanX);

  let spanClass = document.getElementsByClassName("sKlik");
  for(let i=0; i < spanClass.length; i++) {
    spanClass[i].onclick = function() {
      let spanClass = this.parentElement;
      spanClass.style.display = "none";
    }
  }
}

const listInput = document.getElementById("userinput");
const listDisplay = document.getElementById("listBox");

//adds a 'close' button to the list item
function addCloseButton(){
  var nodeList = document.getElementsByTagName("LI");
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  for (let i = 0; i < nodeList.length; i++){
    if (nodeList[i].contains(span)){
      //do nothing
    }else {
      nodeList[i].appendChild(span);
    }
  }
}

//if user hits Enter, invokes addToList()
document.getElementById("userinput").onkeydown = function(ev){
  if(ev.keyCode == 13){
    //prevents Enter from refreshing page
    event.preventDefault();
    
    addToList();
  }
}

var close = document.getElementsByClassName("close");
//adds the user input into the list
function addToList() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("userinput").value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
  document.getElementById("listBox").appendChild(li);
  addCloseButton();
  clearDisplay();
//clears list item when close button is clicke
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//clears input box after input
function clearDisplay(){
  listInput.value = "";
}

//turns list item green and adds checkmark when clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
    event.target.classList.toggle('checked');
});







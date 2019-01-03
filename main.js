const listInput = document.getElementById("userinput");
const listDisplay = document.getElementById("listBox");

//if user hits Enter, adds input to list
document.getElementById("userinput").onkeydown = function(ev){
  if(ev.keyCode == 13){
    event.preventDefault();
    addToList();
  }
};

//adds the user input into the list
function addToList() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("userinput").value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
  document.getElementById("listBox").appendChild(li);
  clearDisplay(); 
}

//clears box after input
function clearDisplay(){
  listInput.value = "";
}

//turns item green and adds checkmark when clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
    event.target.classList.toggle('checked');
});




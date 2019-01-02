const list = [];
const listInput = document.getElementById("userinput");
const listDisplay = document.getElementById("listBox");

//adds input to the array, invokes buttonCreate
function addToList() {
  list.push(listInput.value);
  clearAndDisplay(); 
  createButton();
}

function createButton(){

  let checkBox = document.createElement("button");
  var checkBoxDiv = document.getElementById("listBox");
  checkBoxDiv.appendChild(checkBox);
}

function clearAndDisplay(){
  //clears box
  listInput.value = "";
  //clears listBox and adds everything inputted so far
  listDisplay.innerHTML = "";
  listDisplay.innerHTML += list.join("<br>");
  console.log(list);
}

function clearList(){
    list.length = 0;
    listDisplay.innerHTML = "";
}



let inputs = document.getElementsByTagName("input");
 for(let i=0; i<inputs.length; i++){
    inputs[i].className = "input-" + i ;
 }
var submitButton = document.getElementById("submitButton");
var firstName = document.getElementById("inputValue1");
var formSubmit = document.getElementById("formSubmit");
var inputValue2 = document.getElementById("inputValue2");
var input1Value = document.getElementById('inputValue1').value;

submitButton.addEventListener("click", submitClick);
formSubmit.addEventListener("submit", formSubmit);
inputValue2.addEventListener("focus", inputValue2);


function submitClick() {
   console.log('hello');
   alert('hello');
  
   // event.preventDefault();
   // href="https://www.youtube.com/watch?v=eZBTLsv2ktM";
}

function formSubmit(event) {
   event.preventDefault();
  
}

function inputValue2() {
   console.log('type the name first');
}
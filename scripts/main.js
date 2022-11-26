// -----------Var windows----------------------------------

let popup = document.getElementById("popup");
let warning = document.getElementById("warning");


/*--------------var sliders----------------------------*/

var slider = document.getElementById("volt");
var output = document.getElementById("txtVolt");
var numVolt = document.getElementById("numVolt");
var numVoltb = document.getElementById("numVoltb");
const sc = document.getElementById('indicadorA');

var sliderb = document.getElementById("rest");
var outputb = document.getElementById("txtRest");
var numRes = document.getElementById("numRes");
var numResb = document.getElementById("numResb");

var txtAmp = document.getElementById("txtAmp");

output.innerHTML = slider.value; // Display the default slider value
numVolt.innerHTML = slider.value;
numVoltb.innerHTML = slider.value;
txtAmp.innerHTML = (slider.value / ((sliderb.value*10)+10)).toFixed(4);
sc.style.transform = `rotate(${(slider.value*20)+60}deg)`;

outputb.innerHTML = (sliderb.value*10)+10; // Display the default slider value
numRes.innerHTML = outputb.innerHTML;
numResb.innerHTML = outputb.innerHTML;

slider.oninput = function() {
    output.innerHTML = this.value;
    numVolt.innerHTML = this.value;
    numVoltb.innerHTML = this.value;
    txtAmp.innerHTML = (slider.value / ((sliderb.value*10)+10)).toFixed(4);
    sc.style.transform = `rotate(${(slider.value*20)+60}deg)`;
}

sliderb.oninput = function() {
    outputb.innerHTML = ((this.value)*10)+10;
    numRes.innerHTML = ((this.value)*10)+10;
    numResb.innerHTML = outputb.innerHTML;
    txtAmp.innerHTML = (slider.value / ((sliderb.value*10)+10)).toFixed(4);
}

/* ---------------var form ---------------------*/


const scriptURL = 'https://script.google.com/macros/s/AKfycbzW-1FJSPnYcJDl0_LW4VaTIi_pNZfNlVvqZ9BEOTPVz6kIZRGe2yBa-OAl6GlwJ6hvDA/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => openPopup())
    .catch(error => openwarning())
    //  .then(response => console.log('Success!', response))
    //  .catch(error => console.error('Error!', error.message))
    //.catch(error => window.alert("message Error"))
  })

function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
  document.getElementById("myForm").reset();
}

function openwarning(){
  warning.classList.add("open-warning");
}
function closewarning(){
  warning.classList.remove("open-warning");
}




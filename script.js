var celcius = document.getElementById("celcius-input")
var farenheit = document.getElementById("farenheit-input")
var kelvin = document.getElementById("kelvin-input")

var clear = document.getElementById("clr-btn")

function fromCelcius() {
    var c = parseFloat(celcius.value)
    var f = (c * 1.8) + 32
    var k = c + 273.15

    // console.log(c,f,k)

    // celcius.value = c.round(3);
    farenheit.value = f.round(3);
    kelvin.value = k.round(3);
}
function fromFarenheit() {
    var f = parseFloat(farenheit.value)
    var c = ((f-32)*5)/9
    var k = c + 273.15

    // console.log(c,f,k)

    celcius.value = c.round(3);
    // farenheit.value = f.round(3);
    kelvin.value = k.round(3);
}
function fromKelvin() {
    var k = parseFloat(kelvin.value)
    var c = k - 273.15
    var f = (k - 273.15) * 9/5 + 32

    // console.log(c,f,k)

    celcius.value = c.round(3);
    farenheit.value = f.round(3);
    // kelvin.value = k.round(3);
}

function clearAll() {
    celcius.value = "";
    farenheit.value = "";
    kelvin.value = "";
}

Number.prototype.round = function(n) {
    const d = Math.pow(10, n);
    return Math.round((this + Number.EPSILON) * d) / d;
  }

celcius.addEventListener("input", fromCelcius)
farenheit.addEventListener("input", fromFarenheit)
kelvin.addEventListener("input", fromKelvin)
clear.addEventListener("click", clearAll)
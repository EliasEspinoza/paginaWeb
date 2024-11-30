function celsius_fahrenheit(c) {
    return (c * 9 / 5) + 32;
}
function celsius_kelvin(c) {
    return c + 273.15;
}
function celsius_rankine(c) {
    return (c + 273.15) * 9 / 5;
}

function fahrenheit_celsius(f) {
    return (f - 32) * 5 / 9;
}
function fahrenheit_kelvin(f) {
    return (f + 459.67) * 5 / 9;
}
function fahrenheit_rankine(f) {
    return f + 459.67;
}

function kelvin_celsius(k) {
    return k - 273.15;
}
function kelvin_fahrenheit(k) {
    return (k * 9 / 5) - 459.67;
}
function kelvin_rankine(k) {
    return k * 9 / 5;
}

function rankine_celsius(r) {
    return (r - 491.67) * 5 / 9;
}
function rankine_fahrenheit(r) {
    return r - 459.67;
}
function rankine_kelvin(r) {
    return r * 5 / 9;
}

function Celsius_to_Fahrenheit() {
    var grad = parseFloat(document.getElementById("grados").value);
    var resultado = celsius_fahrenheit(grad); 
    document.getElementById("resultado").textContent = resultado.toFixed(2) + "° Fahrenheit";
}

function Celsius_to_Kelvin() {
    var grad = parseFloat(document.getElementById("grados").value);
    var resultado = celsius_kelvin(grad); 
    document.getElementById("resultado").textContent = resultado.toFixed(2) + "° Kelvin";
}

function Celsius_to_Rankine() {
    var grad = parseFloat(document.getElementById("grados").value);
    var resultado = celsius_rankine(grad); 
    document.getElementById("resultado").textContent = resultado.toFixed(2) + "° Rankine";
}

function Fahrenheit_to_Celsius() {
    var grad = parseFloat(document.getElementById("grados").value);
    var resultado = fahrenheit_celsius(grad); 
    document.getElementById("resultado").textContent = resultado.toFixed(2) + "° Celsius";
}

function Fahrenheit_to_Kelvin() {
    var grad = parseFloat(document.getElementById("grados").value);
    var resultado = fahrenheit_kelvin(grad); 
    document.getElementById("resultado").textContent = resultado.toFixed(2) + "° Kelvin";
}

function Fahrenheit_to_Rankine() {
    var grad = parseFloat(document.getElementById("grados").value);
    var resultado = fahrenheit_rankine(grad); 
    document.getElementById("resultado").textContent = resultado.toFixed(2) + "° Rankine";
}

function Kelvin_to_Celsius() {
    var grad = parseFloat(document.getElementById("grados").value);
    var resultado = kelvin_celsius(grad); 
    document.getElementById("resultado").textContent = resultado.toFixed(2) + "° Celsius";
}

function Kelvin_to_Fahrenheit() {
    var grad = parseFloat(document.getElementById("grados").value);
    var resultado = kelvin_fahrenheit(grad); 
    document.getElementById("resultado").textContent = resultado.toFixed(2) + "° Fahrenheit";
}

function Kelvin_to_Rankine() {
    var grad = parseFloat(document.getElementById("grados").value);
    var resultado = kelvin_rankine(grad); 
    document.getElementById("resultado").textContent = resultado.toFixed(2) + "° Rankine";
}

function Rankine_to_Celsius() {
    var grad = parseFloat(document.getElementById("grados").value);
    var resultado = rankine_celsius(grad); 
    document.getElementById("resultado").textContent = resultado.toFixed(2) + "° Celsius";
}

function Rankine_to_Fahrenheit() {
    var grad = parseFloat(document.getElementById("grados").value);
    var resultado = rankine_fahrenheit(grad); 
    document.getElementById("resultado").textContent = resultado.toFixed(2) + "° Fahrenheit";
}

function Rankine_to_Kelvin() {
    var grad = parseFloat(document.getElementById("grados").value);
    var resultado = rankine_kelvin(grad); 
    document.getElementById("resultado").textContent = resultado.toFixed(2) + "° Kelvin";
}

const resultado = document.getElementById("resultado");
resultado.innerText = resultado.getAttribute("data-placeholder");

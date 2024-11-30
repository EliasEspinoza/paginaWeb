function calculateIMC(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    if(peso !== '' && altura !== ''){
        var bmi = peso / ((altura / 100)** 2);
        var result = document.getElementById('result');
        result.innerHTML = 'Tu IMC es: '+ bmi.toFixed(2);
        
        if(bmi < 18.5){
            changeColor('--codigo', '#009FE2');
            result.innerHTML += ', Peso Bajo';
        }
        else if(18.5 < bmi && bmi < 24.9){
            changeColor('--codigo', '#94C120');
            result.innerHTML += ', Normal';
        }
        else if(25 < bmi && bmi < 29.9){
            changeColor('--codigo', '#F7C332');
            result.innerHTML += ', Sobrepeso';
        }
        else if(30 < bmi && bmi < 34.9){
            changeColor('--codigo', '#E89B11');
            result.innerHTML += ', Obesidad I';
        }
        else if(35 < bmi && bmi < 39.9){
            changeColor('--codigo', '#EA5B0C');
            result.innerHTML += ', Obesidad II';
        }
        else if(40 < bmi){
            changeColor('--codigo', '#E40613');
            result.innerHTML += ', Obesidad III';
        }
    }
}

function changeColor(variableName, value) {
    document.documentElement.style.setProperty(variableName, value);
}
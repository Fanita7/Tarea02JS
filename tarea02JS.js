/*
Instrucciones:

Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
45.
Grados Kelvin: 318.15
Grados Fahrenheit: 113. 
 14.
Grados Kelvin: 287.15
Grados Fahrenheit: 57.2. 

*/

let grados = prompt ("Dime una temperatura en grados Celcius y te la convierto a Fahrenheit y Kelvin");

if (!isNaN(grados) && grados.trim() !== ""){
    grados = parseFloat(grados);

    function calcFahr(grados){
    
        return `Los grados Celcius ${grados} a Fahrenheit son: ${(grados* 9 / 5) + 32}`;
    }

    function calcKelvin(grados){
        return `Los grados Celcius ${grados} a Kelvin son: ${(grados) + 273.15}`;
    }

    console.log(calcKelvin(grados));
    console.log(calcFahr(grados));
    
} else {
    console.log("entrada incorrecta, por favor escribe un número");
    }


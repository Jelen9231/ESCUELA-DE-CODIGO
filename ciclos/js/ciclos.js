// console.log("hola mundo");
// console.log("hola mundo");
// console.log("hola mundo");
// console.log("hola mundo");
// console.log("hola mundo");

// MIENTRAS
// SINTAXIS
// while (//evaluar)
// efectuar acciones

// inicializando una variable. INDICE
// var i = 0;
// while (i < 850) {
//     console.log("Escuela de Código" + i);

//     i = i + 1;

// }

// HACER MIENTRAS
// var i = 0;
// do {
//     i += 1;
//     console.log("Elena" + i);
// }

// while (i < 8);

// variable booleana (si o no o verdadero o falso)
// funcion de ciclo
var salir = true;
// asignando el resultado
// arreglo conjunto de datos en comun que comparten caracteristicas(letras, numeros, etc.)
var numeros = [];
// ciclo while que permita mostrar un promp indefinido


// <!-- ARQUITECTURA -->
// <!-- CILCOS (CARPETA) -->
//         INDEX.HTML
//         CSS(CARPETA)
//             STYLE.CSS
//         js (CARPETA)
//         CICLO.JS

console.log("probando");
      
function Calcular(){
   console.log("entra");
//     FUNCIÓN DEL CILO
  	var salir = true;
//         ASIGNANDO EL RESULTADO 
    var resultado;
//         ASIGNO MENSAJE
    var mensaje;
//         DECLAREAR EL CICLO
    while(salir){
      
      var opc = prompt("Ingresa una opcion...\n\n 1)Suma \n 2)Resta \n 3)Multiplicación \n 4)División \n 5) Salir \n\n");
      if(opc == 1){
         console.log("suma");
          var num1 = parseInt(prompt("Ingresa el primer Número"));
          var num2 = parseInt(prompt("Ingresa el segundo Número"));
        	resultado = num1 + num2;
        	// mensaje="la suma de " + num1 + " + " + num2 + " es : ";
         alert("la suma de " + num1 + " + " + num2 + " es : "+ resultado);
        document.getElementById('resultado').innerHTML = mensaje + resultado;
      }
      if(opc == 2){
         console.log("resta");
        var num1 = parseInt(prompt("Ingresa el primer Número"));
        var num2 = parseInt(prompt("Ingresa el segundo Número"));

        resultado = num1 - num2;
        // mensaje="la resta de " + num1 + " - " + num2 + " es : ";
        console.log(resultado);

        // document.getElementById('resultado').innerHTML = mensaje + resultado;
        alert("la resta de " + num1 + " - " + num2 + " es : "+ resultado);
      }
       if(opc == 3){
         console.log("multi");
        var num1 = parseInt(prompt("Ingresa el primer Número"));
        var num2 = parseInt(prompt("Ingresa el segundo Número"));

        resultado = num1 * num2;
        // mensaje="la multiplicación de " + num1 + " X " + num2 + " es : ";
        console.log(resultado);

        // document.getElementById('resultado').innerHTML = mensaje + resultado;
        alert("la multiplicación de " + num1 + " X " + num2 + " es : "+ resultado);
       }
      if(opc == 4){
        console.log("division");
          var num1 = parseInt(prompt("Ingresa el primer Número"));
          var num2 = parseInt(prompt("Ingresa el segundo Número"));

          resultado = num1 / num2;
          // mensaje="la división de " + num1 + " / " + num2 + " es : ";
          console.log(resultado);

          // document.getElementById('resultado').innerHTML = mensaje + resultado;
          alert("la división de " + num1 + " / " + num2 + " es : "+ resultado);
      }
      if(opc == 5){
        console.log("salir");
        salir = false;
        alert("Salio del ciclo...");
      }
//       operador logíco diferente a !=
      if(opc != 1 & opc != 2 & opc !=3 & opc !=4 & opc !=5 ){
        alert("OPCION NO VALIDA INTENTA DE NUEVO ...")
      }
      
    }
}
      

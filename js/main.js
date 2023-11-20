//Funcion para poner cabecera del ejercicio
function cabecera(ejercicio) {
  console.log(`Resolución del ejercicio ${ejercicio}:`);
}

//Funcion para imprimir linea para separar los ejercicios
function imprimirLinea() {
  console.log(
    "--------------------------------------------------------------------------------------------------------"
  );
}

//Ejercicio 1: Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
cabecera(1);
function par_Impar(numero) {
  if (numero % 2 == 0) {
    console.log(`El numero ${numero} es par`);
  } else {
    console.log(`El numero ${numero} es impar`);
  }
}

par_Impar(1);
par_Impar(2);
par_Impar(3);
par_Impar(4);

imprimirLinea();

//Ejercicio 2:Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
cabecera(2);

function mayor_Menor(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor al número ${numero2}`);
  } else if (numero2 > numero1) {
    console.log(`El número ${numero2} es mayor al número ${numero1}`);
  } else {
    console.log("Los números recibidos son iguales.");
  }
}

mayor_Menor(1, 2);
mayor_Menor(5, 3);
mayor_Menor(10, 10);

imprimirLinea();

//Ejercicio 3: Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

cabecera(3);

function multiploDeCinco(numero) {
  if (numero % 5 == 0) {
    console.log(`El número ${numero} es multiplo de 5`);
  } else {
    console.log(`El número ${numero} no es multiplo de 5`);
  }
}

multiploDeCinco(1);
multiploDeCinco(5);
multiploDeCinco(10);
multiploDeCinco(4);

imprimirLinea();

//Ejercicio 4: Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

cabecera(4);

function imprimirNumeros(numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(`Número : ${i}`);
  }
}

imprimirNumeros(5);

imprimirLinea();

//Ejercicio 5: Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
cabecera(5);

function imprimirPalabra(palabra, numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(`${palabra} ---> Cantidad de veces impresa: ${i} `);
  }
}

imprimirPalabra("messi", 5);

imprimirLinea();

//Ejercicio 6: Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
cabecera(6);

function imprimirArray(numeros) {
  console.log("Los valores del array son:");
  for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
  }
}

imprimirArray([1, 2, 3, 4, 5, 6, 7, 8]);

imprimirLinea();

//Ejercicio 7: Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

cabecera(7);

function noImprimirPosicionCinco(array) {
 console.log("El array sin la posicion 5 es:")
  for (let i = 0; i < array.length; i++) {
    if (array[i] != array[4]) {
      console.log(array[i]);
    }
  }
}

noImprimirPosicionCinco([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

imprimirLinea();

//Ejercicio 8: Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
cabecera(8);

function multiplicarArray(array,numero) {
    let multiplicacion = 0;
    console.log("Los valores del array recibido quedan multiplicados por el numero recibido de la siguiente manera:")
    for (let i = 0; i < array.length; i++) {
        multiplicacion = (array[i] * numero);
        console.log(multiplicacion)
    }
}

multiplicarArray([1,2,3,4], 2);
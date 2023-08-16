
/* ¿Qué devuelven estos códigos?
En este ejercicio deberás pensar qué devuelven estos códigos sin probarlos en la
consola.
1. let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

//undefined pues numbers[5] esta fuera del limite

2. let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
console.log(grupoDeAmigos[5]) 

// devuelve "Ironman" que esta en el indice 5 (se empieza desde 0)
*/

/* Colecciones de películas (y más...)
El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
Para esto, deberás:
1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente.
2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().
3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
Importante: las películas animadas también deberían convertirse a mayúsculas.

4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
array de películas animadas es un videojuego. Ahora tenés que editar el código y
modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.

5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];

2

const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Te piden crear una función que compare las calificaciones e indique si son iguales
o diferentes. Te confirman que están en el orden adecuado y que solo traen
valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden en
orden al del array resultante de combinar películas con películas animadas. Es
decir, el primer elemento del array de películas general corresponde al primer
elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de las
funciones y testear su correcto funcionamiento.
Si llegaste hasta este punto y está todo bien, el tech leader del equipo debe estar
extremadamente alegre con tu trabajo y desempeño. ¡Buen trabajo!
 */

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

console.log(peliculas[2]);

const arrayToUpper = (arr) =>{
    return arr.map( (pelicula) => pelicula.toUpperCase());
}
peliculas = arrayToUpper(peliculas);
console.log(peliculas);

let peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

const unirArrays = (arr1, arr2) => {
    return [...arr1,...arr2];
}

peliculas2 = arrayToUpper(peliculas2);

eliminado = peliculas2.pop();

console.log(unirArrays(peliculas,peliculas2));
console.log(eliminado);


const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararScores(scores1,scores2){
    
    for (let i=0; i<scores1.length;i++){
        if ((scores1[i] !== scores2[i])){
            console.log("Los puntajes son distintos")
        }else{
            console.log("Los puntajes son iguales")
        }
    }
}

compararScores(asiaScores,euroScores);


/* Extra bonus
Si te quedaste con ganas de trabajar un poco más, te dejamos unos ejercicios extras
para que puedas practicar más sobre arrays. A partir de acá, los ejercicios pueden
empezar a escalar en dificultad tanto estructural como lógica. Recordá que siempre
podés revisar el material visto. Si no encontrás algo, podés consultar con tus
compañeros, así como también googlear la información que creas necesaria
(recomendamos siempre documentaciones oficiales como la de MDN Web Docs, o foros
reconocidos como Stack Overflow).
PD: si bien esos sitios están en español, tené en cuenta que la mayor cantidad de
información va a estar en inglés.

Array inverso
En este ejercicio deberás crear una función que devuelva un array con sus elementos
invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta
el orden de sus elementos.

1. Creá la función imprimirInverso que tome un array como argumento y que
imprima en la consola cada elemento en orden inverso (no tenés que invertir el
array).
2. Creá la función inversor que tome un array como argumento y devuelva uno
nuevo invertido.

 */

function imprimirInverso(arr){
    for(let i = arr.length-1; i>=0;i--)
    {
        console.log(arr[i]);
    }
}

let datosPrueba =[1,2,3,4,5];

imprimirInverso(datosPrueba);

function inversor(arr){
    return arr.reverse();
}

console.log(inversor(datosPrueba));

/* sumaArray()

En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:
● sumArray([1,2,3]) // 6
● sumArray([10, 3, 10]) // 23
● sumArray([-5,100, 19]) // 114 */
function sumArray(arr){
    if(arr.length!=3){
        return console.log("Ingrese un array valido (3 elementos)")
    }
    let resultado = 0;
    for(let i =0;i<3;i++){
        resultado += arr[i];
    }
    return resultado;
}

console.log(sumArray([1,2,3])) // 6
console.log(sumArray([10, 3, 10])) // 23
console.log(sumArray([-5,100, 19])) // 114


/* Simulación Array.join()
En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
strings de 4 elementos y simule el comportamiento del método Array.join().
Importante: no podés usar el método Array.join() original.
Ejemplo:
● join(["h","o","l","a"]) debe retornar el string "hola".
● join(["c","h","a,"u"]) debe retornar el string "chau". */

function join(arr){
    let result = "";
    for(let i=0; i< arr.length;i++){
        result+= arr[i];
    }
    return result;
}
console.log(join(["h","o","l","a"])); //debe retornar el string "hola".
console.log(join(["c","h","a","u"]) );//debe retornar el string "chau".


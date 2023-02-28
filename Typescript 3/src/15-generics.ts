import { isExternalModuleNameRelative } from 'typescript';

// Cuando paso un valor como parámetro, es preciso indicar el tipo de dato del mismo.
// esto puede hacerse con union types, como ya vimos
// pero implicaría definir todos los tipos de datos posibles que puedo recibir:

function getValue1(value: number | string | boolean) {
  return value;
}

// otro modo, es definiendo el tipo de dato unknown
// pero sabemos que unknown no nos infiere el tipo de dato, por lo tanto
// no estamos aprovechando al máximo la capacidad de TS.

function getValue2(value: unknown) {
  return value;
}
//la manera correcta de hacerlo es mediante los genéricos.

//Genéricos:
//es un nobre genérico que representa un tipo de dato creado por el desarrollador
//este tipo, permite que TS capture el tipo de dato
//que el desarrollador está usando en cada caso

// se definen con la siguente sintaxis:
//            tipo de dato creado
//                    |
function getValue3<myType>(value: myType) {
  //                                 |
  //                      lo asigno a mi parámetro
  return value;
}

//de este modo, ahora TS reconocerá el tipo de dato
//en el momento que yo le pase un parámetro
//inferirá el tipo y me mostrará los métodos que puedo utilizar sobre él.

//descomentá linea a línea el siguente código
//y agregale un punto al final de cada método para ver las opciones.
//ejemplo: getValue3(12) --> getValue3(12).

// getValue3(12)
// getValue3('HOLA')
// getValue3([1,2,3])

//ves como los métodos que aparecen son solo los permitidos en el tipo correspondiente?

//si queremos que nuestro tipado sea más seguro, aún podemos pasar el tipo de dato
//en el momento de la ejecución:

getValue3<number>(12);
getValue3<string>('HOLA');
getValue3<number[]>([1, 2, 3]);

//DATO: los genéricos suelen representarse con la letra T.

function getValue4<T>(value: T) {
  return value;
}

getValue4(10);

//veamos el archivo /app/services/base-http.service.ts
//para ver como implementar genéricos en peticiones http

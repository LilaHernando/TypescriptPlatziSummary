// ¿Qué es class?
// JavaScript es un lenguaje orientado a objetos, pero está basado en prototipos.
// Las clases son una sintaxis más amigable para trabajar con prototipos, las clases internamente son prototipos.
// La utilizamos para construir instancias de objetos, es como un molde para crear cosas.
// Buenas prácticas
// Es necesario inicializar las propiedades que coloquemos en nuestra clase, ya sea por fuera o dentro de nuestro constructor.

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2023, 1, 23);
console.log(myDate);

//los accesos de TS son publicos por defecto, es decir
//todos los valores pertenecientes a la clase pueden ser modificados
//por lo que sin problemas yo puedo hacer lo siguente:

console.log(myDate.day); //23
myDate.day = 3; // puedo acceder a los valores y modificarlos sin problemas.
console.log(myDate.day); //3

//en el archivo 03-access.ts veremos otro tipo de acceso que nos provee TS

// Getters (accessor)
// Con get podemos acceder a una propiedad de acceso privado, pero no modificarlos.

export class MyDate {
  constructor(
    public year: number = 1998,
    public month: number = 5,
    private _day: number = 31
  ) {}

  // se definen como un nuevo método, pero anteponiendo la palabra 'get'
  //al nombre de la variable que se quiere acceder, en este caso day.

  get day() {
    return this._day;
  }

  //generalmente, el getter y la variable llevan el mismo nombre
  //(get day accede a la variable day)
  //por lo que ahora es necesario agregar un _ antes de la definición de la variable
  //para poder identificar el getter de la variable (línea 8)
}

//Al momento de utilizarlos, no se necesitan los parentesis de ejecución.
//se accede de la misma manera que a las propiedades.
const myDate = new MyDate();
console.log(myDate.day);

// console.log(myDate.isLeapYear);

//getter para calcular año bisiesto (agregar a línea 17 en caso de ser necesario)

// get isLeapYear() {
//   if (this.year % 400 === 0) return true;
//   if (this.year % 100 === 0) return false;
//   return this.year % 4 === 0;
// }

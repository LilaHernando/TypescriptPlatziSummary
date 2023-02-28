//Private  Public Access

//Como vimos en el archivo anterior, en caso de no recibir ningun indicador de acceso
//TS define con acceso publico a todas nuestras propiedades,
//permitiendo tanto leerlas como modificarlas sin problemas.

//con private podemos proteger nuestras propiedades (ver línea 58)
export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  //private tambien puede usarse con métodos.
  //en momentos donde necesite definir un método util para la clase
  //pero que no sea necesario utilizarlo por fuera de nuestra clase

  //en el siguente método, evaluaremos los digitos de nuestro dia y nuestro mes
  //si estos tiene un solo dígito ejemplo día 9 del mes 3 (9/3)
  //nuestro formato ahora será (09/03)
  //es necesario acceder a este metodo desde fuera? No.
  //por eso lo declaramos como private, ya que lo que ejecutaremos desde fuera será
  //el método printFormat.

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  //Ahora agregamos la ejecución de addPadding en printFormat (línea 18 y 19)
  //para que al imprimir el formato tenga en cuenta estas condiciones
}

const myDate = new MyDate(2023, 2, 23);
//De esta manera, no se me permite ingresar a la propiedad days declarada como private.
//console.log(myDate.day); // --> Descomentar para ver error
//myDate.day = 3;          // --> Descomentar para ver error

//solo puedo interactuar con esa propiedad mediante los métodos definidos en mi clase
//asegurandonos que solo funcione como nosotros esperamos.

console.log(myDate.printFormat()); //23/2/2023
myDate.add(3, 'days');
console.log(myDate.printFormat()); //26/2/2023
myDate.add(1, 'months');
console.log(myDate.printFormat()); //26/3/2023

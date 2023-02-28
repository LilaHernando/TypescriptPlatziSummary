// Setters (mutator)
// Con set podemos modificar a una propiedad de acceso privado.
//es un método void, no retorna ningun valor.

//los setters permiten no solo modificar la propiedad
//sino tambien agregar ciertas reglas que permiten un mayor control sobre esta.

export class MyDate {
  constructor(
    public year: number = 1998,
    private _month: number = 5,
    private day: number = 31
  ) {}

  get month() {
    return this._month;
  }
  //si mi variable month tiene un acceso público, yo podria directamente reasignarle
  //un nuevo valor
  // myDate.month = 78
  //pero sabemos que solo existen 12 meses, por lo que definir el acceso
  //a traves de un setter, nos permite evaluar si el nuevo dato es válido.

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('please insert a valid month');
    }
  }
}

const myDate = new MyDate();
console.log(myDate.month); //5 (getter línea 15)
myDate.month = 4; //Modificamos el valor de _month (setter línea 24)
console.log(myDate.month); //4 (getter línea 15)
myDate.month = 78; // please insert a valid month (Error del setter linea 28)

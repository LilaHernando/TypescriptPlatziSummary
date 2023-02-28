//TS permite reducir el código al momento de definir nuestro constructor.
//comprende que los parámentros que envie en el constructor
//serán las propiedades que tenga mi clase.
//puedo tambien inicializar el constructor con valores por defecto
// y definir los accesos dentro del mismo.

//--------------------------------- SINTAXIS ANTERIOR ---------------------------------

export class MyDate1 {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}
//--------------------------------- SINTAXIS POSTERIOR ---------------------------------
export class MyDate {
  constructor(
    public year: number = 1998, //el acceso por defecto aqui NO FUNCIONA.
    public month: number = 5, //es necesario aclarar por tanto el publico como el privado
    private day: number = 31
  ) {}

  //------------------------------- RESTO DE LA CLASE ----------------------------------

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
  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
}

const myDate1 = new MyDate();
console.log(myDate1.printFormat()); // 31/05/1998 (valores por defecto)

const myDate2 = new MyDate(2022);
console.log(myDate2.printFormat()); // 31/05/2022 (valores por defecto + año linea 58)

const myDate3 = new MyDate(2022, 1, 1);
console.log(myDate3.printFormat()); // 01/01/2022 (valores por parámetro)

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  //creamos un método para imprimir el formato
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  //creamos un método para agregar dias, meses o años a la fecha base.
  //podemo usar los literal types para informar que type solo puede ser alguna de esas 3 opciones.
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
}

const myDate = new MyDate(2023, 2, 23);
console.log(myDate.printFormat());
myDate.add(3, 'days');
console.log(myDate.printFormat()); //26/2/2023
myDate.add(1, 'months');
console.log(myDate.printFormat()); //26/3/2023

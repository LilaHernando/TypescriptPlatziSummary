//Protected
//De la misma manera que private nos permite utilizar propiedades
//dentro de un contexto (por ejemplo una clase) pero no desde fuera, tampoco permite
//el acceso a variables privadas desde una clase heredada.

//para eso existe la palabra reservada Protected.
// protected es un modificador de acceso
// que permite que los atributos y métodos de la clase sean accesibles
// desde la misma clase y desde las clases que heredan de esta.

export class Animal {
  constructor(protected spicies: string) {}
  //cambiar protected por private para ver el error en líneas 38 y 39
  move() {
    return 'Moving along!';
  }

  family() {
    return `This animal is a ${this.spicies}`;
  }
}

//nadie va a poder modificar desde fuera de la clase mi propiedad spicies,
//pero las clases que extiendan de mi clase padre si podrán acceder a el.

export class Dog extends Animal {
  constructor(spicies: string, public name: string, public owner: string) {
    super(spicies);
  }

  bark(times: number) {
    for (let i = 0; i < times; i++) {
      return 'Woof!';
    }
  }

  changeMySpicies(newSpecies: string) {
    console.log(`im no longer a ${this.spicies}, im a ${newSpecies} now`);
    this.spicies = `${newSpecies}`;
  }
}

const dog1 = new Dog('Dog', 'Bobby', 'Andrew');

console.log(dog1);
console.log(dog1.changeMySpicies('Tiger'));
console.log(dog1);

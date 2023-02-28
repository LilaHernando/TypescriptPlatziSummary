//La herencia de clases
//heredan las propiedades y métodos de una clase a otra
//para evitar la redundancia de código en nuestro proyecto.

//supongamos que tenemos una clase Animal
//todos los animales comen y pertenecen a una especie, esos son atributos genéricos.
export class Animal {
  constructor(public spicies: string) {}

  move() {
    console.log('Moving along!');
  }

  species() {
    console.log(`This animal is a ${this.spicies}`);
  }
}

//si queremos crear una clase para perros
//sabemos que además de comer y pertenecer a una especie, los perros ladran.
//por lo que puedo extender una clase Dog de Animal.
//esta clase compartirá las caracteristicas generales de los animales (especie y moverse)
//pero tambien tendrá un nombre, podrá ladrar y tendrá un dueño.

export class Dog extends Animal {
  //para agregar una o mas propiedades a una clase que extiende de otra,
  //es necesario escribirlas en el constructor (accceso propName: dataType)
  //junto con las propiedades existentes en la clase padre (propName: dataType)
  //y finalmente llamar a 'super()' con las propiedades heredadas

  constructor(
    spicies: string, //clase heredada, no aclaro acceso
    public name: string, //nueva clase, acceso, nombre y tipo de dato
    public owner: string //nueva clase, acceso, nombre y tipo de dato
  ) {
    super(spicies); //clase heredada, la paso como parámetro a super.
  }

  bark(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('Woof!');
    }
  }

  //de la misma manera, si quiero agregar mas funcionalidades a un metodo que está definido
  //en la clase padre, es necesario definirlo nuevamente en la clase heredada
  //agregarle las nuevas funcionalidades y luego llamar a super con el metodo padre como parámetro
  move() {
    console.log('Mooving as a Dog');
    super.move();
  }
}

//ahora nuestra instancia de Dog puede realizar todo lo siguente:

const dog = new Dog('Dog', 'Bobby', 'Andrew');
console.log(dog.name); //Bobby
console.log(dog.owner); //Andrew
console.log(dog.move()); //Mooving as a Dog   Moving along!
console.log(dog.species()); //This animal is a Dog
console.log(dog.bark(3)); //Woof!  Woof!  Woof!

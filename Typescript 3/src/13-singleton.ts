// Singleton: constructor privado
// Singleton nos evita crear múltiples instancias de una misma clase.
// Esto es muy usado en Arquitectura de Software, ya que nos ayuda a ahorrar espacio en memoria.

export class MyService {
  //creamos una clase con la propiedad privada y estática instance
  //para evitar que sea modificada desde fuera
  //y poder acceder a esta propiedad sin crear una instancia
  private static instance: MyService | null = null;
  //creamos un constructor privado, para prohibir crear nuevas instancias de MyService mediante la sintaxis
  //const service1 = new MyService('firstService')
  private constructor(private name: string) {}

  getName() {
    return this.name; //método para acceder a la instancia en caso que exista
  }

  //creo un metodo para evaluar:
  //si mi propiedad instance tiene el valor de null
  //significa que ninguna instancia ha sido creada aún, por lo tanto creo mi primer instancia de MyService.
  //si instance tiene un valor, significa que ya ha sido creada una instancia de MyService, por lo tanto
  //el método me retorna esa instancia, evitando crear varias instancias de una misma clase.
  static create(name: string) {
    if (MyService.instance === null) {
      console.log('esto debe aparecer solo la primera vez');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

//al correr los siguentes prints, verás que la unica vez que se crea una instancia es la primera vez.
//en el resto de los llamados, solo se devuelve la misma instancia creada anteriormente.

const myService1 = MyService.create('service 1');
console.log(myService1.getName());
const myService2 = MyService.create('service 2');
console.log(myService2.getName());
const myService3 = MyService.create('service 3');
console.log(myService3.getName());

//Abstract
//otra palabra útil es abstract, esta nos permite definir clases abstractas.
//una clase abstracta es una clase a la que solo se puede acceder por herencias
//no sería posible crear una instancia de la clase padre directamente.

//en el proximo ejemplo, podriamos decir que la clase Driver solo se utilize
//cuando se quiera crear una nueva conexion a una base de datos.

abstract class Driver1 {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    //code
  }
  isConnected(name: string): boolean {
    return true;
  }
}
//lo siguente no sería posible, ya que abstract no lo permite:
// const errorDriver = new Driver1(); // --> descomentar para ver error

//forma correcta:

class PostgresDriver1 extends Driver1 {}
//ahora si es posible crear una instancia de Driver1 mediante herencia

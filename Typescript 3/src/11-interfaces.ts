// Las interfaces en clases funcionan como contratos,
// nos permiten definir tanto los atributos como los métodos obligatorios de una clase.
// Todos los atributos y métodos son públicos, dado que podrán aplicarse a todas las clases

//creemos una interface Driver para hacer conexiones a distintas bases de datos.
//al momento de hacer una conexion necesitamos obligatoriamente el nombre de la DB,
//la password y el puerto, a su vez, necesitamos un método que efectue la conexión en si.

interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  isConnected(name: string): boolean;
}
//Implements
//Implements es un contrato que nos dice que nuestra clase
//tiene que cumplir con ciertos parametros y metodos definidos en la interface

//ahora, si quiero crear una nueva clase para conectar una DB en Postgres,
//sabemos que necesitaríamos lo mismo que en nuestra interface Driver
//con la palabra clave implements, nuestro 'contrato' ahora nos exige completar.

//en el constructor, definimos nuestras propiedades de Driver
class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  connect(): void {
    //code
  }
  isConnected(): boolean {
    //code
    return true;
  }
}

import axios from 'axios';
//ya tenemos nuestra respuesta, ahora es momento de tiparla.
//Para eso es necesario crear las interfaces
//con la estructura de la respuesta que nos brinda la API (https://quicktype.io/)
//en este caso necesitamos dos, uno para productos y otro para categorías
//están en la carpeta models, por lo que es necesario importarlos.
import { Product } from './models/product.model';

let anyVar: any = 12;
let boolVar: boolean = anyVar;

//ya que tenemos la estructura que devuelve la petición, podemos tipar nuestra promesa
//porque sabemos con que condiciones tiene que cumplir esa respuesta:

(async () => {
  //de la siguente manera, si bien nuestra promesa es de tipo Promise<Product[]>
  //si nos fijamos el tipo de dato de la constante promise, sigue siendo any.

  // async function getProducts(): Promise<Product[]> {
  //   const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
  //   return promise.data;
  // }

  //lo ideal siempre es mantener el tipado lo más controlado posible,
  //por lo que lo correcto sería pasarle el tipo de dato directo a nuestra consulta

  async function getProducts() {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    //de esta manera, puedo acceder a los métodos de mi tipado desde dentro de la promesa
    data.map((item) => console.log(item.id));
    return data;
  }

  const products = await getProducts();
  console.log(products.map((item) => `${item.id} - ${item.title}`));
})();

//El último tipado que vimos es soportado por casi todas las librerias
//en caso de trabajar con un tipado que no lo soporta,
//la manera de hacerlo sería la siguiente:

// async function getProducts() {
//   const rta = await axios.ge('https://api.escuelajs.co/api/v1/products');
//   //de esta manera, puedo acceder a los métodos de mi tipado desde dentro de la promesa
//   const data = rta.data as Product[];
//   data.map((item) => console.log(item.id));
//   return data;
// }

import axios from 'axios';
import { apiUrl } from '../../api';
import { UpdateProductDto } from '../dtos/product.dto';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
// las clases también pueden recibir genéricos, para mandar el tipo de forma dinámica.
//                            genérico
//                                |
export class BaseHttpService1<TypeClass> {
  data: TypeClass[] = [];
}

//entonces yo puedo definir el tipo de dato de mi genérico en cada instancia.
//si necesito tipo de dato string:
const service = new BaseHttpService1<string>();
//si necesito tipo de dato number:
const service1 = new BaseHttpService1<number>();
//si necesito tipo de dato boolean:
const service2 = new BaseHttpService1<boolean>();
//---------------------------------------------------------------------------
//También puedo definir genéricos en mi clase para usarlo en métodos.
export class BaseHttpService<TypeClass> {
  constructor(protected url: string) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  //CUIDADO! los tipados se pisan entre sí, es decir que si yo defino un nuevo método
  //con un nuevo tipo de dato, el método tomará este tipo y no el que se le pasa
  //a la clase, por eso es importante nombrarlos distintos.

  //veamos un caso de ERROR:
  //en este caso, el TypeClass que recibe mi método no es el mismo que el TypeClass
  //que recibe mi clase de la línea 20.
  //-------------------------------------------------------------------
  // async update<TypeClass>(id: TypeClass, changes: unknown) {
  //   const { data } = await axios.put(`${this.url}/${id}}`, changes);
  //   return data;
  // }
  //-------------------------------------------------------------------
  //dado que podria confundirse, le pondremos ID y DTO a los tipos de datos del método
  //(ejecución en línea )
  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}}`, changes);
    return data;
  }
}

//una vez definida nuestra clase con sus genéricos
//imaginemos que queremos usar la misma base de peticiones asíncronas
//pero en una instancia queremos obtener los productos, sería asi:

(async () => {
  //usando la misma base, le paso Product como tipo de dato
  //para que cumpla con su estructura
  const url1 = `${apiUrl}/products`;
  const productsService = new BaseHttpService<Product>(url1);

  //ahora puedo hacer un get de productos
  const rta = await productsService.getAll();
  console.log('products', rta.length);

  //y un update de productos
  const rtaUpdate = await productsService.update<
    Product['id'],
    UpdateProductDto
  >(1, {
    title: 'asa',
    description: 'NEW DESCRIPTION',
  });

  console.log('updatedProduct', rtaUpdate);

  //usando la misma base, le paso Category como tipo de dato
  //para que cumpla con su estructura
  const url2 = `${apiUrl}/categories`;
  const categoryService = new BaseHttpService<Category>(url2);
  const rta1 = await categoryService.getAll();
  // console.log('categories', rta1.length);
})();

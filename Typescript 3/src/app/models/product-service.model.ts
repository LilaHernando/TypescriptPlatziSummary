import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from './product.model';

//en nuestra interface definimos todos los metodos necesarios para una consulta completa.

export interface ProductService {
  //cuando ejecute get, la respuesta será un array de tipo Product o una promesa
  //con un array de productos (dependiendo si lo implemento en mi petición a API o Memoria)
  getAll(): Product[] | Promise<Product[]>;
  //cuando ejecute update, debo enviarle el id (del mismo tipo que el id de Product)
  //y los nuevos cambios, recibo como respuesta un Product.
  //para recordar DTO's ver el archivo del siguente path:
  //Typescript 2/src/app/products/product.dto.ts
  update(
    id: Product['id'],
    changes: UpdateProductDto
  ): Product | Promise<Product>;
  //cuando ejecute create, debo enviarle el producto a crear mediante nuestro dto
  //y tendré como respuesta el producto creado
  create(dto: CreateProductDto): Product | Promise<Product>;
  //cuando ejecute findOne, debo enviarle un id del mismo tipo que el id de Product
  //y puedo recibir el producto si se encontró o undefined en caso de no existir
  findOne(
    id: Product['id']
  ): Product | undefined | Promise<Product | undefined>;
}
//volvamos al archivo product-http.service.ts

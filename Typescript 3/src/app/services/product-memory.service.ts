//en este momento, vamos a refactorizar código previamente escrito
//pasandolo de funciones a clases, en el functions.txt encontrarás el código viejo.
import { faker } from '@faker-js/faker';
import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  //MÉTODO getAll ES NUEVO, SE AGREGA EN LA SIGUENTE CLASE:
  //-----------------------------------------------------------------------
  getAll() {
    return this.products;
  }
  //-----------------------------------------------------------------------
  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),

      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      },
    };
    return this.add(newProduct);
  }
  //este metodo será privado ya que no podré agregar productos desde fuera
  //simplemente se agregarán al array al momento de su creación (linea 21)
  private add(product: Product) {
    this.products.push(product);
    return product;
  }

  update(id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };
    return this.products[index];
  }

  findOne(id: Product['id']) {
    return this.products.find((item) => item.id === id);
  }
}

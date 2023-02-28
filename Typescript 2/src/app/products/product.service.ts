import { Product } from './product.model';
import {
  CreateProductDto,
  updateProductDto,
  FindProductDto,
} from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto) => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: string, //si queremos tomar el tipo de dato de una manera dinamica podemos hacerlo asi: id: Product['id']
  changes: updateProductDto
): Product => {
  const index = products.findIndex((i) => i.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
};

export const findProducts = (dto: FindProductDto): Product[] => {
  //code
  return products;
};

// export const deleteProduct = (id: string, changes: Product) => {
//   //code
// };

import { Product } from './product.model';

export const typedProducts: Product[] = [];

export const addTypedProduct = (data: Product) => {
  typedProducts.push(data);
};

export const calcStock = (): number => {
  let total = 0;
  typedProducts.forEach((item) => {
    total += item.stock;
  });
  return total;
};

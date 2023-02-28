import { addTypedProduct, calcStock, typedProducts } from './product.service';

addTypedProduct({
  title: 'TypedProd 1',
  createdAt: new Date(),
  stock: 10,
});

addTypedProduct({
  title: 'TypedProd 2',
  createdAt: new Date(),
  stock: 11,
  size: 'XL',
});

const totalStock = calcStock();
console.log(totalStock);

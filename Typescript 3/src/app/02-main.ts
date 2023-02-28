//pongamos en uso las estructuras creadas anteriormente
import { ProductMemoryService } from './services/product-memory.service';

const productServise = new ProductMemoryService();

productServise.create({
  title: 'Producto 1',
  price: 100,
  description: 'bla bla bla',
  categoryId: 12,
  images: [],
});

const products = productServise.getAll();
const productId = products[0].id;

productServise.update(productId, {
  title: 'nombre cambiado',
});

const rta = productServise.findOne(productId);
console.log(rta);

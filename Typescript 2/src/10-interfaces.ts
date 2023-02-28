//Hasta el momento estuvimos trabajando con type cuando necesitabamos agrupar
//valores con ciertas caracteristicas predefinidas.

type Sizes = 'S' | 'M' | 'L' | 'XL';
type UserId = string | number;
type Product1 = {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
};

//ahora veremos que las interfaces nos brindan otro modo de resolver el cuerpo de Product.

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
}

//las interfaces solo se utilizan para definir un CONJUNTO.
//es por eso que para los casos de las primeras lineas utilizamos type.
//uno de los principales beneficios de interface es que se pueden extender,
//los types por otro lado, no pueden extenderse.

const products: Product[] = [];
products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 10,
  size: 'L',
});

const addProduct = (data: Product) => {
  products.push(data);
};

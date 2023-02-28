//Nuestras funciones pueden recibir objetos como argumentos.
//En TypeScript también podemos declarar el tipado de estos. Veamos un ejemplo:
(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };
  login({ email: 'lila@hot', password: 12345 });

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes; //parámetro opcional
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'Prod1',
    createdAt: new Date(),
    stock: 10,
    size: 'L',
  });
  console.log(products);

  //El código anterior puede simplificarse, declarando la estructura del objeto 'data' como un tipo de dato

  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  //ahora podemos tipar nuestro array de la línea 10, dejando que este solo admita objetos
  // con la estructura declarada en la línea 31.

  const typedProducts: Product[] = [];

  const addTypedProduct = (data: Product) => {
    typedProducts.push(data);
  };

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

  console.log(typedProducts);
})();

import axios from 'axios';
//cuando trabajas con promesas directas (promesas definidas con su clase Promise)
//tipar una promesa es bastante sencillo
//solo es necesario agregar <> con el tipo de dato correspondiente
//luego del llamado a la clase padre.

(async () => {
  function delay(time: number) {
    //ahora se que delay devuelve un boolean
    const promise = new Promise<boolean>((resolve) => {
      //esta promesa retorna un boolean
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }
  console.log('----'.repeat(10));
  const rta = await delay(3000); //rta almacena un boolean
  console.log(rta);

  //cuando trabajamos con peticiones asincronas a una API por ejemplo
  async function getProducts() {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
    return promise.data;
  }
  const products = await getProducts();
  console.log(products);
})();

//dentro de la carpeta app/01-main.ts veremos como tipar las respuestas de consultas http

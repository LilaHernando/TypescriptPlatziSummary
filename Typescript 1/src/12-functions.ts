//Las funciones son nativas de JavaScript y esencialmente funcionan igual en TypeScript.
//Sin embargo, este último, con su sistema de tipado, nos ayudará a llevar a cabo una implementación más segura:
//Podemos definir que los argumentos de la función tengan un determinado tipo de dato (o más de uno si se usa Union Types):

(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const producto1 = createProductToJson('¨P1', new Date(), 12, 'XL');
  console.log(producto1);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    // size: Sizes | undefined  (acá puedo jugar entre los valores declarados en Sizes o undefined,
    // pero SI O SI tengo que pasar alguno de esos valores como parámetro.)
    size?: Sizes
    //en cambio en esa notación tengo la posibilidad de no pasarle ningun parámetro,
    //tanto como pasarle los valores pertenecientes a Sizes.
    //cuando definamos argumentos opcionales en una función, estas deben ubicarse obligatoriamente al final.
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };
  const producto2 = createProductToJsonV2('¨P2', new Date(), 13);
  console.log(producto2);
})();

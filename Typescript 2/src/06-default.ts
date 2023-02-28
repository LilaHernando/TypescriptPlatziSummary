//Otra manera de implementar valores por defecto
//es agregando un valor en la declaración de los parámetros.
//automáticamente TS tomará que ese valor es opcional y en caso de no recibirlo
//como parámetro, tomará el valor que se pase luego del operador =
export const createProduct = (
  id: string | number,
  isNew: boolean = true, // si no hay isNew, este será true
  stock: number = 10 // si no hay stock, este será 10
) => {
  return {
    id,
    isNew: isNew,
    stock: stock,
  };
};

const p1 = createProduct(1, false, 12);
const p2 = createProduct(1);

console.log(p1); //{ id: 1, isNew: false, stock: 12 }
console.log(p2); //{ id: 1, isNew: true, stock: 10 }

//Objeto como parametro:
//Si tenemos un objeto como parametro y este necesita parametros por defecto es diferente a como se puede intuir:
export const createProductV2 = (data: {
  id: string | number;
  stock?: number; // Aqui no se puede definir un valor por defecto
  isNew?: boolean; // Aqui no se puede definir un valor por defecto
}) => {
  // Desestrcturamos data y aqui mismo asignamos los valores por defecto.
  const { id, stock = 0, isNew = true } = data;
  // Existen muchas formas de asignar parametros por defecto en un parametro de tipo objeto.
  return {
    id,
    stock,
    isNew,
  };
};

console.log(createProductV2({ id: 1, isNew: false })); // {id:1, stock: 0, isNew: true}
// De esta forma podemos asignar los parametros a gusto, sin ir en un orden.

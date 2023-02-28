//nullish coalescing:
// Cuando trabajamos con optional chaining podemos definir valores por defecto.
// es decir, si no se pasa ningun valor como parámetro, este tomara un valor preestablecido.
export const createProduct = (
  id: string | number,
  isNew?: boolean, // podemos tener o no tener isNew
  stock?: number // podemos tener o no tener stock
) => {
  return {
    id,
    isNew: isNew ?? true, // si no tenemos isNew, entonces isNew será true
    stock: stock ?? 10, // si no tenemos stock, entonces stock será 10
  };
};

const p1 = createProduct(1, false);
const p2 = createProduct(1, undefined, 12);

console.log(p1); //{ id: 1, isNew: false, stock: 10 }
console.log(p2); //{ id: 1, isNew: true, stock: 12 }

//en nuestro archivo default veremos otra manera de resolver los valores por defecto.

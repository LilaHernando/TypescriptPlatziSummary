//Unknown dice que la variable es desconocida, es similar a any.
//es la forma recomendable de trabajar para evitar any cuando sea posible.
//unknown exige verificaciones al contrario de any, que nos permite ejecutar
//cualquier código sin marcarnos error. Ejemplo:

let anyVar: any;
anyVar = 'hi';
anyVar = 1;
anyVar = true;
anyVar = [];
anyVar = {};
anyVar = undefined;
anyVar = null;

let isNew: boolean = anyVar; // permitido, anyVar puede ser de cualquier tipo, incluso boolean

anyVar.doSomething(); // permitido, aún siendo un método que no existe.
anyVar.toUpperCase(); // permitido

//---------------------- Unknown ----------------------

let unknownVar: unknown;
unknownVar = 'hi';
unknownVar = 1;
unknownVar = true;
unknownVar = [];
unknownVar = {};
unknownVar = undefined;
unknownVar = null;

//let isNewV2 : boolean = unknownVar; //denegado, es necesario hacer una verificación de tipo.
if (typeof unknownVar == 'boolean') {
  let isNewV2: boolean = unknownVar;
  console.log(isNewV2);
}
// unknownVar.toUpperCase(); //denegado, es necesario hacer una verificación de tipo.

if (typeof unknownVar == 'string') {
  unknownVar.toUpperCase();
  console.log(unknownVar);
} // permitido

// if (typeof unknownVar == 'string') { // denegado. doSomething() no pertenece a un método de strings.
//   unknownVar.doSomething();
// }

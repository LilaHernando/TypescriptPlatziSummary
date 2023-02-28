//El tipo de dato Never indica que un valor 'nunca va a suceder'
//es util para identificar, por ejemplo, funciones que caen en loops infinitos.
const endless = () => {
  while (true) {
    console.log('nunca parar de aprender');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('no match');
};

//en el siguiente conjunto de ejecuciones vemos como se ejecuta todo perfectamente
//hasta llegar a la línea 27, donde la funcion fail de tipo never genera un error.
//por lo que la línea 28 nunca se ejecutará-
console.log(example('Hola'));
console.log(example([1, 2, 3]));
console.log(example(1212));
console.log(example('Hola despues del fail'));

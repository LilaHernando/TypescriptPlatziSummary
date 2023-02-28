//Nos permite definir más de un tipo de dato a una variable, argumento de una función, etc.
(() => {
  let userId: string | number; // <--- union Types

  userId = 10;
  userId = '10';

  function helloUser(id: string | number) {
    console.log(`Hola usuario con el número de id ${id}`);
  }

  //Aquí indicamos que id y userId pueden ser de tipo string o number.

  //Como tratamos las variables cuyo tipo de dato desconocemos? como acceder a sus métodos?
  //si hacemos verificaciones utilizando Typeof, typescript definirá el tipo de dato de la variable
  //dependiendo de que verificación pase, dandonos acceso a todos sos métodos.

  function verification(id: string | number) {
    if (typeof id === 'string') {
      console.log(id);
    } else {
      console.log(id);
    }
  }
  verification('Hola');
  verification(10);
})();

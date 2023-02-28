(() => {
  let userId: string | number | boolean; // <--- union Types

  function verification(userId: string | number | boolean) {
    if (typeof userId === 'string') {
      console.log(userId);
    } else {
      console.log(userId);
    }
  }
  //en la funcion anterior estoy haciendo referencia al mismo userId, por lo que maneja los mismos tipos de datos.
  // Los Alias nos permiten darle un nombre a uno o varios tipos de datos en conjunto.
  // Un ejemplo de como se definen sería así:
  type UserID = string | boolean | number;
  //Ahora UserID lo podemos usar como si fuese un tipo de dato string, boolean o number
  //por lo que la funcion anteriór ahora quedaria asi:
  let usersId: UserID;
  function verification2(userId: UserID) {
    if (typeof userId === 'string') {
      console.log(userId);
    } else {
      console.log(userId);
    }
  }
  // También existen los tipos Literales (Literal Types)
  // gracias a esto podemos definir explícita y literalmente los posibles valores
  // que puede tomar nuestra variable. Por ejemplo:

  let shirtSize: 'S' | 'M' | 'L' | 'XL';

  shirtSize = 'M'; //CORRECTO
  shirtSize = 'S'; //CORRECTO
  //shirtSize = "qwrty"; //ERROR. No está en las opciones.
  //shirtSize = "SS"; //ERROR. Letra de más.
  //shirtSize = "m"; //ERROR. Está en minúscula.

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function yourSize(userSize: Sizes) {
    console.log(`Tu medida es ${userSize}`);
  }
})();

// ANY Es un tipo de dato exclusivo de TypeScript. Su traducción sería “cualquiera”.
// literalmente nos permite almacenar cualquier tipo de dato en una variable:
(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  //Se recomienda no usar este tipo de dato, pues se considera mala práctica.
  //La utilidad de any radica cuando se quiere migrar de a poco a TypeScript desde JavaScript,
  //ya que incrementalmente definiríamos el tipo de dato donde sea necesario sin romper nuestro programa de golpe.

  //Los casting en programación se utilizan para asegurarse que un dato es de un tipo en concreto.
  //pero no es un sistema de conversión como tal.

  //Casteo 1 (Aserción de tipo)
  myDynamicVar = 'HOLA';
  const otherString = (myDynamicVar as string).toLowerCase();

  //Casteo 2 (Aserción de tipo)
  myDynamicVar = 1212;
  const otherNumber = (<number>myDynamicVar).toFixed();
})();

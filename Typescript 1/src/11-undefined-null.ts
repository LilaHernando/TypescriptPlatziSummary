(() => {
  //En TypeScript, si no especificamos que va a ser null o undefined,
  //estos son inferidos como tipo any:

  let myVar = null; //Tipo any
  let otherVar = undefined; //Tipo any

  let myNull: null = null; // Tipo null
  let myUndefined: undefined = undefined; //Tipo undefined
  //Hay casos en la que queremos que una variable sea de tipo string o number
  //y que al inicializarlas sean de tipo null o undefined
  //para luego asignarles un valor del tipo de dato de los primeros mencionados.
  //En este contexto podríamos usar los Union Types:
  let myNumber: number | null = null;
  myNumber = 50;

  let myString: string | undefined = undefined;
  myString = 'Hola TypeScript';

  //Una vez definidas nuestas variables, es necesario condicionar su ejecución, ya que
  //su función cambia dependiendo de lo que contenga.
  //podemos hacerlo mediante un if, o un optional chaining (?)

  function IF(name: string | null) {
    let hello = 'Hola';
    if (name) {
      hello += name.toLocaleLowerCase();
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function OPTCHAIN(name: string | null) {
    let hello = 'hola';
    hello += name?.toLocaleLowerCase || 'nobody';
    console.log(hello);
  }
})();

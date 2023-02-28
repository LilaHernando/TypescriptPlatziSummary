//Static
//la palabra reservada static nos permite acceder a métodos o propiedades de una clase
//sin necesidad de crear una instancia de la misma.

//descomentar desde línea 5 a línea 11 para ver el error
// class MyMath {
//   PI = 3.14;
// }
// console.log(MyMath.PI) //no nos permite acceder directo desde la clase padre

// const math1 = new MyMath();
// console.log(math1.PI)        // --> manera correcta de hacerlo

//con Static
class MyMath {
  static PI = 3.14;
}
console.log(MyMath.PI); //podemos acceder sin generar una instancia de MyMath

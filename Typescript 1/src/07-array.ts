(() => {
  let prices = [1, 2, 3, 4, 1, 2, 3, 4, 'hola', true];
  // let prices: (string | number | boolean)[]
  let mixed: (number | string | boolean)[] = ['hola', true];
  mixed.push(12);
  console.log(mixed); //['hola', true, 12]
})();

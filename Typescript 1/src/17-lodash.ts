//El ecosistema de TypeScript ha creado unos módulos para agregar manualmente
//el tipado a las librerías que no tienen soporte de tipos.
import _ from 'lodash';

const data = [
  {
    username: 'Lila',
    role: 'admin',
  },
  {
    username: 'Adrian',
    role: 'seller',
  },
  {
    username: 'Miguel',
    role: 'seller',
  },
  {
    username: 'Santiago',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);

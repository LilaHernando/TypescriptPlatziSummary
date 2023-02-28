//La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array.
import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'LilaBergamini',
  role: ROLES.ADMIN,
};

//Si quiero evaluar el rol del usuario de esta manera, me tocaría hacer una funcion por cada roll posible.
export const checkRoleV1 = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

const rta1 = checkRoleV1();
console.log('checkRoleV1', rta1); //true, el usuario es ADMIN.

//Por lo que sería util pasar dos parametros a la funcion,
//y evaluar si alguno de los dos coincide con el rol de currentUser

export const checkRoleV2 = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  } else if (currentUser.role === role2) {
    return true;
  }
  return false;
};

const rta2 = checkRoleV2(ROLES.CUSTOMER, ROLES.SELLER);
console.log('checkRoleV2', rta2); //false, ni el role1 ni el role2 coinciden con ADMIN

//Que sucedería si no conozco la cantidad de argumentos que puedo necesitar?
//para esos casos existen los parametros rest.
//podemos avisarle a la funcion que todos los parametros que reciba debe almacenarlos en un array,
//lo que nos permite el acceso a métodos de arrays como el includes()

export const checkRoleV3 = (...roles: string[]) => {
  //el spread operator advierte que todos los parametros ingresados seran almacenados como elementos de un array llamado roles.
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta3 = checkRoleV3(ROLES.CUSTOMER, ROLES.SELLER, ROLES.ADMIN);
console.log('checkRoleV3', rta3); // true, el tercer parametro coincide.

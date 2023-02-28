//Los enums funcionan como listas en las que podemos agregar llaves y valores.
//Esto lo que nos permite es tener un set de opciones predefinidas, evitando pasar un argumento invalido,
//ya que solo vamos a tener las opciones dentro del enum. Estos se usan de la siguiente manera

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

//para acceder a mis opciones dentro del enum ROLES, primero debo llamar a ROLES y luego acceder a sus
//elementos con dot notation (Línea 20)
const lilaUser: User = {
  username: 'Lila',
  role: ROLES.ADMIN,
};

//en el archivo 01-camera.ts damos otro ejemplo.

//DTO's: Data Transfer Objects u Objeto de Transferencias de datos.

// Hay momentos particulares en los que nosotros no necesitamos de ciertos parámetros,
// por ejemplo, al momento de la creación de un objeto no necesitamos un id, ni su fecha
// de creación ni de actualización ya que estos son generados en la base de datos.
//los DTO's representan una copia exacta de la estructura inicial
//con las modificaciones que le especifiquemos, por ejemplo, que omita ciertos datos.

// Omit
// Con omit podemos almacenar en una interface la estructura original de nuestro modelo,
// omitiendo las propiedades que no necesitamos.
// En este ejemplo veremos como generar una interface para crear un producto

import { Product } from './product.model';
//Crear producto
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

//ahora tenemos una interface CreateProductDto que tiene todo lo mismo de product
//menos los atributos que omitimos
//mas el atributo que agreagamos

//Existe un constructor llamado Pick con la misma estructura que Omit,
//donde podemos elegir los campos que queremos utilizar
// type example1 = Pick<Product, 'color' | 'description'>;

//Actualizar producto
//cuando actualziamos un producto, de la misma manera que cuando lo creamos
//hay ciertos parametros que no deben poder modificarse
//es por eso que la dto de update, va a trabajar con un Partial de CreateProductDto
//y no con un partial de Product.
//Partial vuelve opcionales a todos los atributos de la estructura.
export interface updateProductDto extends Partial<CreateProductDto> {}
//el opuesto a Partial es Required, donde todos los atributos se vuelven obligatorios.
// type example2 = Partial<CreateProductDto>;
export interface FindProductDto
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}
//                                      Readonly
//aplicando Readonly a nuestro dto, nos aseguramos que todas las propiedades de
//FindProductDto sean de solo lectura, así mantenemos inmutables
//los parámetros de búsqueda enviados

//Si alguno de los parámetros es un array, es necesario asegurarnos de que este no puede
//ser modificado ni reasignado. para eso es necesario omitirlo del dto
//y dentro de la interface especificar los accesos.
//readonly tags: ReadonlyArray<string>
//de esta manera la propiedad de solo lectura 'tag' es un array de solo lectura de strings

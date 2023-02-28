// Herencia en interfaces
// Así como las clases en POO, en las interfaces también podemos hacer uso de la herencia.
// Pdemos tener una interface base que sea heredada por todas las demás interfaces en la app.

//definición de modelo base.
export interface BaseModel {
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;
}
//readonly vuelve inmutable las variables a las que se aplique.
//de esta manera ni el id ni en createdAt pueden ser modificados a lo largo de la app
//lo exportamos para importarlo en el archivo product.model.ts. Ir a ver ->

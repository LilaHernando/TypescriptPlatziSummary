//Última clase
//en la creación de nuestro DTO de categorias, implementaremos los decoradores.
//Que son los decoradores?
// Un decorador es una función que, dependiendo de que cosa queramos decorar,
// sus argumentos serán diferentes. Usan la sintaxis @expression
// donde expression evaluará la función que será llamada.

//instalador --> npm install class-validator --save
//habilitamos decoradores en TSconfig

import { AccessType, Category } from '../models/category.model';
import {
  IsUrl,
  IsEnum,
  IsNotEmpty,
  Length,
  validateOrReject,
  IsOptional,
} from 'class-validator';
import { apiUrl } from '../../api';
export interface ICreateCategoryDto extends Omit<Category, 'id'> {}
export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'aaaaaaa';
    dto.image = apiUrl;
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();

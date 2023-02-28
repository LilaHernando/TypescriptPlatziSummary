import { BaseModel } from '../base.model';

//antes de BaseModel:
// export interface Category {
//   id: string | number;
//   createdAt: Date;
//   updatedAt: Date;
//   name: string;
// }

//Después de BaseModel
export interface Category extends BaseModel {
  name: string;
}

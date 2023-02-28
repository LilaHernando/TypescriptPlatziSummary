//mejoremos un poco nuestro código del archivo base-http.service.ts
//para no tener que definir tipos de dato cada vez que necesite usar
//los métodos de mi clase base, podemos generar una clase que almacene
//los tipos de datos necesarios en cada consulta.

import { apiUrl } from '../../api';
import { UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { BaseHttpService } from './base-http.service';

export class ProductCRUDService {
  private url = `${apiUrl}/products`;
  private http = new BaseHttpService<Product>(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    return this.http.update(id, dto);
  }
}

//hasta ahora consumimos datos en memoria, veamos como sería la misma lógica
//para consumir datos desde una API.
import axios from 'axios';
import { apiUrl } from '../../api';
import { UpdateProductDto, CreateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';
import { Product } from '../models/product.model';

//--------------- ATENCION ---------------
//ahora nos damos cuenta, que ya sea consultas a memoria o consultas a una API,
//en ambos casos haremos un getAll, update, create y findOne, entonces
//por qué no crear una interface para que las clases de consultas extiendan de ella?
//de esta manera nos aseguramos que todas las clases que extiendan de esta interface
//deben cumplir con todos los métodos necesarios (ver archivo product-service.model.ts)
//----------------------------------------

//ahora ya podemos implementar nuestra instance en la siguente clase
export class ProductHttpServices implements ProductService {
  private url = `${apiUrl}/products`;

  async getAll() {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }
  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put(`${this.url}/${id}}`, changes);
    return data;
  }
  async create(dto: CreateProductDto) {
    const { data } = await axios.post(this.url, dto);
    return data;
  }
  async findOne(id: Product['id']) {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }
}

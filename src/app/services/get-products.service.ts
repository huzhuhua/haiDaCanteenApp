import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import {URI} from '../uri';
@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(private httpService: HttpService) {
  }

  async getProduct() {
    return await this.httpService.get(URI.toSeeProductList, {});
  }
}

import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

import { URI } from '../uri';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor(private http: HttpService) { }

  async get(pageNum:any,pageSize:any) {

    return await this.http.post(URI.toSeeProductList, {pageNum:pageNum,pageSize:pageSize});
    
  }
}

import { Injectable } from '@angular/core';
import {HttpService} from './http/http.service';
// import {Product} from "../model/product";
import {URI} from '../uri';

@Injectable({
  providedIn: 'root'
})
export class StatusService {


  constructor(private httpService: HttpService) {
  }

  async getStatus() {
    return await this.httpService.post(URI.userInfo, {});
  }
}

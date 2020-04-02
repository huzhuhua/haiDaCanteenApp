import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { URI } from '../uri';
@Injectable({
  providedIn: 'root'
})
export class GetCodeService {

  constructor(private httpService:HttpService) { }
  async getCode(mobile:string){
    if(mobile==undefined){
      return await this.httpService.get(URI.code,{});
    }
    return await this.httpService.get(URI.code,{mobile:mobile});
    // return await this.httpService.get(URI.code,{});
    // return  
    }
}

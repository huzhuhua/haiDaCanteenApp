import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { URI } from '../uri';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpService:HttpService) { }
  
  async register(param: { mobile: string; password: string; verificationCode: string }){
    return await this.httpService.get(URI.register,param);
    // return 1
    }
}

import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { URI } from '../uri';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private httpService:HttpService) { }
  resetPassword(param: { mobile: string;code:string }){
   return this.httpService.get(URI.findPassword,param)
  // return '1'
  };

  transitionPassword(param: { mobile: string; password: string; code: string }){
     return this.httpService.get(URI.resetPassword,param)
    // return '1';
  };
}

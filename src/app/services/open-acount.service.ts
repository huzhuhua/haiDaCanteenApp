import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import {User} from '../model/user';
import { URI } from '../uri';
@Injectable({
  providedIn: 'root'
})
export class OpenAcountService {

  constructor(private httpService:HttpService) { }
  async openAccount(param: { realName: string; idCard: string,idPhoto1:string,idPhoto2:string,password:string}) {
    return await this.httpService.post(URI.openAccount, param);
    // return {mobile: '17886792817', password: '', status: '1', name: '王奇奇'};
}
}

import { Injectable } from '@angular/core';

import {User} from '../model/user';
import { HttpService } from './http/http.service';
import { URI } from '../uri';
@Injectable({
  providedIn: 'root'
})
export class BindCardService {

  constructor(private httpService: HttpService) { }
  async bindCard(param: { realname: string; idCard: string, bankCardNum:string,mobile:string,code:string,picture: string}): Promise<User> {
    return await this.httpService.post(URI.bindCard, param);
    // return {mobile: '17886792817', password: '', status: '2', name: '王奇奇', idCard: '6212262201026985194'};
}
}

import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import {User} from '../model/user';
import { URI } from '../uri';

@Injectable({
  providedIn: 'root'
})
export class GetUserInfoService {

  constructor(private httpService:HttpService) { }
  async getUserInfo(){

    return await this.httpService.post(URI.userInfo, {});
    // return {mobile: '17886792817', password: '', status: '0'};
}

}

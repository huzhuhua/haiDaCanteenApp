import { Injectable } from '@angular/core';
import { NativeService } from '../native.service';
import { StorageService } from '../storage.service';
import { StorageKey } from '../../storage.key';
import { Result } from '../../model/result';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CryptoService } from '../crypto.service';
@Injectable({
    providedIn: 'root'
})
// const httpOptions = {
//     headers: new HttpHeaders({ 'content-type': 'application/json;charset=UTF-8' })
//     };
export class HttpService {
    
    constructor(private crypto:CryptoService, private httpClient: HttpClient, private nativeService: NativeService, private storageService: StorageService) {
    }

    async get(url: string, param: {} ) {
        return await this.request('GET', url, param, {}, true);
    }

    async post(url: string, body: {}) {
       
        return await this.request('POST', url, {}, body,true);
    }

    async put(url: string, body: {}) {
        return await this.request('PUT', url, {}, body,true);
    }

    async delete(url: string, param: {}) {
        return await this.request('DELETE', url, param, {},true);
    }

    request(method: string = 'GET', url: string, params: any, body: any, showLoading: any) {
        return new Promise<any>(async (resolve) => {
            if (!showLoading) {
                await this.nativeService.showLoading();
            }
            let token = await this.storageService.get(StorageKey.TOKEN)
            // const token = this.storageService.get(StorageKey.TOKEN)
           params.token = token?token:undefined;
            console.log(params.token)
      
            this.httpClient.request(method, url, { body,  params  }).subscribe((data: Result) => {
                // return data;
                resolve(data);
            });

        });
    }

}

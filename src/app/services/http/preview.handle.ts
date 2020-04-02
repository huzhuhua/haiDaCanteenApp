import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Constant } from '../../constant';
import { NativeService } from '../native.service';
import { CryptoService } from '../crypto.service';


@Injectable({
    providedIn: 'root'
})
export class PreviewService {

    constructor(private crypto: CryptoService, private nativeService: NativeService) { }
    complementUrl(req: HttpRequest<any>) {
        let baseUrl = Constant.SERVER_URL + req.url;
        return baseUrl;
    }

    handle(req: HttpRequest<any>): HttpRequest<any> {
        /**
         * 检查URL是否为完整地址，若不是则根据配置信息进行URL补全
         */
        const url: string = this.complementUrl(req);
        req = this.complementParam(req);
     
      
        return req.clone({ url });
    }

    private complementParam(req: HttpRequest<any>) {
        const url: string = this.complementUrl(req);
        let params = req.params;
        let body = req.body;
      
       let method = req.method;
      

        if (params.has('showLoading')) {
            params = params.delete('showLoading');
        }
        return req.clone({ params, body, url });
        // params = params.append('timestampWithRandomValue', Date.now() + 'with' + Math.random());
        // return req.clone({
        //     params
        // });

        //post请求





    }
}

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Constant} from '../constant';
import {catchError, map, timeout} from 'rxjs/operators';
import {NativeService} from './native.service';
import {Result} from '../model/result';
@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor(private nativeService: NativeService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const req1 = this.previewHandle(req);
        return next.handle(req1).pipe(
            timeout(5000),
            map(event => {
                if (event instanceof HttpResponse) {
                    console.log(event);
                    this.nativeService.closeLoading();
                    const res: Result = event.body;
                    if (res.code === Constant.SUCCESS_CODE) {
                        return new HttpResponse({body: event.body.data, status: 200});
                    } else {
                        this.nativeService.showAlert(res.msg);
                        throwError('');
                    }
                }
                return event;
            }),
            catchError((er) => {
                this.nativeService.closeLoading();
                this.nativeService.showAlert('请求失败，请重试');
                return throwError('');
            })
        );
        // return next.handle(req)
    }

    previewHandle(req: HttpRequest<any>): HttpRequest<any> {
        //第一步
        const url = this.complementUrl(req);
        console.log(url);
        //await this.nativeService.showLoading();
        //处理请求参数 1.查询参数(参数在请求URL的？后面) 2.请求体参数（参数在请求的请求体里面）

        const params = req.params;
        const body = req.body;
        //处理params
        if (params) {
            //加密
        }
        //处理body
        if (body) {
            //加密
        }
        return req.clone({body, params, url});
        // return req;
    }

    complementUrl(req: HttpRequest<any>) {
        let baseUrl = Constant.SERVER_URL + req.url;
        return baseUrl;
    }
}

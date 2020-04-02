import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, timeout} from 'rxjs/operators';
import { Router } from '@angular/router';
import { NativeService } from '../native.service';
import { Result } from '../../model/result';
// import { Constant } from 'src/app/constant';
import {ProcessedHandler} from '../../services/http/processed.handle'
import { PreviewService } from './preview.handle';
@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor(private nativeService: NativeService,private router:Router,private preview: PreviewService,private processed:ProcessedHandler) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const req1 = this.preview.handle(req);
      
        return next.handle(req1).pipe(
            timeout(5000),
            map(event => {
                if (event instanceof HttpResponse) {
                    this.nativeService.closeLoading();
                    event = this.processed.handle(event);
                    if (event) {
                        return event;
                    } else {
                        return new HttpResponse({status: 200, body: undefined});
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
}
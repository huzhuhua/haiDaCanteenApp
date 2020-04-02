import {Injectable} from '@angular/core';
import { HttpService } from './http/http.service';
import {Product} from '../model/product';
import { URI } from '../uri';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private httpService: HttpService) {
    }
    async getSlider(){
        return await this.httpService.get(URI.sliders, {} );
    }
    //首页推荐分页加载
    async getRecommend( page:number,num:number) {
 
        return await this.httpService.get(URI.recommendProducts,{page:page,num:num});
    }
    
    async redeem(param: { totalAmount: string, code: string, purchaseId: string,  mobile: string}) {
        return await this.httpService.post(URI.redemption, param );
        // return '1'
    }
    //添加收藏产品
    async addLove(productId:any){
        return await this.httpService.get(URI.addLove, {productId:productId} );
    }
    //删除收藏产品
    async removeLove(productId:any){
        return await this.httpService.get(URI.removeLove, {productId:productId} );
    }
    //查询收藏产品
    async allLove(){
        return await this.httpService.get(URI.allLove, {} );
    }
}

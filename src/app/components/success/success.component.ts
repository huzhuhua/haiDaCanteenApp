import {Component, OnInit, Input} from '@angular/core';
// import {Product} from '../../model/product';
import {ProductService} from '../../services/product.service';
import{Injectable}from'@angular/core';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';
@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.scss'],
})

@Injectable()
export class SuccessComponent implements OnInit {
  productList = [];
  @Input()
    successInfo: string;
    // backTo: string;
   

    constructor( private router:Router, private productService:ProductService) {
        // this.successInfo = this.ac.snapshot.queryParams.successInfo;
        // this.backTo = this.ac.snapshot.queryParams.backTo;
        // this.successInfo = this.successInfo ? this.successInfo : '操作成功';
    }

    async ngOnInit() {
        // this.productList = await this.productService.getToSeeProductList();
    }
    navigate(id:string) {
        this.router.navigate(['/product-buy'],{queryParams: {id:id}})
    }
    // async back() {
    //     if (this.backTo) {
    //         try {
    //             await this.nav.navigateBack(this.backTo);
    //         } catch (e) {
    //             await this.nav.pop();
    //         }
    //     } else {
    //         await this.nav.pop();
    //     }
    // }
}

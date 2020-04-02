import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// 导入依赖
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NativeService} from 'src/app/services/native.service';
import {ProductPayService} from 'src/app/services/product-pay.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-product-pay',
    templateUrl: './product-pay.page.html',
    styleUrls: ['./product-pay.page.scss'],
})
export class ProductPayPage implements OnInit {
    url: string = "../../../assets/images//Success.svg";
    flag = 'true';
    pId: any = 1;
    pName: string = 'dddddd';
    pRate: string= '3';
    value: string ;
    pDay: string = '7';
    pAmount: string = '100';
    productType:string = '1';
    endDate:string;
    public productInfo: any = {
        amount: AbstractControl,
        vcode: AbstractControl,

    };
    productpayForm: FormGroup;


    constructor(private activateRoute: ActivatedRoute, private productpayservice: ProductPayService, private fb: FormBuilder, private router: Router, private nativeService: NativeService ) {
        this.pId = this.activateRoute.snapshot.queryParamMap.get('id');
       

        this.pName = this.activateRoute.snapshot.queryParamMap.get('name');
       
        this.pRate = this.activateRoute.snapshot.queryParamMap.get('rate');
       
        this.pDay = this.activateRoute.snapshot.queryParamMap.get('day');
      
        this.pAmount = this.activateRoute.snapshot.queryParamMap.get('amount');
      
         this.productType = this.activateRoute.snapshot.queryParamMap.get('productType');
          this.endDate = this.activateRoute.snapshot.queryParamMap.get('endDate');
          console.log(this.endDate)
        this.productpayForm = this.fb.group(
            {
                amount: new FormControl('', {
                    validators: [Validators.required, ]
                }),

                vcode: new FormControl('', {
                    validators: [Validators.required, ]
                }),
                // rate: new FormControl('', {
                //   validators: [ ]
                // }),


            }
        )

        this.productInfo.amount = this.productpayForm.controls.amount;
        this.productInfo.vcode = this.productpayForm.controls.vcode;
        // this.productInfo.rate= this.productpayForm.controls.rate;


    }

    ngOnInit() {
        
        // this.productInfo.productId = this.pId;
    }

    async productPay() {
        const productpay = this.productpayForm.getRawValue();

        productpay.productid = this.pId;
        console.log(productpay);
        const productPayContent = await this.productpayservice.productPay(productpay);

        if (productPayContent === '交易成功') {
            this.nativeService.showAlert('购买成功', '确定', () => {
                this.router.navigateByUrl('tabs/tab2');
            }, '温馨提示');

        }
    }

    okButtonHandler() {

    }

    returnCode(code: string) {
        this.value = code;
    }

    //勾选协议
  async change() {
    if(this.flag == 'true'){
      this.flag = 'false';
    }else{
      this.flag = 'true';
    }
       
        if (this.flag == 'true') {
          this.url = '../../../assets/images//Success(1).svg'
        } else {
          this.url = '../../../assets/images//Success.svg'
        }
    
      }
    
      async onPageWillClose() {
    
        console.log('RegisterPage页面即将关闭，开始清除数据。。。');
    }
    
    async onPageWillEnter() {
     //获取值
     console.log("fffff")
      this.flag = 'true';
     this.flag=  this.activateRoute.snapshot.queryParamMap.get('flag');
     if(this.flag == 'false'){
      this.url = '../../../assets/images//Success(1).svg'
     }
    
     console.log(this.flag)
    }
}

import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {NativeService} from '../../services/native.service';
import {StorageService} from '../../services/storage.service';
import {StorageKey} from '../../storage.key';

// 导入产品详情服务,路由
// import {ProductDetailsService} from '../../services/product-details.service';

@Component({
  selector: 'app-redemption',
  templateUrl: './redemption.page.html',
  styleUrls: ['./redemption.page.scss'],
})
export class RedemptionPage implements OnInit {

  public name: string;
  public id: string;
  public amount: string;
  public income: string;
  //可赎回金额转数字
 
  // public amount: string;
  // public amount: string;
  public productType :string;
  redemptionForm: FormGroup;
  totalAmount: AbstractControl;
  password: AbstractControl;
  purchaseId: string;
  mobile: string;


  constructor(
      private fb: FormBuilder,
      private storageService: StorageService,
      private productService: ProductService,
      private nativeService: NativeService,
      private router: Router,
      private activateRoute: ActivatedRoute,
  ) {
    this.redemptionForm = this.fb.group({
      totalAmount: ['', [Validators.required, Validators.pattern(
          /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
      )]],
      password: ['', [Validators.required, Validators.pattern(''), Validators.minLength(8), Validators.maxLength(16), Validators.pattern(new RegExp(/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,}$/))]]
        ,
    });
    this.totalAmount = this.redemptionForm.controls.totalAmount;
    this.password = this.redemptionForm.controls.password;


    this.productType =  this.activateRoute.snapshot.queryParamMap.get('productType');
    console.log(this.productType)
    this.name = this.activateRoute.snapshot.queryParamMap.get('name');
    this.id = this.activateRoute.snapshot.queryParamMap.get('id');
    this.amount = this.activateRoute.snapshot.queryParamMap.get('amount');
    this.income = this.activateRoute.snapshot.queryParamMap.get('income');
    
  }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe((params) => {
      // this.name = params.name;
      // this.purchaseId = params.purchaseId;
    });
  }
  async redemption() {
    const redemptionParams = this.redemptionForm.getRawValue();
    // this.mobile = await this.storageService.get(StorageKey.MOBILE);
    // redemptionParams.mobile = this.mobile;
    redemptionParams.purchaseId = this.id;

    const data = await this.productService.redeem(redemptionParams);
    if (data === '1') {
      await this.nativeService.showAlert('赎回成功', '确定', () => {
        this.router.navigateByUrl('/tabs/tab3');
      });
    }
  }
}

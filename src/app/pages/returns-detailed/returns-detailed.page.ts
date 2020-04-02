



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
  selector: 'app-returns-detailed',
  templateUrl: './returns-detailed.page.html',
  styleUrls: ['./returns-detailed.page.scss'],
})
export class ReturnsDetailedPage implements OnInit {

  


  constructor(
     
  ) {}
   

  ngOnInit() {
   
  }
  
}

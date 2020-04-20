import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AddressService } from 'src/app/services/address.service';
import { NavController, IonContent } from '@ionic/angular';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
  @ViewChild(IonContent, name) content: IonContent;
public address:any;
addAddressForm: FormGroup;
location:AbstractControl;
addr:AbstractControl;
name:AbstractControl;
gender:AbstractControl;
Tmobile:AbstractControl;
  constructor(private activateRoute: ActivatedRoute,
    private nav:NavController,
    private router:Router,
    private addressService:AddressService,
    private fb: FormBuilder
    ) {
   this.address = this.activateRoute.snapshot.queryParamMap.get("address")

   this.addAddressForm = this.fb.group(
    {
      location: new FormControl('', {
            // validators: [Validators.required, Validators.pattern(new RegExp(/^([1-9]{1})(\d{14}|\d{18})$/))]
            validators: []
        }),

        addr: ['', [Validators.required]]
        ,
        name: ['', [Validators.required, Validators.pattern(''),  Validators.pattern(new RegExp(/^[A-Za-z0-9\u4e00-\u9fa5]+$/))]],
        gender: [],
        Tmobile:['', [Validators.required, Validators.pattern(''),  Validators.pattern(new RegExp(/^1[3456789]\d{9}$/))]],
       
    }
)
this.location = this.addAddressForm.controls.location;

this.addr = this.addAddressForm.controls.addr;
this.name = this.addAddressForm.controls.name;
this.gender = this.addAddressForm.controls.gender;
this.Tmobile = this.addAddressForm.controls.Tmobile;
this.location.setValue(this.address)
     }

  ngOnInit() {

  }
async add(){
  const add = this.addAddressForm.getRawValue();
  console.log(add)
const a= await this.addressService.addReceiverAddress(this.addAddressForm.getRawValue())
if(a=="1"){
  this.nav.navigateBack("address")
}
}

async onPageWillClose() {
   
  console.log('RegisterPage页面即将关闭，开始清除数据。。。');
}

async onPageWillEnter() {
window.addEventListener('native.keyboardshow',(e:any) =>{
  console.log(e)
 
  let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("addAddressCard");
console.log(scrollDiv)
scrollDiv[0].style.height= "578px"
console.log( scrollDiv[0].style.height)
this.content.scrollToBottom(0)
 

// 　　　　this.content.scrollToTop(e.keyboardHeight) 


// this.productInfo.productId = this.pId;
　});
window.addEventListener('native.keyboardhide', (e) =>{
  // todo 进行键盘不可用时操作
  let scrollDiv= <HTMLElement><unknown>document.getElementsByClassName("addAddressCard");
console.log(scrollDiv)
scrollDiv[0].style.height="150px"
this.content.scrollToTop(0)

  console.log(e)
});
}
}

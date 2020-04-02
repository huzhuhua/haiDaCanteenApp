import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AddressService } from 'src/app/services/address.service';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
public address:any;
addAddressForm: FormGroup;
location:AbstractControl;
addr:AbstractControl;
name:AbstractControl;
gender:AbstractControl;
Tmobile:AbstractControl;
  constructor(private activateRoute: ActivatedRoute,
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
  this.router.navigateByUrl("address")
}
}
}

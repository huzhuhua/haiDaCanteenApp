import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.page.html',
  styleUrls: ['./agreement.page.scss'],
})
export class AgreementPage implements OnInit {
id:string;
  constructor(private router:Router, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');

  }

  ngOnInit() {
  }
navigate(){
  if(this.id == '1'){
    this.router.navigate(['/register'], {
      queryParams: {
  flag : false,
      }
  })}else if(this.id == '2')  {
    this.router.navigate(['/product-pay'], {
      queryParams: {
  flag : false,
      }
  })
 
}
}
}

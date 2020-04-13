import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.page.html',
  styleUrls: ['./classify.page.scss'],
})
export class ClassifyPage implements OnInit {
public kind:string;
public searchList:any;
  constructor(private activateRoute:ActivatedRoute,
    private searchService:SearchService,
    private productService:ProductService) { 
    this.kind = this.activateRoute.snapshot.queryParamMap.get("kind")
  }
  ngOnInit() {
    this.search();
  }
//加载菜品

   //搜索
   async search() {
  
 
    const a = await this.productService.allLove();
    this.searchList = await this.searchService.searchByKind(this.kind)
    for(var i=0;i<this.searchList.length;i++){
      this.searchList[i].starWidth = this.searchList[i].star/5*70.47
      if(a.length ==0){
          this.searchList[i].loveStatus = false
      }else{
          this.searchList[i].loveStatus = false
          for(let j=0;j<a.length;j++){
              if (a[j].id == this.searchList[i].id) {
             
                  this.searchList[i].loveStatus = true
                  break;
              }
              // }else{
              //     this.searchList[i].loveStatus = false
              // }
          }
      }
    }
  }
 

}

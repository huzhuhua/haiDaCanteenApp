import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { StorageService } from 'src/app/services/storage.service';
import { StorageKey } from 'src/app/storage.key';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-dishes',
  templateUrl: './search-dishes.page.html',
  styleUrls: ['./search-dishes.page.scss'],
})
export class SearchDishesPage implements OnInit {
  public searchList: any;
  public name: any;
  constructor(private searchService: SearchService,
    private productService:ProductService,
    private activateRoute: ActivatedRoute,
    private storageService: StorageService,
  ) {

    this.name = this.activateRoute.snapshot.queryParamMap.get("name")
  }

  ngOnInit() {
    this.find()

  }
  //获取菜品
  async find() {
    this.searchList = await this.searchService.search(this.name)
    const a = await this.productService.allLove();
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
  //搜索
  async search() {
    let input = <HTMLElement><unknown>document.getElementsByClassName("input2");
    console.log(input[0].value)
    const a = await this.productService.allLove();
    this.searchList = await this.searchService.search(input[0].value)
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
    console.log(this.searchList)
    if (this.searchList.length != 0) {
      let a = await this.storageService.get(StorageKey.HISTORYDISHES)
      if (a == undefined) {
        a = []
      }
      let m = 0;
      let arr = [];
      for (let i = 0; i < a.length; i++) {
        if (a[i] == input[0].value) {
          m += 1;
          arr = a.splice(i, 1)
          console.log(arr)


        }
      }
      if (m == 0) {
        a.unshift(input[0].value)
      } else {
        a.unshift(arr[0])
      }

      console.log(a)
      this.storageService.add(StorageKey.HISTORYDISHES, a)
    }
  }


}

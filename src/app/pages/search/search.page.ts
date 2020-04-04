import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { StorageService } from 'src/app/services/storage.service';
import { StorageKey } from 'src/app/storage.key';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public recommderList: any;
  public seachList: any
  public serachList = []
  constructor(
    private router: Router,
    private storageService: StorageService,
    private searchService: SearchService) { }

  ngOnInit() {
    this.reDishers()
   
  }
  //热门搜索
  async reDishers() {
    this.recommderList = await this.searchService.find()
    console.log(this.recommderList)
  }
  //历史搜索
  async history() {
    let a = await this.storageService.get(StorageKey.HISTORYDISHES)
    console.log(a)
    if (a == undefined) {
      a = []
    }
    this.serachList=[]
    a.forEach(element => {
      this.serachList.push(element);
    });

    console.log(this.serachList)
  }
 //搜索
 async search(name?:any) {
  let n;
  if(name){
n = name
  }else{
    let input = <HTMLElement><unknown>document.getElementsByClassName("input");
    n = input[0].value
  }
 

  this.serachList = await this.searchService.search(n)
  console.log(this.serachList)
  if (this.serachList.length != 0) {
    let a = await this.storageService.get(StorageKey.HISTORYDISHES)
    if (a == undefined) {
      a = []
    }
let m=0;
    let arr=[];
    for (let i = 0; i < a.length; i++) {
      if (a[i] == n) {
m+=1;
        arr = a.splice(i, 1)
        console.log(arr)


      }
    }
    if(m==0){
      a.unshift(n)
    }else{
      a.unshift(arr[0])
    }
    
    console.log(a)
    this.storageService.add(StorageKey.HISTORYDISHES, a)

  }
  this.router.navigate(["search-dishes"], { queryParams: { name: n } })

  

}

  async onPageWillClose() {
      
    // this.productList = res.list;
    
    console.log('RegisterPage页面即将关闭，开始清除数据。。。');
}

async onPageWillEnter() {
     this.history()
}

}

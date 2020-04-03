import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { StorageService } from 'src/app/services/storage.service';
import { StorageKey } from 'src/app/storage.key';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public recommderList:any;
  public seachList:any
 public serachList=[]
  constructor(
    private storageService:StorageService,
    private searchService:SearchService) { }

  ngOnInit() {
    this.reDishers()
    this.history()
  }
  //热门搜索
  async reDishers(){
  this.recommderList = await this.searchService.find()
  console.log(this.recommderList)
  }
  //历史搜索
  async history(){
    let a= await this.storageService.get(StorageKey.HISTORYDISHES)
    console.log(a)
    if(a==undefined){
      a=[]
    }
    a.forEach(element => {
      this.serachList.push(element);
    });
   
    console.log(this.serachList)
  }
  //搜索
  async search(){
   let input = <HTMLElement><unknown>document.getElementsByClassName("input");
  
    this.seachList = await this.searchService.search(input[0].value)
    if(this.seachList.length!=0){
      let a= await this.storageService.get(StorageKey.HISTORYDISHES)
      if(a==undefined){
        a=[]
      }
      a.push(input[0].value)
       this.storageService.add(StorageKey.HISTORYDISHES,a)
        this.serachList = []
       a.forEach(element => {
        this.serachList.push(element);
      });
       console.log(this.seachList)
       console.log(a)
    }
  
  
  }

}

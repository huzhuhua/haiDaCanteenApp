import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class GetSlidersService {

  constructor(private httpService:HttpService) { }
  async getSlider(){
    // return await this.httpService.get(URI.getSlider,{});
    return [
      {img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=21800722,1265793989&fm=26&gp=0.jpg", 
        name:"77",
        rate:"3.777%",
    },
    {img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3291325566,2082764090&fm=26&gp=0.jpg", 
    name:"77",
    rate:"3.777%",
},
{img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3342986563,3481700576&fm=26&gp=0.jpg", 
name:"77",
rate:"3.777%",
},
{img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1553315655,4191692929&fm=26&gp=0.jpg", 
name:"77",
rate:"3.777%",
},]
    }
}

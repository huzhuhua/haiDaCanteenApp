import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageKey } from '../storage.key';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }
  async add(key: string, value: any, expireIn?: number) {

    let value1: StorageValue;

    if (expireIn) {
      value1 = { key, value, expireTime: new Date(new Date().getTime() + expireIn) };
    } else {
      value1 = { key, value };
    }
    return await this.storage.set(key, value1);
  }

  async get(key: string) {
    const val: StorageValue = await this.storage.get(key);
   
    if (val && val.expireTime) {

      return val.expireTime > new Date() ? val.value : undefined;
    }
    return val ? val.value : undefined
  };



  async remove(key: string) {
    return await this.storage.remove(key);
  };

  async clear() {
    return await this.storage.clear();
  };
}

export interface StorageValue {
  key: string;
  value: any;
  expireTime?: Date;
}


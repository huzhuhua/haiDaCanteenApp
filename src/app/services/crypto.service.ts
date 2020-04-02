import {Injectable} from '@angular/core';
import * as crypto from 'crypto-js';

@Injectable({
    providedIn: 'root'
})

export class CryptoService {
  constructor() { }
    private CRYPTO_KEY = 'e2b8b25fad71409e';
    private CRYPTO_IV = '9e69e212bb37b587';
  
    
    static toBase64(str: string) {
        return crypto.enc.Base64.stringify(crypto.enc.Utf8.parse(str));
    }
    //MD5加密
    MD5(data:string){
    //  return crypto.MD5(data)
     return crypto.MD5(data).toString()
    }
   
    enCrypto(data: any) {
        const key = crypto.enc.Latin1.parse(this.CRYPTO_KEY);
        const iv = crypto.enc.Latin1.parse(this.CRYPTO_IV);
        // 加密
        data = String(data);
        let encrypted = crypto.AES.encrypt(
            data,
            key,
            {
                iv, mode: crypto.mode.CBC, padding: crypto.pad.ZeroPadding
            }).toString();
        encrypted = this.replace(encrypted);
        return encrypted;
    }
     
    replace(data) {
        data = data.replace(/[+]/g, '%2B');
        return data;
    }

    deCrypto(data: string) {
        const key = crypto.enc.Latin1.parse(this.CRYPTO_KEY);
        const iv = crypto.enc.Latin1.parse(this.CRYPTO_IV);
        const decrypted = crypto.AES.decrypt({ciphertext: crypto.enc.Base64.parse(data)}, key, {
            iv,
            padding: crypto.pad.ZeroPadding
        });
        return decrypted.toString(crypto.enc.Utf8);
    }
}

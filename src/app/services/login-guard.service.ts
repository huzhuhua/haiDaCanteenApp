import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {StorageKey} from '../storage.key';
import {Storage} from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate, CanActivateChild  {

  constructor(private storage: Storage, private router: Router) { }
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return await this.checkLogin();
}

async canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return await this.checkLogin();
}

async checkLogin() {
    const token = await this.storage.get(StorageKey.TOKEN);
    if (token) {
        return true;
    } else {
        await this.router.navigateByUrl('/login');
        return false;
    }
}
}

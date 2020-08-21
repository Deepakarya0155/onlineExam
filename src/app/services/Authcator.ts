import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router'
import { Injectable } from '@angular/core';
import {CommonData} from './CommonData'

@Injectable()
export class loginAuth implements CanActivate{

    constructor(private com:CommonData,private route:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // return true;
        if(this.com.current_user==null){
            this.route.navigate([''])
            return false;
        }
        return true;
    }


}
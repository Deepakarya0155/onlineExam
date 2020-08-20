import {Injectable} from '@angular/core'

@Injectable()
export class Backend{

    login(user:String,password:String){
        if(user.trim().toLowerCase()=="deepak" && password.trim()=="deepak"){
            return user;
        }else{
            return null;
        }
    }

}
import {Component} from '@angular/core'
import { CommonData } from '../services/CommonData';
import { FormControl ,FormControlName, FormGroup, Validators} from '@angular/forms';
import { Backend } from '../services/Backend';

@Component({
    selector:'loginComp',
    templateUrl:'./loginComp.html',
    styleUrls:['./loginComp.css']

})
export class loginComp{
    hide=true;

    form=new FormGroup({
        user:new FormControl("",[Validators.required]),
        password:new FormControl("",[Validators.required]),
    })

    constructor(public commonData:CommonData,private backend:Backend){

    }

    login(data){
        let response=this.backend.login(data.user,data.password)
        if(response!=null){
            this.commonData.current_user=response;
        }else{
            this.commonData.openSnackBar("Invalid User")
        }
        console.log(this.commonData.current_user)
    }



}
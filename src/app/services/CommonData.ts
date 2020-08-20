import {Injectable} from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import {sBar} from './sBar'




@Injectable()
export class CommonData{

    login_page_title="Online Exam Login"
    snackbarDuration=3
    snackbarErrorMsg=""
    current_user=null;

    constructor(private snBar:MatSnackBar){

    }
    openSnackBar(msg){
        // this.snackbarErrorMsg=msg;
         this.snBar.openFromComponent(sBar,{duration:this.snackbarDuration*1000,data:msg})
        
    }
}





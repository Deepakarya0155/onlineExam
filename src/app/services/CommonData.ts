import {Injectable} from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import {sBar} from './sBar'
import { Router } from '@angular/router'




@Injectable()
export class CommonData{

    login_page_title="Online Exam Login"
    snackbarDuration=3
    snackbarErrorMsg=""
    current_user=null;
    computer_screen=true;

    constructor(private snBar:MatSnackBar,private router:Router){

    }
    openSnackBar(msg){
        // this.snackbarErrorMsg=msg;
         this.snBar.openFromComponent(sBar,{duration:this.snackbarDuration*1000,data:msg})
        
    }


    calculateScreen(){
        if(window.screen.availWidth<500){
            this.computer_screen=false;
        }else{
            this.computer_screen=true;
        }
    }

    navigateToErro(msg){
        this.router.navigate(['/error',msg])
    }
}





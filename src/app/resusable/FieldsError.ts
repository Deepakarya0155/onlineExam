import {Component, Input, OnInit} from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonData } from '../services/CommonData';

@Component({
    selector:'FieldsError',
    template:`
        <span *ngIf="error.required">*This Filed is Mandatory</span>
    `,
    styles:[`
        span{
            color:red;
        }
    `]
})
export class FieldsError implements OnInit{
    @Input() error;
    constructor(public com:CommonData){
        
    }
    ngOnInit(): void {
        if(this.error.required){
            this.com.openSnackBar("Mandatory Field")
        }
    }


}
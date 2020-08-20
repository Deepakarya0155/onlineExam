import {Component,Inject} from '@angular/core'
import {CommonData} from './CommonData'
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar'

@Component({
    selector:'sBar',
    template:`
    <span class="example-pizza-party">
        {{data}}
        
    </span>
    `,
    styles:[`
    .example-pizza-party {
        color: hotpink;
        width:*;
      }
    `]
})
export class sBar{
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data:any){}
}
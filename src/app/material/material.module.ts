import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';


var comp_list=[MatCardModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,MatSnackBarModule,MatTooltipModule]

@NgModule({
  
  imports: [
    comp_list
    
  ],
  exports:[
    comp_list
  ]
})
export class MaterialModule { }

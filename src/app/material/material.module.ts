import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';


var comp_list=[MatCardModule,
  MatButtonModule,MatFormFieldModule,MatInputModule,
  MatIconModule,MatSnackBarModule,MatTooltipModule,MatMenuModule,
  MatSidenavModule
]

@NgModule({
  
  imports: [
    comp_list
    
  ],
  exports:[
    comp_list
  ]
})
export class MaterialModule { }

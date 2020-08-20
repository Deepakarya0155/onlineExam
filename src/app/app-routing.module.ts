import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {loginComp} from './loginComp/loginComp';
const routes: Routes = [
  {path:"",component:loginComp}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const comp_list=[loginComp]

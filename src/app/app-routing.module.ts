import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {loginComp} from './loginComp/loginComp';
import { ErrorComponent } from './error/error.component'
import {HomeComponent} from './home/home.component'
import {loginAuth} from './services/Authcator'

const routes: Routes = [
  {path:"",component:loginComp},
  {path:"home",component:HomeComponent,canActivate:[loginAuth]},
  {path:"error/:msg",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const comp_list=[loginComp,HomeComponent,ErrorComponent]

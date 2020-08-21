import { Component, HostListener } from '@angular/core';
import { CommonData } from './services/CommonData';
import { Router } from '@angular/router';
import { comp_list } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineExam';

  constructor(private comm:CommonData,private route:Router){
    comm.calculateScreen();
    if(!comm.computer_screen){
          comm.navigateToErro("This site only accessable on Computer")
    }

  }

  @HostListener("window:resize") onscroll(event){
    if(!this.comm.computer_screen){
      this.comm.navigateToErro("This site only accessable on Computer")
    }
  }
}

import { Component, OnInit, HostListener } from '@angular/core';
import { CommonData } from '../services/CommonData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public comm:CommonData) { }
  showFiller=false;
  ngOnInit(): void {
  }

  // @HostListener("window:blur") onblur(event){
  //   if(this.comm.current_user!=null){
  //     alert("Sorry ! you are exit from test")
  //   }
  // }
}

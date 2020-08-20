import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  msg=""
  constructor(private route:ActivatedRoute) {
    route.params.subscribe(res=>{
      this.msg=res.msg;
    })
   }

  ngOnInit(): void {
  }

}

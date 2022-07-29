import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('user');
    window.location.href="/"
  }

  try:string='open'
  main:any
  slide(){
    if(this.try == 'open'){
      this.try = 'close'
      this.main = 'main_close'
    }
    else if(this.try == 'close'){
      this.try = 'open'
      this.main = 'main_open'
    }
  }

}

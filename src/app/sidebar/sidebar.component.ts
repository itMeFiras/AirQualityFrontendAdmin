import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  url:string = "Dashboard"
  ngOnInit(): void {
    console.log("this.router.url");
    console.log(this.router.url);
  }

  clicked(a:string){
    if(a == "Dashboard"){
      this.url = "Dashboard"
    }
    if(a == "Nodes List"){
      this.url = "Nodes List"
    }
    if(a == "Users List"){
      this.url = "Users List"
    }
    if(a == "Node Requests"){
      this.url = "Node Requests"
    }

  }

}

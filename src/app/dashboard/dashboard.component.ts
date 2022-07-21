import { Component, OnInit } from '@angular/core';
import { UsersService } from '../models/users.service';
import { NodesService } from '../models/nodes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private UsersService:UsersService,private NodesService : NodesService) { }
  user:any
  admin=0
  pins: any
  active=0
  operate=0
  requests:any

  ngOnInit(): void {
    this.getUserList()
    this.getNodeList()
    this.getRequestList()
  }

  getUserList(){
    this.UsersService.getUserList().subscribe(res => {
      this.user = res
      for(let u of this.user){
        if(u.role =='admin'){this.admin+=1}
      }
    } )
  }

  getNodeList(){
    this.NodesService.getPinsList().subscribe(res => {
      this.pins = res
      for(let u of this.pins){
        if(u.active =='active'){this.active+=1}
        if(u.operate =='Yes'){this.operate+=1}

      }
    } )
  }

  getRequestList(){
    this.NodesService.getRequestList().subscribe(res => {
      this.requests = res
    } )
  }

}

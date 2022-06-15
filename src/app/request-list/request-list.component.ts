import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { NodesService } from '../models/nodes.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests:any
  p: number = 1;
  id:any

  constructor(private NodesService : NodesService) { }

  ngOnInit(): void {
    this.getRequestList()
  }

  getRequestList(){
    this.NodesService.getRequestList().subscribe(res => {
      this.requests = res
      console.log(this.requests)
    } )
  }

  approveRequest(id:any){
    this.NodesService.approveRequest(id._id).subscribe(res => {
      this.requests = res
      console.log(this.requests)
      window.location.reload()
    })
  }

  denyRequest(id:any){
    this.NodesService.denyRequest(id._id).subscribe(res => {
      this.requests = res
      console.log(this.requests)
      this.getRequestList()
    })
  }

  delete(){
    this.NodesService.deleteRequest(this.id).subscribe()
    window.location.reload()
  }

}

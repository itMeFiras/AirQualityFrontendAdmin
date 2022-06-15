import { Component, OnInit } from '@angular/core';
import { NodesService } from '../models/nodes.service';


@Component({
  selector: 'app-nodelist',
  templateUrl: './nodelist.component.html',
  styleUrls: ['./nodelist.component.css']
})
export class NodelistComponent implements OnInit {
  pins: any 
  p: number = 1;
  id:any

  constructor(private NodesService : NodesService) { }

  ngOnInit(): void {
    this.getNodeList()
  }

  getNodeList(){
    this.NodesService.getPinsList().subscribe(res => {
      this.pins = res
    } )
  }

  delete(){
    this.NodesService.deleteNode(this.id).subscribe()
    window.location.href=`/nodeList`
  }
}

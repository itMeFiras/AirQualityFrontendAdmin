import { Component, OnInit } from '@angular/core';
import { NodesService } from '../models/nodes.service'
import { Nodes } from 'src/app/models/node.model';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-node-profile',
  templateUrl: './node-profile.component.html',
  styleUrls: ['./node-profile.component.css']
})
export class NodeProfileComponent implements OnInit {

  constructor(private NodesService:NodesService, private route: ActivatedRoute) { }

  node : any 
  id: any
  currDiv: string | undefined
  alert :string | undefined

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getNode()
  }

  getNode(){
    this.NodesService.getNodeById(this.id).subscribe(res => {
      this.node = res
      console.log(this.node)

    })
  }

  edit(divVal: string,node : Nodes){
    this.NodesService.editNode(this.node._id,node).subscribe((data : any) =>{
      node = data;
      console.log(data)

      console.log(data.message)
      if (data.message.slice(0,6) == "E11000"){
        this.alert = "this Mac address is used !"
        this.currDiv = divVal;
      }
      else if (data.message.slice(0,22) == "User validation failed"){
        this.alert = "All inputs need to be filled !"
        this.currDiv = divVal;
      }
      else if (data.message == "edit success"){
        window.location.reload()
      }
    })
  }


  toggelActive(){
    this.NodesService.toggelActive(this.id).subscribe()
    window.location.reload()
  }

  delete(){
    this.NodesService.deleteNode(this.id).subscribe()
    window.location.href=`/nodeList`
  }

}

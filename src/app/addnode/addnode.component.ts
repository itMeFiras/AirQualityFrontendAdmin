import { Component, OnInit } from '@angular/core';
import { NodesService } from '../models/nodes.service'
import { Nodes } from 'src/app/models/node.model';

@Component({
  selector: 'app-addnode',
  templateUrl: './addnode.component.html',
  styleUrls: ['./addnode.component.css']
})
export class AddnodeComponent implements OnInit {

  constructor(private NodesService:NodesService) { }

  node : Nodes = new Nodes;
  id: any
  currDiv: string | undefined
  alert :string | undefined

  ngOnInit(): void {
  }

  createNode(divVal: string,node : Nodes){
    var currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    var token = currentUser.token; // your token
    this.NodesService.createNode(node,token).subscribe((data : any) =>{
      node = data;
      console.log(data)
      console.log(data.code)  
      if (data.code == 11000){
        this.alert = "this MAC address is used !"
        this.currDiv = divVal;
      }
      else if (data.message == "add success"){
        window.location.reload()
      }    
    })
  }

}

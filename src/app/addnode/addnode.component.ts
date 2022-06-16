import { Component, OnInit , AfterViewInit} from '@angular/core';
import { NodesService } from '../models/nodes.service'
import { Nodes } from 'src/app/models/node.model';
import * as L from "leaflet";

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

  //map configurations
  map: L.Map | L.LayerGroup<any> | undefined;
  coord:any
  myMarker:any
  markerIcon = {
    icon: L.icon({
      iconSize: [25, 35],
      iconAnchor: [10, 35],
      popupAnchor: [2, -40],
      iconUrl: "../../../assets/newMa.png",
    })
  };

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.locationMap()
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

  locationMap(){
    //map configurations
    this.map = L.map("map").setView([36.8349084,  10.2432562], 10);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.on("click", e => {
      if (this.coord !=null){
        this.map?.removeLayer(this.myMarker);
      }
      console.log(e); // get the coordinates
      this.coord = e
      this.myMarker = L.marker([this.coord.latlng.lat, this.coord.latlng.lng], this.markerIcon)
      this.map?.addLayer(this.myMarker);
      this.node.lat = this.coord.latlng.lat
      this.node.long = this.coord.latlng.lng
    });
  }

}

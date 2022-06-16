import { Component, OnInit } from '@angular/core';
import { NodesService } from '../models/nodes.service'
import { Nodes } from 'src/app/models/node.model';
import * as L from "leaflet";
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
  };  //new pin icon

  oldMarkerIcon = {
    icon: L.icon({
      iconSize: [25, 35],
      iconAnchor: [10, 35],
      popupAnchor: [2, -40],
      iconUrl: "../../../assets/oldMa.png",
    })
  };  //old pin icon

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getNode()
  }

  ngAfterViewInit(){
    this.locationMap()
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

    let aa = L.marker([this.node.lat, this.node.long], this.oldMarkerIcon)
    this.map?.addLayer(aa)
  }

}

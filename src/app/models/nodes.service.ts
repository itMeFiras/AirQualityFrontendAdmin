import { Injectable } from '@angular/core';
import { Nodes } from './node.model';
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NodesService {
  selectedUNode : Nodes = {
    _id:"",
    username :"",
    MAC :"",
    title : "",
    desc : "",
    lat : "",
    long : "",
    active : "",
  }

  url : string = "http://localhost:8800/api/pins" 

  constructor(private HttpClient: HttpClient) { }

  //pins services
  getPinsList(){
       return this.HttpClient.get(this.url+'/list')
  }

  getNodeById(id : any){
    return this.HttpClient.get(this.url+'/list/'+id)
  }

  editNode(id : any, data:Nodes ) : Observable<Nodes>{
    return this.HttpClient.post<Nodes>(this.url+'/edit/'+id,data)
  }

  deleteNode(id : any){
    return this.HttpClient.delete(this.url+'/delete/'+id)
  }

  toggelActive(id : any) : Observable<Nodes>{
    return this.HttpClient.post<Nodes>(this.url+'/toggelActive/'+id,"")
  }
}

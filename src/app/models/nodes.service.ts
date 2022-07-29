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
    email : "",
    lat : "",
    long : "",
    active : "",
  }

  url : string = "http://localhost:8800/api/pins" 

  constructor(private HttpClient: HttpClient) { }

  //pins service
  getPinsList(){
       return this.HttpClient.get(this.url+'/list')
  }

  getNodeById(id : any){
    return this.HttpClient.get(this.url+'/list/'+id)
  }

  createNode(data:Nodes,auth_token: any) : Observable<Nodes>{
    const headers  = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.HttpClient.post<Nodes>(this.url+'/add',data,{ headers: headers  })
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

  checknode(mac:any): Observable<any>{
    return this.HttpClient.get('http://localhost:8800/api/node/checknode?MAC='+mac)
  }

  //request service
  getRequestList(){
    return this.HttpClient.get(this.url+'/request')
  }

  approveRequest(id:any){
    return this.HttpClient.post(this.url+'/request/approve/'+id,"")
  }

  denyRequest(id:any){
    return this.HttpClient.post(this.url+'/request/deny/'+id,"")
  }

  deleteRequest(id : any){
    return this.HttpClient.delete(this.url+'/request/delete/'+id)
  }
}

import { Component, OnInit } from '@angular/core';
import {UsersService} from '../models/users.service'
import { Users } from 'src/app/models/users.model';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private usersService:UsersService, private route: ActivatedRoute) { }

  user : any 
  id: any
  currDiv: string | undefined
  alert :string | undefined

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProfile()
  }

  getProfile(){
    this.usersService.getUserById(this.id).subscribe(res => {
      this.user = res
      console.log(this.user)
    })
  }

  edit(divVal: string,user : Users){
    this.usersService.editAccount(this.user._id,user).subscribe((data : any) =>{
      user = data;
      if (data.message.slice(0,6) == "E11000"){
        this.alert = "Username/email are used !"
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
    this.usersService.toggelActive(this.id).subscribe()
    window.location.reload()
  }

  delete(){
    this.usersService.deleteUser(this.id).subscribe()
    window.location.href=`/userList`
  }

}

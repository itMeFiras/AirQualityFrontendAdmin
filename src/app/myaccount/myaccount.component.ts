import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/models/users.service'; 
import { Users } from 'src/app/models/users.model';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  constructor(private userService : UsersService) { }

  id: any 
  user :any
  useredit :any
  url :string = '2'

  currDiv: string | undefined
  alert :string | undefined
  newpass :string | undefined

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    var currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    var token = currentUser.token; // your token

    this.userService.getprofile(token).subscribe(res => {
      if (res == "you dont have access" || res == "no token sent" ){
        window.location.href=`/`
      }
      else {
        this.user = Object.values(res)[0]
        this.user.password =""
        console.log(this.user._id)
      }
    })
  }

  edit(divVal: string,user : Users){
    this.userService.editUser(this.user._id,user).subscribe((data : any) =>{
      user = data;
      console.log(data)
      if (data.message == "email is used"){
        this.alert = "This email is already used !"
        this.currDiv = divVal;
      }
      else if (data.message == "edit success"){
        window.location.href='/myAccount'
      }
    })
  }

  editpass(divVal: string,user : Users){
    this.userService.editPass(this.user._id,user).subscribe((data : any) =>{
      user = data;
      if (data.message == "the old password is wrong !"){
        this.alert = "The old password is wrong !"
        this.currDiv = divVal;
      }
      else if (data.message == "edit success"){
        window.location.href='/myAccount'
      }
    })
  }

}

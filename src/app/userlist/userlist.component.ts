import { Component, OnInit } from '@angular/core';
import { UsersService } from '../models/users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  list:any
  user:any
  p: number = 1;
  id:any

  constructor(private UsersService:UsersService) { }

  ngOnInit(): void {
    this.getUserList()
  }

  getUserList(){
    this.UsersService.getUserList().subscribe(res => {
      this.user = res
    } )
  }

  delete(){
    console.log(this.id)
    this.UsersService.deleteUser(this.id).subscribe()
    window.location.href=`/userList`
  }

}

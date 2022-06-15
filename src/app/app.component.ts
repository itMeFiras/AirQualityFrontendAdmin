import { Component } from '@angular/core';
import { UsersService } from './models/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontadmin';

  /////////////
  constructor(private userService : UsersService) { }
  profile : any
  user:any

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    var currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    var token = currentUser.token;
    this.userService.getprofile(token).subscribe(res => {
    this.user = res
      if (this.user[0].role != "admin" ){
        window.location.href=`http://localhost:4200/`
      }
    })
  }
}

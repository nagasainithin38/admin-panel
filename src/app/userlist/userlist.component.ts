import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

users:Array<Users>=[]
  constructor(public userList:UsersService,private router:Router){   
    this.users=this.userList.usersData
  }


  viewMore(index:number){

    this.router.navigateByUrl(`home/user/${index+1}`)


  }
  edit(index:number){
    this.router.navigateByUrl(`home/user/edit/${index+1}`)
  }

}

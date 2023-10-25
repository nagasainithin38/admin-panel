import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent {


  userId!:number
  constructor(private activatedRoute:ActivatedRoute,public userService:UsersService){
      this.activatedRoute.params.subscribe(params=>{
        this.userId=+(params['id'])-1

      })
  }

}

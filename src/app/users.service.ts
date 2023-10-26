import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersData:Array<Users>=[]
  constructor() {
    this.usersData.push(new Users('nithin','nithin','nithin','nithin@gmail.com',new Date(),'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'))
    this.usersData.push(new Users('nagasai','nagasai','nagasai','nagasai@gmail.com',new Date(),'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'))
    this.usersData.push(new Users('sufian','sufian','sufian','sufian@gmail.com',new Date(),'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'))
    this.usersData.push(new Users('rajesh','rajesh','rajesh','rajesh@gmail.com',new Date(),'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'))
   }

  addUsers(name:string,username:string,password:string,email:string,dob:Date,profilePic:string){
    this.usersData.push(new Users(name,username,password,email,dob,profilePic))
    console.warn(this.usersData)
  }
}

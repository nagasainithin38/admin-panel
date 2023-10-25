import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../users';
@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent {

  registerForm: FormGroup
userId!:number
  constructor(private toastr: ToastrService,private userService:UsersService,private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe(params=>{
      this.userId=+(params['id'])-1
    })
    console.log(userService.usersData[this.userId])
    this.registerForm = new FormGroup({
      name: new FormControl(userService.usersData[this.userId].name, [Validators.required, Validators.minLength(5)]),
      username: new FormControl(userService.usersData[this.userId].username, [Validators.required, Validators.minLength(5)]),
      password: new FormControl(userService.usersData[this.userId].password, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(userService.usersData[this.userId].email, [Validators.required]),
      dob: new FormControl(new Date(userService.usersData[this.userId].dob), [Validators.required]),
      profilePic:new FormControl('https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg')
    })
  }
  registerUser() {


    if (this.registerForm.get('name')?.errors != null) {
      this.toastr.error('', 'Name is a required Fiels', {
        timeOut: 2000,
        closeButton: true,

      });
      return
    }
    if (this.registerForm.get('username')?.errors != null) {

      if (this.registerForm.get('username')?.hasError('required')) {
        this.toastr.error('', 'Username is a required field', {
          timeOut: 2000,
          closeButton: true,

        });
        return
      }
      else if (this.registerForm.get('username')?.hasError('minlength')) {
        this.toastr.error('', 'Username should be atleast 5 characters', {
          timeOut: 2000,
          closeButton: true,

        });
        return
      }
    }
    if (this.registerForm.get('password')?.errors != null) {

      if (this.registerForm.get('password')?.hasError('required')) {
        this.toastr.error('', 'password is a required field', {
          timeOut: 2000,
          closeButton: true,

        });
        return
      }
      else if (this.registerForm.get('password')?.hasError('minlength')) {
        this.toastr.error('', 'password should be atleast 5 characters', {
          timeOut: 2000,
          closeButton: true,

        });
        return
      }
    }
    
    if (this.registerForm.get('email')?.errors != null) {
      this.toastr.error('', 'Email is a required Fiels', {
        timeOut: 2000,
        closeButton: true,

      });
      return
    }
    if (this.registerForm.get('dob')?.errors != null) {
      this.toastr.error('', 'DateOfBirth is a required Fiels', {
        timeOut: 2000,
        closeButton: true,

      });
      return
    }
    for(let i=0;i<this.userService.usersData.length;i++){
      if(this.userService.usersData[i].username==this.registerForm.get('username')?.value && i!=this.userId){
        this.toastr.error('',"User exists already",{
          timeOut: 2000,
          closeButton: true,
        })
        return
      }
    }
    this.userService.usersData[this.userId]=new Users(
      this.registerForm.get('name')?.value,
      this.registerForm.get('username')?.value,
      this.registerForm.get('password')?.value,
      this.registerForm.get('email')?.value,
      this.registerForm.get('dob')?.value,
      this.registerForm.get('profilePic')?.value)
    this.toastr.success('',"User updated ",{
      timeOut: 2000,
      closeButton: true,
    })
  }

}

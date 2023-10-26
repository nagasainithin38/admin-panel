import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  registerForm: FormGroup

  constructor(private toastr: ToastrService,private userService:UsersService) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      profilePic:new FormControl('https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg')
    })
  }
  registerUser() {


  
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
      if(this.userService.usersData[i].username==this.registerForm.get('username')?.value){
        this.toastr.error('',"User exists already",{
          timeOut: 2000,
          closeButton: true,
        })
        return
      }
    }
    this.userService.addUsers(
      this.registerForm.get('name')?.value,
      this.registerForm.get('username')?.value,
      this.registerForm.get('password')?.value,
      this.registerForm.get('email')?.value,
      new Date(this.registerForm.get('dob')?.value),
      this.registerForm.get('profilePic')?.value)
    this.toastr.success('',"User created ",{
      timeOut: 2000,
      closeButton: true,
    })
  }

}

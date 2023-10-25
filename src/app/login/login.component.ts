import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { LocalStorageService } from '../local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup
  constructor(private userService: UsersService, private toastr: ToastrService,private ls:LocalStorageService,private router:Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  
  verifyLogin() {


    if (this.loginForm.get('username')?.hasError('required')) {
      this.toastr.error('', 'Username is required', {
        timeOut: 2000,
        closeButton: true,
      })
      return
    }
    if (this.loginForm.get('password')?.hasError('required')) {
      this.toastr.error('', "Password is required", {
        timeOut: 2000,
        closeButton: true,
      })
      return
    }


    for(let i=0;i<this.userService.usersData.length;i++){
      if (this.userService.usersData[i].username == this.loginForm.get('username')?.value ){
        if(this.userService.usersData[i].password == this.loginForm.get('password')?.value){
          this.toastr.success('', 'Login Success', {
            timeOut: 2000,
            closeButton: true,
          })
          this.router.navigateByUrl('/home')
          this.ls.set('isLogin','true')
        }
        else{
          this.toastr.error('', 'Invalid Credentials', {
                  timeOut: 2000,
                  closeButton: true,
                })
        }
        return
      }
    }
    // for (let i = 0; i < this.userService.usersData.length; i++) {
    //   console.log(this.loginForm.get('username')?.value)
    //   console.log( this.loginForm.get('password')?.value)
    //   if (this.userService.usersData[i].username != this.loginForm.get('username')?.value ||
    //     this.userService.usersData[i].password != this.loginForm.get('password')?.value
    //   ) {
    //     this.toastr.error('', 'Invalid Credentials', {
    //       timeOut: 2000,
    //       closeButton: true,
    //     })
    //     return
    //   }
    // }
    // this.toastr.error('', 'Login UnSuccessful', {
    //   timeOut: 2000,
    //   closeButton: true,
    // })
   
    return

  }

}

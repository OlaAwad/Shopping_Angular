import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router:Router) {}

  errorMsg: string = ''
  isLoading: boolean = false

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email] ),
    password: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)] )
  })


  ngOnInit(): void {
  }

  submitloginForm(loginForm: FormGroup){
    this.isLoading = true
    // console.log(loginForm.value)
    if(loginForm.valid){
      this._AuthService.login(loginForm.value).subscribe({
        next:(res:any)=>{
          if(res.message == 'success'){
            this.isLoading = false
            localStorage.setItem('userToken', res.token)
            this._AuthService.saveUserData()
            // console.log(this._AuthService.userData)
            if(this._AuthService.email == 'admin@yahoo.com'){
              this._Router.navigate(['admin/adminPrd'])
            } else{
                //navigate to products
                this._Router.navigate(['/products'])
            }            
            // console.log('success')
          }else{
            this.isLoading = false
            //show error
            this.errorMsg = res.message
          }
        }
      })
    }
  }

  goToRegister(){
    this._Router.navigate(['/register'])
  }

  
}
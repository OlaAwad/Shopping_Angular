import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router:Router) {}

  errorMsg: string = ''
  isLoading: boolean = false

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, Validators.required ),
    last_name: new FormControl(null, Validators.required ),
    email: new FormControl(null, [Validators.required, Validators.email] ),
    password: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)] )
  })


  ngOnInit(): void {
  }

  submitRegisterForm(registerForm: FormGroup){
    this.isLoading = true
    // console.log(registerForm.value)
    if(registerForm.valid){
      this._AuthService.register(registerForm.value).subscribe({
        next:(res:any)=>{
          if(res.message == 'success'){
            this.isLoading = false
            //navigate to login
            this._Router.navigate(['/login'])
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

  
}

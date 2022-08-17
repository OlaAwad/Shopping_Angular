import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/users/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean = false

  constructor( private _AuthService: AuthService) { }

  ngOnInit(): void {
    this._AuthService.userData.subscribe({      
      next:() =>{
        if(this._AuthService.userData.getValue( ) != null){
          this.isLogin = true
        } else{
          this.isLogin = false 
        }
      }
    })
  }

  logout(){
    this._AuthService.logout()
  }

  checkIfAdmin(){
    if(localStorage.getItem("email") == "admin@yahoo.com"){
      // console.log('I am admin')
      return true
    } else{
      // console.log('I am user')
      return false
    }
  }
  


  
}

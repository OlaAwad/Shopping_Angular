import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject(null)
  email: string = ''
  firstName: string = ''
  currentPage: any
  isAdmin: boolean = true

  saveUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'))
    let decodedToken: any = jwtDecode(encodedToken)
    this.userData.next(decodedToken)
    // console.log(this.userData)
    this.email = decodedToken.email
    this.firstName = decodedToken.first_name
    // localStorage.setItem("name", this.firstName)
    console.log(decodedToken.first_name)
    console.log(this.email)
    localStorage.setItem("email", this.email)
    // console.log(decodedToken.email)
  }

  constructor(private _HttpClient:HttpClient, private _Router: Router) {
    if(localStorage.getItem("userToken") != null){
      this.saveUserData()
      this.currentPage = localStorage.getItem("lastVisitedPage")
      _Router.navigate(['/'+this.currentPage])
    }
  }

  register(formData: object):Observable<any>{
    return this._HttpClient.post(environment.baseAuthApi + 'signup',formData)
  }

  login(formData: object):Observable<any>{
 
    return this._HttpClient.post(environment.baseAuthApi + 'signin',formData)
  }

  logout(){
    localStorage.removeItem('userToken')
    localStorage.removeItem("email")
    // localStorage.removeItem("name")
    this.userData.next(null)
    this._Router.navigate(['/login'])
  }


}

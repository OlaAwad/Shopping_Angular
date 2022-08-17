import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private _HttpClient:HttpClient) { }

  createNewOrder(info: any){
    return this._HttpClient.post(environment.baseApi+'carts/add', info)
  }
}

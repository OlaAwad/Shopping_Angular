import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminCartService {

  constructor(private _HttpClient: HttpClient) { }

  getOrders(){
    return this._HttpClient.get(environment.baseApi+'carts')
  }
}

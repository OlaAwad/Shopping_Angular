import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EditProductsService {

  constructor(private _HttpClient: HttpClient) { }

  getAllProducts(){
    return this._HttpClient.get(environment.baseApi + 'products')
  }

  getAllCategories(){
    return this._HttpClient.get(environment.baseApi + 'products/categories')
  }

  createProduct(model: any){
    return this._HttpClient.post(environment.baseApi + 'products/add', model)
  }

  updateProduct(model: any, id){
    return this._HttpClient.put(environment.baseApi + 'products/' + {id}, model)
  }

}

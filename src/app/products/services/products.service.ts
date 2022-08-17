
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient: HttpClient) { }

  getAllProducts(){
    return this._HttpClient.get(environment.baseApi + 'products')
  }
  
  getAllCategories(){
    return this._HttpClient.get(environment.baseApi + 'products/categories')
  }

  getProductsByCat(cat:string){
    return this._HttpClient.get(environment.baseApi + 'products/category/' + cat)
  }

  getProductbyId(id:any){
    return this._HttpClient.get(environment.baseApi + 'products/' + id)
  }

  search(word: string){
    return this._HttpClient.get(environment.baseApi + 'products/search?q=' + word)
  }
}

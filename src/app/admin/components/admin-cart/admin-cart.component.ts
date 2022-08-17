import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products/models/products';
import { AdminCartService } from '../../services/admin-cart.service';


@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.css']
})
export class AdminCartComponent implements OnInit {

  orders: any
  products: Products[] = []
  title: string =''

  constructor(private _AdminCartService: AdminCartService) { }

  ngOnInit(): void {
    localStorage.setItem("lastVisitedPage", "adminCart")
    this.getOrders()
  }

  getOrders(){
    this._AdminCartService.getOrders().subscribe({
      next: (res: any) =>{
        this.orders = res.carts     
        
   
      }
    })
    console.log(this.orders)
  }

  toArray(products: object){
     return Object.keys(products).map(key => products[key]) 
  }



}

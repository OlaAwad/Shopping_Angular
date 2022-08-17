import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './component/cart/cart.component';
import { CartsRoutingModule } from './carts-routing.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CartComponent, CartsRoutingModule]
})
export class CartsModule { }

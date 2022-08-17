import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductsComponent } from './components/products/products.component'
import { AdminCartComponent } from './components/admin-cart/admin-cart.component'
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module'


@NgModule({
  declarations: [ProductsComponent, AdminCartComponent],
  imports: [CommonModule, SharedModule, RouterModule, FormsModule, ReactiveFormsModule, AdminRoutingModule],
  exports:[ProductsComponent, AdminRoutingModule]
})
export class AdminModule {}

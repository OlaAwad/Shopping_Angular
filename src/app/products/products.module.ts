import { NgModule} from '@angular/core'
import { CommonModule } from '@angular/common'
import { AllProductsComponent } from './components/all-products/all-products.component'
import { ProductDetailsComponent } from './components/product-details/product-details.component'
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router'
import { ProductsRoutingModule } from './products-routing.module'

@NgModule({
  declarations: [AllProductsComponent, ProductDetailsComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [AllProductsComponent, ProductDetailsComponent, ProductsRoutingModule],
})
export class ProductsModule {}

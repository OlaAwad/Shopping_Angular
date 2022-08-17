import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "../auth.guard";
import { AllProductsComponent } from "./components/all-products/all-products.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";

const routes: Routes = [
    {path:'', redirectTo:'userProducts', pathMatch:"full"},
    {path:"userProducts", component: AllProductsComponent},
    {path:"details/:id",  component: ProductDetailsComponent},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  

export class ProductsRoutingModule {}
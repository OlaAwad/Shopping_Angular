import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "../auth.guard";
import { AllProductsComponent } from "./components/all-products/all-products.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";

const routes: Routes = [
    {path:'', redirectTo:'userProducts', pathMatch:"full"},
    {path:"userProducts",canActivate:[AuthGuard], component: AllProductsComponent},
    {path:"details/:id",canActivate:[AuthGuard] ,  component: ProductDetailsComponent},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  

export class ProductsRoutingModule {}
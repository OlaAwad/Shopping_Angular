import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "../auth.guard";
import { AdminCartComponent } from "./components/admin-cart/admin-cart.component";
import { ProductsComponent } from "./components/products/products.component";


const routes: Routes = [
    {path:'', redirectTo:'adminPrd', pathMatch:"full"},
    {path:'adminPrd',canActivate:[AuthGuard], component: ProductsComponent},
    {path:"adminCart",canActivate:[AuthGuard], component: AdminCartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}

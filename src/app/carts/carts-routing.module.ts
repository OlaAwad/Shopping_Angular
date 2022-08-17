import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "../auth.guard";
import { CartComponent } from "./component/cart/cart.component";

const routes: Routes = [
    {path:'', redirectTo:'cart', pathMatch:"full"},
    {path:'cart', canActivate:[AuthGuard], component: CartComponent}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  

export class CartsRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"", redirectTo:"products", pathMatch: 'full'},

  {path:"products", loadChildren:()=> import('./products/products.module').then((x)=> x.ProductsModule)},

  {path:"cart", loadChildren:()=> import ('./carts/carts.module').then((x)=> x.CartsModule) },

  {path:"user", loadChildren:()=> import('./users/users.module').then((x)=> x.UsersModule)},

  {path:"admin", loadChildren:()=> import('./admin/admin.module').then((x)=> x.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

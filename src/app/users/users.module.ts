import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ], 
  exports:[
    LoginComponent,
    RegisterComponent, 
    UsersRoutingModule
  ]
})
export class UsersModule { }

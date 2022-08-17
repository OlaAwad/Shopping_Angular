import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './components/header/header.component'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  exports: [HeaderComponent, SpinnerComponent, FormsModule],
})
export class SharedModule {}

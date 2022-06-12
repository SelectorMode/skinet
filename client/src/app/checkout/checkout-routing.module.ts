import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { RouterModule, Routes } from '@angular/router';

const routs: Routes = [
  {path: '', component: CheckoutComponent}
]

@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    RouterModule.forChild(routs)
  ],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }

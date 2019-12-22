import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { RouterModule } from '@angular/router';
import { AuthGaurd } from 'app/shared/services/auth-gaurd.service';

@NgModule({
  declarations: [
    CheckOutComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ShippingFormComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path:'shopping-cart' ,component: ShoppingCartComponent},

      {path:'check-out' ,component: CheckOutComponent,canActivate:[AuthGaurd]},
      {path:'my-orders' ,component: MyOrdersComponent,canActivate:[AuthGaurd]},
      {path : 'order-success/:id' , component:OrderSuccessComponent,canActivate:[AuthGaurd]}
    ])
  ]
})
export class ShoppingModule { }

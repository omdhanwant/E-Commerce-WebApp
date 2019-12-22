import { NgModule } from '@angular/core';
import { AdminUserService as AdminUserGaurd } from './services/admin-user.service';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { RouterModule } from '@angular/router';
import { AuthGaurd } from 'app/shared/services/auth-gaurd.service';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot([
      {path:'admin/products/new' ,
      component:ProductFormComponent,
      canActivate:[AuthGaurd,AdminUserGaurd]},

      {path:'admin/products/:id' ,
      component:ProductFormComponent,
      canActivate:[AuthGaurd,AdminUserGaurd]},

      {path:'admin/products' ,
      component:AdminProductsComponent,
      canActivate:[AuthGaurd,AdminUserGaurd]},

      {path : 'admin/orders' ,
      component : AdminOrdersComponent,
      canActivate:[AuthGaurd,AdminUserGaurd]}
    ])
  ],
  providers:[
    AdminUserGaurd
  ]
})
export class AdminModule { }

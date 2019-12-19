import {environment} from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {RouterModule} from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { DataTableModule } from 'angular5-data-table';
import { CustomFormsModule } from 'ng2-validation'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurd } from './services/auth-gaurd.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AdminUserService as AdminUserGaurd } from './services/admin-user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductQuantityComponent } from './products/product-quantity/product-quantity.component';
import { OrderService } from './services/order.service';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    DataTableModule,
    CustomFormsModule,
    RouterModule.forRoot([
      {path: '', component:ProductsComponent},
      {path:'product' ,component : ProductsComponent},
      {path:'shopping-cart' ,component: ShoppingCartComponent},
      {path : 'login' , component:LoginComponent},


      {path:'check-out' ,component: CheckOutComponent,canActivate:[AuthGaurd]},
      {path:'my-orders' ,component: MyOrdersComponent,canActivate:[AuthGaurd]},
      {path : 'order-success/:id' , component:OrderSuccessComponent,canActivate:[AuthGaurd]},

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
  providers: [
    AuthGaurd,
    AuthService,
    UserService,
    AdminUserGaurd,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

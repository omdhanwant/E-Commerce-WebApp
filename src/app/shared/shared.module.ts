import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGaurd } from './services/auth-gaurd.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { OrderService } from './services/order.service';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular5-data-table';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { OrderDetailCardComponent } from './components/order-detail-card/order-detail-card.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    OrderCardComponent,
    OrderDetailCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    OrderModule
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    CustomFormsModule,
    FormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    OrderCardComponent,
    OrderDetailCardComponent,
    OrderModule
  ],
  providers:[
    AuthGaurd,
    AuthService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
